import { LayoutName } from '@/layouts/LayoutWrapper'
import { User } from '@prisma/client'
import { NextApiRequest, NextApiResponse, NextPage } from 'next'
import { Session } from 'next-iron-session'
import { FunctionComponent, SVGProps } from 'react'
import { ErrorCode } from './error'

export type Page<P = {}> = NextPage<P> & {
  layout?: LayoutName
}

export type SVGComponent = FunctionComponent<SVGProps<SVGElement>>

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export interface JhmApiRequest extends NextApiRequest {
  session: Session
  user: User
}

export type ResponseData = {
  err: null | {
    code: string
    msg: string
  }
  payload: Record<string, any>
}

export interface JhmApiResponse extends NextApiResponse<ResponseData> {}
