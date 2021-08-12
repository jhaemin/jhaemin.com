import Button from '@/components/ui/button/Button'
import Flex from '@/components/ui/flex/Flex'
import useIsAdmin from '@/hooks/use-is-admin'
import marked from '@/modules/web/jhm-marked'
import { DeleteArticleReqData } from '@/pages/api/article/delete'
import { PublishArticleReqData } from '@/pages/api/article/publish'
import {
  UpsertArticlePayload,
  UpsertArticleReqData,
} from '@/pages/api/article/upsert'
import prisma from '@/prisma'
import { Page, ResponseData } from '@/types/general'
import { withSessionPage } from '@/utils/node/with-session'
import axiom from '@/utils/web/axiom'
import { Article } from '@prisma/client'
import { paramCase } from 'change-case'
import clsx from 'clsx'
import { debounce } from 'lodash'
import { useRouter } from 'next/router'
import { ChangeEventHandler, useEffect, useRef, useState } from 'react'
import $ from './ArticleEditor.module.scss'

export type ArticleEditorProps = {
  article: Article | null
}

const ArticleEditor: Page<ArticleEditorProps> = ({ article }) => {
  const [articleId, setArticleId] = useState(article?.id)
  const articleContentRef = useRef(article?.content)
  const textAreaRef = useRef<HTMLTextAreaElement>(null!)
  const [parsed, setParsed] = useState(marked.parse(article?.content ?? ''))
  const isAdmin = useIsAdmin()
  const [isPreviewHidden, setIsPreviewHidden] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (!article) {
      window.history.replaceState(null, document.title, 'editor')
    }
  }, [article])

  useEffect(() => {
    document.body.style.setProperty('--jhm-main-view-max-width', '1800px')

    return () => {
      document.body.style.removeProperty('--jhm-main-view-max-width')
    }
  }, [])

  useEffect(() => {
    if (article) {
      textAreaRef.current.value = article.content
    }
  }, [article])

  return (
    <div
      className={clsx($.editor, {
        [$.previewHidden]: isPreviewHidden,
      })}
    >
      <div className="mb-5">
        <Flex alignItems="center" justifyContent="space-between">
          <Flex gap={10}>
            <Button
              onClick={async () => {
                const content = articleContentRef.current

                if (!content) {
                  window.alert('No content')
                  return
                }

                const firstLine = content.split('\n')[0]

                if (!firstLine.startsWith('# ')) {
                  window.alert('No title')
                  return
                }

                const title = firstLine.replace(/^# /g, '')
                const articleKey = paramCase(title)

                const data: UpsertArticleReqData = {
                  articleId: articleId ?? 0,
                  title,
                  articleKey,
                  content,
                }
                const res = await axiom.post<
                  ResponseData<UpsertArticlePayload>
                >('article/upsert', data)

                if (!res.data || res.data?.err) return

                if (!articleId) {
                  window.alert('Uploaded')
                } else {
                  window.alert('Updated')
                }

                setArticleId(res.data.payload?.articleId)

                window.history.replaceState(
                  null,
                  document.title,
                  `editor?articleId=${res.data.payload?.articleId}`
                )
              }}
            >
              Save
            </Button>
            {articleId && (
              <Button
                onClick={async () => {
                  const data: PublishArticleReqData = {
                    articleId,
                  }

                  const res = await axiom.post<ResponseData>(
                    'article/publish',
                    data
                  )

                  if (!res.data?.err) {
                    window.alert('Published')
                    router.push('/articles')
                  }
                }}
              >
                Publish
              </Button>
            )}
            <Button
              className={$.previewButton}
              onClick={() => {
                setIsPreviewHidden((prev) => !prev)
              }}
            >
              {isPreviewHidden ? 'Show' : 'Hide'} Preview
            </Button>
          </Flex>

          {articleId && (
            <Button
              onClick={async () => {
                if (!window.confirm('Really?')) {
                  return
                }

                const data: DeleteArticleReqData = {
                  articleId,
                }

                const res = await axiom.post<ResponseData>(
                  'article/delete',
                  data
                )

                if (res.data?.err) return

                window.alert('Successfully deleted')
                router.replace('/articles')
              }}
            >
              Delete
            </Button>
          )}
        </Flex>
      </div>

      <Flex className={$.content} gap={24} evenlyFill>
        <textarea
          ref={textAreaRef}
          className={$.editorTextArea}
          onChange={debounce<ChangeEventHandler<HTMLTextAreaElement>>((e) => {
            const content = e.target.value

            articleContentRef.current = content
            setParsed(marked.parse(content))
          }, 500)}
        />

        <div
          className={$.preview}
          dangerouslySetInnerHTML={{ __html: parsed || 'No content' }}
        />
      </Flex>
    </div>
  )
}

export default ArticleEditor

export const getServerSideProps = withSessionPage<ArticleEditorProps>(
  async ({ query }) => {
    const articleId = parseInt((query.articleId as string | undefined) ?? '0')
    const foundArticle = await prisma.article.findUnique({
      where: {
        id: articleId,
      },
    })

    const article = foundArticle?.isDeleted ? null : foundArticle

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
