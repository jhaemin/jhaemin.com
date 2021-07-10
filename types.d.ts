import { NextPage } from 'next'
import { LayoutName } from './layouts/LayoutWrapper'

export type Page = NextPage & {
  layout?: LayoutName
}
