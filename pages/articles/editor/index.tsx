import prisma from '@/prisma'
import { Page } from '@/types/general'
import { withSessionPage } from '@/utils/node/with-session'
import { Article } from '@prisma/client'
import { useEffect, useRef } from 'react'
import $ from './ArticleEditor.module.scss'

export type ArticleEditorProps = {
  article: Article | null
}

const ArticleEditor: Page<ArticleEditorProps> = ({ article }) => {
  const articleIdRef = useRef(article?.id)
  const articleContentRef = useRef('')
  const textAreaRef = useRef<HTMLTextAreaElement>(null!)

  useEffect(() => {
    if (article) {
      textAreaRef.current.value = article.content
    }
  }, [])

  return (
    <div>
      <textarea ref={textAreaRef} className={$.editorTextArea} />
    </div>
  )
}

export default ArticleEditor

export const getServerSideProps = withSessionPage<ArticleEditorProps>(
  async ({ query }) => {
    const articleId = parseInt((query.articleId as string | undefined) ?? '0')
    const article = await prisma.article.findUnique({
      where: {
        id: articleId,
      },
    })

    return {
      props: {
        article,
      },
    }
  },
  {
    onlyAdmin: true,
  }
)
