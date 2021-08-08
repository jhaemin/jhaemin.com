import CushionLink from '@/components/CushionLink'
import OnlyAdmin from '@/components/OnlyAdmin'
import PageInfo from '@/components/PageInfo'
import Button from '@/components/ui/button/Button'
import prisma from '@/prisma'
import { Page } from '@/types/general'
import { JhmGetServerSideProps } from '@/types/next'
import { withSessionPage } from '@/utils/node/with-session'
import { Article } from '@prisma/client'
import dayjs from 'dayjs'
import Link from 'next/link'
import $ from './Articles.module.scss'

type ArticlesMainPageProps = {
  articles: Omit<Article, 'id' | 'content'>[]
}

const ArticlesMainPage: Page<ArticlesMainPageProps> = ({ articles }) => {
  return (
    <div>
      <PageInfo title="Articles | Jang Haemin" />

      {/* {isAdmin && <Button className={$.newButton}>New</Button>} */}

      <OnlyAdmin>
        <Link href="/articles/editor">
          <a>
            <Button className={$.newButton}>New</Button>
          </a>
        </Link>
      </OnlyAdmin>

      <ol className={$.articlesList}>
        {articles.map(({ title, key, writtenAt }) => (
          <li key={key} className={$.articleListItem}>
            <CushionLink href={`/articles/${key}`}>
              <div className={$.articleItem}>
                <span className={$.articleWrittenAt}>
                  {dayjs(writtenAt).format('YYYY. MM. DD')}
                </span>
                <span className={$.articleTitle}>{title}</span>
              </div>
            </CushionLink>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ArticlesMainPage

export const get: JhmGetServerSideProps<ArticlesMainPageProps> = async ({
  req,
}) => {
  const props: ArticlesMainPageProps = {
    articles: [],
  }

  props.articles = await prisma.article.findMany({
    orderBy: {
      writtenAt: 'desc',
    },
    select: {
      title: true,
      key: true,
      writtenAt: true,
    },
  })

  return { props }
}

export const getServerSideProps = withSessionPage(get)
