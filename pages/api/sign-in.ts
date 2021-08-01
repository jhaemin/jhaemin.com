import { error } from '@/constants/error'
import prisma from '@/prisma'
import Mailer from '@/utils/node/email'
import generateMagicKey from '@/utils/node/generate-magic-key'
import { makeHandler } from '@/utils/node/make-handler'
import { ApiDataSkeleton, validate } from '@/utils/node/validate'
import { withSessionApi } from '@/utils/node/with-session'

type LoginReqBody = {
  email: string
}

const loginReqSkeleton: ApiDataSkeleton<LoginReqBody> = {
  email: 'string',
}

const handler = makeHandler(async (req, res) => {
  const body = req.body as LoginReqBody

  validate(req.body, loginReqSkeleton, res)

  const { email } = body

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    return res.json({
      err: error.AUTH_005,
    })
  }

  const magicKey = generateMagicKey()
  const now = new Date()

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      issuedAt: now,
      magicKey,
    },
  })

  Mailer.sendMail({
    subject: 'Sign in to jhaemin.com',
    to: email,
    html: `Magic Key: <b>${magicKey}</b>`,
  })

  res.json({ err: null })
})

export default withSessionApi(handler)
