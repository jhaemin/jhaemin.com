import $ from '@/styles/article.module.scss'
import { paramCase } from 'change-case'
import clsx from 'clsx'
import marked from 'marked'

marked.use({
  renderer: {
    paragraph: (text) => `<p class="${$.paragraph}">${text}</p>`,
    heading: (text, level) =>
      `<h${level} id="${paramCase(text)}" class="${clsx(
        $.heading,
        $['heading' + level]
      )}">${text}</h${level}>`,
    codespan: (code) => `<code class="${$.codeSpan}">${code}</code>`,
    blockquote: (quote) =>
      `<blockquote class="${$.blockquote}">${quote}</blockquote>`,
    hr: () => `<hr class="${$.horizontalRule}" />`,
    link: (href, title, text) =>
      `<a href="${href}" class="${$.link}">${text}</a>`,
    list: (body, ordered, start) => {
      const tag = ordered ? 'ol' : 'ul'

      return `<${tag} class="${$.list}">${body}</${tag}>`
    },
  },
})

export default marked
