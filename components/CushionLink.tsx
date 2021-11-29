import clsx from 'clsx'
import { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { AnchorHTMLAttributes } from 'react'
import $ from './cushion-link.module.scss'

export type CushionLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    newWindow?: boolean
  }

const CushionLink: React.FC<CushionLinkProps> = (props) => {
  const router = useRouter()
  const { newWindow, href, as, className, children, ...restProps } = props
  const additionalAnchorAttr: AnchorHTMLAttributes<HTMLAnchorElement> = {}

  if (props.newWindow) {
    additionalAnchorAttr.target = '_blank'
    additionalAnchorAttr.rel = 'noreferrer noopener'
  }

  return (
    <a
      {...additionalAnchorAttr}
      {...restProps}
      className={clsx($['cushion-link'], className)}
      href={href.toString()}
      onClick={(e) => {
        e.preventDefault()

        setTimeout(() => {
          if (href) {
            if (e.metaKey || e.ctrlKey || newWindow) {
              window.open(href.toString(), '_blank')?.focus()
            } else {
              router.push(href, as)
            }
          }
        }, 250)
      }}
    >
      <div className={$['cushion-cotton']}>{children}</div>
    </a>
  )
}

export default CushionLink
