import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { Session } from 'next-iron-session'
import { ParsedUrlQuery } from 'querystring'

export type JhmGetServerSidePropsContext<
  Q extends ParsedUrlQuery = ParsedUrlQuery
> = GetServerSidePropsContext<Q> & {
  req: GetServerSidePropsContext['req'] & {
    session: Session
    userId?: number
  }
}

export type JhmGetServerSideProps<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery
> = (
  context: JhmGetServerSidePropsContext<Q>
) => Promise<GetServerSidePropsResult<P>>
