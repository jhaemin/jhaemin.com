import { error } from '@/constants/error'
import prisma from '@/prisma'
import { makeApiHandler } from '@/utils/node/make-handler'
import { ApiDataSkeleton, validate } from '@/utils/node/validate'

export type DeleteArticleReqData = {
  articleId: number
}

export const deleteArticleReqDataSkeleton: ApiDataSkeleton<DeleteArticleReqData> =
  {
    articleId: 'number',
  }

const handler = makeApiHandler(async (req, res) => {
  const body = req.body as DeleteArticleReqData
  validate(body, deleteArticleReqDataSkeleton, res)

  const { articleId } = body

  const article = await prisma.article.findUnique({
    where: {
      id: articleId,
    },
  })

  if (!article) {
    return res.json({
      err: error.ARTICLE_000,
    })
  }

  await prisma.article.update({
    where: {
      id: articleId,
    },
    data: {
      isDeleted: true,
    },
  })

  res.json({ err: null })
})

export default handler
