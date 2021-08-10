import prisma from '@/prisma'
import { makeApiHandler } from '@/utils/node/make-handler'
import { ApiDataSkeleton, validate } from '@/utils/node/validate'

export type PublishArticleReqData = {
  articleId: number
}

export const PublishArticleReqDataSkeleton: ApiDataSkeleton<PublishArticleReqData> =
  {
    articleId: 'number',
  }

const handler = makeApiHandler(async (req, res) => {
  validate(req.body, PublishArticleReqDataSkeleton, res)

  const { articleId } = req.body as PublishArticleReqData

  await prisma.article.update({
    where: {
      id: articleId,
    },
    data: {
      publishedAt: new Date(),
    },
  })

  res.json({ err: null })
})

export default handler
