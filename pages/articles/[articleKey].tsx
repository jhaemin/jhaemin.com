import PageInfo from '@/components/PageInfo'
import { prisma } from '@/prisma'
import { Page } from '@/types/general'
import { withSessionPage } from '@/utils/node/with-session'
import { Article } from '@prisma/client'
import { paramCase } from 'change-case'
import clsx from 'clsx'
import marked from 'marked'
import $ from './ArticleView.module.scss'

marked.use({
  renderer: {
    paragraph: (text) => `<p class="${$.paragraph}">${text}</p>`,
    heading: (text, level) =>
      `<h${level} id="${paramCase(text)}" class="${clsx(
        $.heading,
        $['heading' + level]
      )}">${text}</h${level}>`,
    codespan: (code) => `<code class="${$.codeSpan}">${code}</code>`,
    blockquote: (quote) =>
      `<blockquote class="${$.blockquote}">${quote}</blockquote>`,
    hr: () => `<hr class="${$.horizontalRule}" />`,
    link: (href, title, text) =>
      `<a href="${href}" class="${$.link}">${text}</a>`,
    list: (body, ordered, start) => {
      const tag = ordered ? 'ol' : 'ul'

      return `<${tag} class="${$.list}">${body}</${tag}>`
    },
  },
})

export type ArticlePageProps = {
  article: Article | null
}

const ArticlePage: Page<ArticlePageProps> = ({ article }) => {
  if (!article) {
    return <div>No article</div>
  }

  return (
    <div>
      <PageInfo title={article.title} />

      <article
        className={$.article}
        dangerouslySetInnerHTML={{
          __html: marked.parse(article.content),
        }}
      />
    </div>
  )
}

export default ArticlePage

export const getServerSideProps = withSessionPage(async ({ query }) => {
  const articleKey = query.articleKey as string

  const article = await prisma.article.findUnique({
    where: {
      key: articleKey,
    },
  })

  return {
    props: {
      article,
    },
  }
})
