import { useEffect, useState } from 'react'

const usePrefersColorScheme = () => {
  const [prefersColorScheme, setPrefersColorScheme] = useState<
    'light' | 'dark'
  >('light')

  useEffect(() => {
    const onChangePrefersColorScheme = (e: MediaQueryListEvent) => {
      const newPrefersColorScheme = e.matches ? 'dark' : 'light'
      setPrefersColorScheme(newPrefersColorScheme)
    }

    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')

    matchMedia.addEventListener('change', onChangePrefersColorScheme)

    return () => {
      matchMedia.removeEventListener('change', onChangePrefersColorScheme)
    }
  }, [])

  return { prefersColorScheme }
}

export default usePrefersColorScheme
