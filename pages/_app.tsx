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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
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
