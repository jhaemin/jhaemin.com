import OnlyAdmin from '@/components/OnlyAdmin'
import PageInfo from '@/components/PageInfo'
import Button from '@/components/ui/button/Button'
import Flex from '@/components/ui/flex/Flex'
import marked from '@/modules/web/jhm-marked'
import prisma from '@/prisma'
import { Page } from '@/types/general'
import { withSessionPage } from '@/utils/node/with-session'
import { Article } from '@prisma/client'
import Link from 'next/link'
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

      <Flex direction="column" gap={40}>
        <OnlyAdmin>
          <div>
            <Link href={`/articles/editor?articleId=${article.id}`}>
              <a>
                <Button>Edit</Button>
              </a>
            </Link>
          </div>
        </OnlyAdmin>

        <div>
          <article
            className={$.article}
            dangerouslySetInnerHTML={{
              __html: marked.parse(article.content),
            }}
          />
        </div>
      </Flex>
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
