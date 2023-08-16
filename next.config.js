const { paramCase } = require('change-case')
const loaderUtils = require('loader-utils')

const regexEqual = (x, y) => {
  return (
    x instanceof RegExp &&
    y instanceof RegExp &&
    x.source === y.source &&
    x.global === y.global &&
    x.ignoreCase === y.ignoreCase &&
    x.multiline === y.multiline
  )
}

const localIdent = (loaderContext, localIdentName, localName, options) => {
  const fileName = loaderUtils
    .interpolateName(loaderContext, `[name]`, options)
    .toLowerCase()

  const dotSplit = fileName.split('.')
  const moduleIndex = dotSplit.indexOf('module')

  const realModuleName =
    moduleIndex === -1 ? fileName : dotSplit[moduleIndex - 1]

  return `${paramCase(realModuleName)}-${paramCase(localName)}`
}

function cssLoaderOptions(modules) {
  const { getLocalIdent, ...others } = modules // Need to delete getLocalIdent else localIdentName doesn't work
  return {
    ...others,
    getLocalIdent: localIdent,
    mode: 'local',
  }
}

/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    scrollRestoration: true,
  },
  webpack: (config) => {
    const oneOf = config.module.rules.find(
      (rule) => typeof rule.oneOf === 'object'
    )

    if (oneOf) {
      // Find the module which targets *.scss|*.sass files
      const moduleSassRule = oneOf.oneOf.find((rule) =>
        regexEqual(rule.test, /\.module\.(scss|sass)$/)
      )

      if (moduleSassRule) {
        // Get the config object for css-loader plugin
        const cssLoader = moduleSassRule.use.find(({ loader }) =>
          loader.includes('css-loader')
        )

        if (cssLoader) {
          cssLoader.options = {
            ...cssLoader.options,
            modules: cssLoaderOptions(cssLoader.options.modules),
          }
        }
      }
    }

    return config
  },
}
