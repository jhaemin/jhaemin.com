import { atom } from 'recoil'

const prefersColorSchemeState = atom<'light' | 'dark'>({
  key: 'PrefersColorScheme',
  default: 'light',
})

export default prefersColorSchemeState
