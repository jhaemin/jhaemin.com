import { error } from '@/constants/error'
import { JhmApiRequest, JhmApiResponse } from '@/types/general'
import {
  JhmGetServerSideProps,
  JhmGetServerSidePropsContext,
} from '@/types/next'
import { Handler, SessionOptions, withIronSession } from 'next-iron-session'
import { ParsedUrlQuery } from 'querystring'

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

export const withSessionApi = <Payload>(
  handler: Handler<JhmApiRequest, JhmApiResponse<Payload>>,
  /** Custom options */
  options?: JhmSessionOptions
) => {
  return withIronSession(
    async (req: JhmApiRequest, res: JhmApiResponse<Payload>) => {
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
    },
    sessionOptions
  )
}

export const withSessionPage = <
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery
>(
  handler: JhmGetServerSideProps<P, Q>,
  options?: {
    noAccessWithSignedIn: boolean
  }
) =>
  withIronSession(async (context: JhmGetServerSidePropsContext<Q>) => {
    const sessionUserId = context.req.session.get('userId') as number

    if (sessionUserId) {
      context.req.userId = sessionUserId

      if (options?.noAccessWithSignedIn) {
        return {
          redirect: {
            permanent: false,
            destination: '/',
          },
          props: {},
        }
      }
    }

    return handler(context)
  }, sessionOptions)
