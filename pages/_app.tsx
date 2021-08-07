import PageInfo from '@/components/PageInfo'
import '@/components/ui/global/web-ui.scss'
import LayoutWrapper from '@/layouts/LayoutWrapper'
import '@/styles/global-styles.scss'
import '@/styles/nprogress.scss'
import axiom from '@/utils/web/axiom'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import nProgress from 'nprogress'
import { useEffect, useState } from 'react'
import { SWRConfig } from 'swr'

const faviconIcoHrefLight = '/favicon.ico'
const faviconIcoHrefDark = '/favicon-dark.ico'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [faviconIcoHref, setFaviconIcoHref] = useState(faviconIcoHrefLight)

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-page',
      router.pathname.split('/')[1]
    )
  }, [router.pathname])

  useEffect(() => {
    const updateFaviconToLight = () => setFaviconIcoHref(faviconIcoHrefLight)
    const updateFaviconToDark = () => setFaviconIcoHref(faviconIcoHrefDark)

    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      updateFaviconToDark()
    }

    const onChangeColorScheme = (e: MediaQueryListEvent) => {
      const newColorScheme = e.matches ? 'dark' : 'light'

      if (newColorScheme === 'dark') {
        updateFaviconToDark()
      } else {
        updateFaviconToLight()
      }
    }

    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')

    matchMedia.addEventListener('change', onChangeColorScheme)

    return () => {
      matchMedia.removeEventListener('change', onChangeColorScheme)
    }
  }, [])

  useEffect(() => {
    nProgress.configure({ showSpinner: false })

    Router.events.on('routeChangeStart', () => nProgress.start())
    Router.events.on('routeChangeComplete', () => nProgress.done())
    Router.events.on('routeChangeError', () => nProgress.done())
  }, [])

  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href={faviconIcoHref} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#333333" />
      </Head>

      <PageInfo
        title="Jang Haemin | 장해민"
        ogImage="https://jhaemin.com/og/jhaemin_open_graph_main.png"
      />

      <SWRConfig
        value={{
          fetcher: async (url) => {
            const res = await axiom.get(url)

            return res.data
          },
        }}
      >
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </SWRConfig>
    </>
  )
}
export default MyApp
