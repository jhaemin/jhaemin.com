import { error } from '@/constants/error'
import { JhmApiRequest, JhmApiResponse } from '@/types/general'
import {
  JhmGetServerSideProps,
  JhmGetServerSidePropsContext,
} from '@/types/next'
import { Handler, SessionOptions, withIronSession } from 'next-iron-session'

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_PASSWORD as string,
  cookieName: process.env.SESSION_COOKIE_NAME as string,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}

type JhmSessionOptions = {
  requireAuth?: boolean
}

export const withSessionApi = (
  handler: Handler<JhmApiRequest, JhmApiResponse>,
  /** Custom options */
  options?: JhmSessionOptions
) => {
  return withIronSession(async (req: JhmApiRequest, res: JhmApiResponse) => {
    const sessionUser = req.session.get('userId') as number

    if (sessionUser) {
      req.userId = sessionUser
    }

    if (options?.requireAuth && !req.userId) {
      return res.json({
        err: error.AUTH_000,
      })
    }

    return handler(req, res)
  }, sessionOptions)
}

export const withSessionPage = (handler: JhmGetServerSideProps) =>
  withIronSession(async (context: JhmGetServerSidePropsContext) => {
    const sessionUserId = context.req.session.get('userId') as number

    if (sessionUserId) {
      context.req.userId = sessionUserId
    }

    return handler(context)
  }, sessionOptions)
