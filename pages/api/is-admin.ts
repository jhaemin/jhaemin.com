import prisma from '@/prisma'
import { makeApiHandler } from '@/utils/node/make-handler'
import { withSessionApi } from '@/utils/node/with-session'

export type IsAdminResPayload = {
  isAdmin: boolean
}

const handler = makeApiHandler<IsAdminResPayload>(async (req, res) => {
  const payload: IsAdminResPayload = {
    isAdmin: false,
  }

  const admin = await prisma.admin.findUnique({
    where: {
      userId: req.userId ?? -1,
    },
  })

  if (admin) {
    payload.isAdmin = true
  }

  return res.json({
    err: null,
    payload,
  })
})

export default withSessionApi(handler)
