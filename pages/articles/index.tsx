import PageInfo from '@/components/PageInfo'
import { prisma } from '@/prisma'
import { Page } from '@/types/general'
import { Article } from '@prisma/client'
import dayjs from 'dayjs'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import $ from './Articles.module.scss'

type ArticlesMainPageProps = {
  articles: Omit<Article, 'id' | 'content'>[]
}

const ArticlesMainPage: Page<ArticlesMainPageProps> = ({ articles }) => {
  return (
    <div>
      <PageInfo title="Articles | Jang Haemin" />

      <ol className={$.articlesList}>
        {articles.map(({ title, key, writtenAt }) => (
          <Link key={key} href={`/articles/${key}`}>
            <a>
              <li className={$.articleItem}>
                <span className={$.articleWrittenAt}>
                  {dayjs(writtenAt).format('YYYY. MM. DD')}
                </span>
                <span className={$.articleTitle}>{title}</span>
              </li>
            </a>
          </Link>
        ))}
      </ol>
    </div>
  )
}

export default ArticlesMainPage

export const getServerSideProps: GetServerSideProps<ArticlesMainPageProps> =
  async () => {
    const articles = await prisma.article.findMany({
      orderBy: {
        writtenAt: 'desc',
      },
      select: {
        title: true,
        key: true,
        writtenAt: true,
      },
    })

    return {
      props: {
        articles,
      },
    }
  }
