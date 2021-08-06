import marked from '@/modules/web/jhm-marked'
import prisma from '@/prisma'
import { Page } from '@/types/general'
import { withSessionPage } from '@/utils/node/with-session'
import { Article } from '@prisma/client'
import { debounce } from 'lodash'
import { ChangeEventHandler, useEffect, useRef, useState } from 'react'
import $ from './ArticleEditor.module.scss'

export type ArticleEditorProps = {
  article: Article | null
}

const ArticleEditor: Page<ArticleEditorProps> = ({ article }) => {
  const articleIdRef = useRef(article?.id)
  const articleContentRef = useRef('')
  const textAreaRef = useRef<HTMLTextAreaElement>(null!)
  const [parsed, setParsed] = useState('')

  useEffect(() => {
    if (article) {
      textAreaRef.current.value = article.content
    }
  }, [])

  return (
    <div>
      <textarea
        ref={textAreaRef}
        className={$.editorTextArea}
        onChange={debounce<ChangeEventHandler<HTMLTextAreaElement>>((e) => {
          setParsed(marked.parse(e.target.value))
        }, 300)}
      />

      <div dangerouslySetInnerHTML={{ __html: parsed }} />
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
