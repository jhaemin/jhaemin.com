import PageInfo from '@/components/PageInfo'
import LayoutWrapper from '@/layouts/LayoutWrapper'
import '@/styles/global-styles.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-page',
      router.pathname.replace(/\//g, '')
    )
  }, [router.pathname])

  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#333333" />
      </Head>

      <PageInfo
        title="Jang Haemin"
        ogImage="https://jhaemin.com/og/jhaemin_open_graph_main.png"
      />

      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </>
  )
}
export default MyApp
