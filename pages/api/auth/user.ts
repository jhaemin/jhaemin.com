import prisma from '@/prisma'
import { HttpMethod } from '@/types/general'
import { makeApiHandler } from '@/utils/node/make-handler'
import { withSessionApi } from '@/utils/node/with-session'
import { User } from '@prisma/client'

export type GetUserPayload = {
  email: User['email']
} | null

const handler = makeApiHandler<GetUserPayload>(async (req, res) => {
  const { userId } = req

  if (!userId) {
    return res.json({
      err: null,
      payload: null,
    })
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })

  if (!user) {
    return res.json({
      err: null,
      payload: null,
    })
  }

  res.json({
    err: null,
    payload: {
      email: user.email,
    },
  })
}, HttpMethod.GET)

export default withSessionApi(handler)
