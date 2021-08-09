import { LayoutName } from '@/layouts/LayoutWrapper'
import { NextApiRequest, NextApiResponse, NextPage } from 'next'
import { Session } from 'next-iron-session'
import { FunctionComponent, SVGProps } from 'react'

export type Page<P = {}> = NextPage<P> & {
  layout?: LayoutName
  name?: string
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
  userId?: number
}

export type ResponseData<Payload> = null | {
  err: null | {
    code: string
    msg: string
  }
  payload?: Payload
}

export interface JhmApiResponse<
  Payload extends Record<string, any> | undefined = undefined
> extends NextApiResponse<ResponseData<Payload>> {}
