import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'
import $ from './DefaultLayout.module.scss'

type DefaultLayoutProps = {
  children: ReactNode
}

const sections: {
  name: string
  href: string
}[] = [
  // {
  //   name: 'About',
  //   href: '/about',
  // },
  // {
  //   name: 'Design',
  //   href: '/design',
  // },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Photography',
    href: '/photography',
  },
]

export default function DefaultLayout(props: DefaultLayoutProps) {
  const { children } = props

  return (
    <div className={clsx('secondary-background', $.defaultLayout)}>
      <div className={clsx('primary-background', $.sense)} />
      <div className={$.defaultLayoutContent}>
        <div className={$.header}>
          <Link href="/">
            <a>
              <img
                src="/images/jhm-logo.svg"
                alt="Jang Haemin Logo"
                className={$.logo}
              />
            </a>
          </Link>

          <div className={$.sectionContainer}>
            {sections.map((section) => (
              <Link key={section.name} href={section.href}>
                <a className={$.section}>{section.name}</a>
              </Link>
            ))}
          </div>
        </div>

        <div className={$.sectionContent}>{children}</div>
      </div>
    </div>
  )
}
