import { ReactNode } from 'react'
import DefaultLayout from './DefaultLayout'
import EmptyLayout from './EmptyLayout'

const layouts = {
  default: DefaultLayout,
  empty: EmptyLayout,
}

export type LayoutName = keyof typeof layouts

type LayoutWrapperProps = {
  children: ReactNode
}

function LayoutWrapper(props: LayoutWrapperProps) {
  const Layout =
    layouts[(props.children as any).type.layout as keyof typeof layouts]

  if (Layout) {
    return <Layout {...props}>{props.children}</Layout>
  }

  return <DefaultLayout {...props}>{props.children}</DefaultLayout>
}

export default LayoutWrapper
