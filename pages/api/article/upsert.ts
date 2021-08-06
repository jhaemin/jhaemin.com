import { error } from '@/constants/error'
import prisma from '@/prisma'
import { makeApiHandler } from '@/utils/node/make-handler'
import { ApiDataSkeleton, validate } from '@/utils/node/validate'
import { withSessionApi } from '@/utils/node/with-session'

export type UpsertArticleReqBody = {
  articleId: number
  articleKey: string
  title: string
  content: string
}

export type UpsertArticlePayload = {
  articleId: number
}

const upsertArticleSkeleton: ApiDataSkeleton<UpsertArticleReqBody> = {
  articleId: 'number',
  articleKey: 'string',
  title: 'string',
  content: 'string',
}

const handler = makeApiHandler<UpsertArticlePayload>(async (req, res) => {
  validate(req.body, upsertArticleSkeleton, res)

  if (!req.userId) {
    return res.json({
      err: error.AUTH_000,
    })
  }

  const {
    articleId: id,
    articleKey: key,
    title,
    content,
  } = req.body as UpsertArticleReqBody
  const now = new Date()

  const article = await prisma.article.upsert({
    where: {
      id,
    },
    update: {
      key,
      title,
      content,
    },
    create: {
      key,
      title,
      content,
      writtenAt: now,
    },
  })

  res.json({
    err: null,
    payload: {
      articleId: article.id,
    },
  })
})

export default withSessionApi(handler)
