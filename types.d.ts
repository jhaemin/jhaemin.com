import { FC } from 'react'
import { LayoutName } from './layouts/LayoutWrapper'

export type JFC = FC & {
  layout?: LayoutName
}
