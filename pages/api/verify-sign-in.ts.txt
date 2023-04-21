import { error } from '@/constants/error'
import prisma from '@/prisma'
import { makeApiHandler } from '@/utils/node/make-handler'
import { ApiDataSkeleton, validate } from '@/utils/node/validate'
import { withSessionApi } from '@/utils/node/with-session'

export type VerifySignInReqBody = {
  email: string
  magicKey: string
}

export const verifySignInReqSkeleton: ApiDataSkeleton<VerifySignInReqBody> = {
  email: 'string',
  magicKey: 'string',
}

const handler = makeApiHandler(async (req, res) => {
  validate(req.body, verifySignInReqSkeleton, res)

  const body = req.body as VerifySignInReqBody
  const { email, magicKey } = body

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    return res.json({ err: error.AUTH_000 })
  }

  if (user.magicKey !== magicKey) {
    return res.json({ err: error.AUTH_003 })
  }

  await prisma.user.update({
    where: {
      email,
    },
    data: {
      magicKey: null,
      issuedAt: null,
    },
  })

  req.session.set('userId', user.id)

  await req.session.save()

  res.json({ err: null })
})

export default withSessionApi(handler)
