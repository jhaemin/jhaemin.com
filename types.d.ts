import { NextPage } from 'next'
import { FunctionComponent, SVGProps } from 'react'
import { LayoutName } from './layouts/LayoutWrapper'

export type Page = NextPage & {
  layout?: LayoutName
}

export type SVGComponent = FunctionComponent<SVGProps<SVGElement>>
