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

export type ResponseData<Payload = undefined> = null | {
  err: null | {
    code: string
    msg: string
  }
  payload?: Payload
}

export type ResponsePayload = Record<string, any> | undefined | null

export interface JhmApiResponse<Payload extends ResponsePayload = undefined>
  extends NextApiResponse<ResponseData<Payload>> {}
