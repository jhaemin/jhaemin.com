import { error } from '@/constants/error'
import { prisma } from '@/prisma'
import { isEmail } from '@/utils/both/regex'
import Mailer from '@/utils/node/email'
import generateMagicKey from '@/utils/node/generate-magic-key'
import { makeHandler } from '@/utils/node/make-handler'
import { ApiDataSkeleton, validate } from '@/utils/node/validate'

export type JoinReqBody = {
  email: string
}

const joinReqBody: ApiDataSkeleton = {
  email: 'string',
}

const handler = makeHandler(async (req, res) => {
  validate(req.body, joinReqBody, res)

  const body = req.body as JoinReqBody
  const email = body.email.trim()

  if (!isEmail(email)) {
    return res.json({ err: error.AUTH_004 })
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (existingUser) {
    return res.json({
      err: error.AUTH_001,
    })
  }

  const now = new Date()

  const magicKey = generateMagicKey()

  await prisma.pendingUser.upsert({
    where: {
      email,
    },
    create: {
      email,
      magicKey,
      issuedAt: now,
      joinedAt: now,
    },
    update: {
      email,
      magicKey,
      issuedAt: now,
      joinedAt: now,
    },
  })

  Mailer.sendMail({
    subject: 'Join jhaemin.com',
    to: email,
    html: `${magicKey}`,
  })

  res.json({ err: null })
})

export default handler
