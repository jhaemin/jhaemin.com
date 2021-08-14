import { camelCase, pascalCase } from 'change-case'
import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const apiDirectory = path.resolve(__dirname, '../pages/api')

/**
 * @type {{ urlPath: string; name: string }[]}
 */
const apis = []

function analyze(directory) {
  fs.readdirSync(directory).forEach((file) => {
    file = path.join(directory, file)

    if (fs.statSync(file).isDirectory()) {
      analyze(file)
    } else {
      const urlPath = file
        .replace(apiDirectory, '')
        .replace(/\.ts$/g, '')
        .replace(/^\//g, '')
      const name = urlPath
        .split('/')
        .map((item, index) => {
          if (index === 0) {
            return camelCase(item)
          }

          return pascalCase(item)
        })
        .join('')

      apis.push({
        urlPath,
        name,
      })
    }
  })
}

analyze(apiDirectory)

fs.writeFileSync(
  path.resolve(__dirname, '../modules/both/api-paths.ts'),
  `const apiPaths = {
  ${apis.map(({ name, urlPath }) => `${name}: '${urlPath}'`).join(',\n  ')}
}

export default apiPaths
`
)
