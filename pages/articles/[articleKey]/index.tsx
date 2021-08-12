import PageInfo from '@/components/PageInfo'
import marked from '@/modules/web/jhm-marked'
import prisma from '@/prisma'
import { Page } from '@/types/general'
import { withSessionPage } from '@/utils/node/with-session'
import { Article } from '@prisma/client'
import $ from './ArticleView.module.scss'

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

  let article = await prisma.article.findUnique({
    where: {
      key: articleKey,
    },
  })

  if (!article?.publishedAt) {
    article = null
  }

  return {
    props: {
      article,
    },
  }
})
