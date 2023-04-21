import { error } from '@/constants/error'
import prisma from '@/prisma'
import { JhmApiRequest, JhmApiResponse, ResponsePayload } from '@/types/general'
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
  onlyAdmin?: boolean
}

export const withSessionApi = <Payload extends ResponsePayload>(
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

      if (options?.onlyAdmin) {
        const admin = await prisma.admin.findUnique({
          where: {
            userId: req.userId ?? -1,
          },
        })

        if (!admin) {
          return res.json({
            err: error.AUTH_000,
          })
        }
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
    noAccessWithSignedIn?: boolean
    onlyAdmin?: boolean
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

      if (options?.onlyAdmin) {
        const admin = await prisma.admin.findUnique({
          where: {
            userId: sessionUserId ?? -1,
          },
        })

        if (!admin) {
          return {
            redirect: {
              permanent: false,
              destination: '/',
            },
            props: {},
          }
        }
      }
    }

    return handler(context)
  }, sessionOptions)
