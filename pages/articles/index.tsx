import CushionLink from '@/components/CushionLink'
import PageInfo from '@/components/PageInfo'
import Button from '@/components/ui/button/Button'
import prisma from '@/prisma'
import { Page } from '@/types/general'
import { JhmGetServerSideProps } from '@/types/next'
import { withSessionPage } from '@/utils/node/with-session'
import { Article } from '@prisma/client'
import dayjs from 'dayjs'
import $ from './Articles.module.scss'

type ArticlesMainPageProps = {
  articles: Omit<Article, 'id' | 'content'>[]
  isAdmin: boolean
}

const ArticlesMainPage: Page<ArticlesMainPageProps> = ({
  articles,
  isAdmin,
}) => {
  return (
    <div>
      <PageInfo title="Articles | Jang Haemin" />

      {isAdmin && <Button className={$.newButton}>New</Button>}

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
    isAdmin: false,
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

  const user = await prisma.user.findUnique({
    where: {
      id: req.userId,
    },
    include: {
      Admin: true,
    },
  })

  props.isAdmin = !!user?.Admin

  console.log(props)

  return { props }
}

export const getServerSideProps = withSessionPage(get)
