import LayoutWrapper from '@/layouts/LayoutWrapper'
import '@/styles/global-styles.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  )
}
export default MyApp
