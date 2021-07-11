import Icon from '@/components/Icon'
import JhmLogo from '@/components/JhmLogo'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
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
  {
    name: 'Design',
    href: '/design',
  },
  {
    name: 'Photography',
    href: '/photography',
  },
]

export default function DefaultLayout(props: DefaultLayoutProps) {
  const { children } = props
  const { pathname } = useRouter()

  return (
    <div className={clsx($.defaultLayout, pathname.replace('/', ''))}>
      <div className={$.sense} />
      <div className={$.defaultLayoutContent}>
        <div className={$.header}>
          <div className={$.firstRow}>
            <Link href="/">
              <a className={$.logoLink}>
                <JhmLogo className={$.logo} />
              </a>
            </Link>

            <div className={$.socialLinks}>
              <a
                href="https://github.com/jhaemin"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="logo_github" />
              </a>
              <a
                href="https://www.linkedin.com/in/haemin-jang-b1038a1a0"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="logo_linkedin" />
              </a>
            </div>
          </div>

          <div className={$.sectionsContainer}>
            {sections.map((section) => (
              <Link key={section.name} href={section.href}>
                <a
                  className={clsx($.section, {
                    [$.defocus]: !['/', section.href].includes(pathname),
                    [$.active]: section.href === pathname,
                  })}
                >
                  {section.name}
                </a>
              </Link>
            ))}
          </div>
        </div>

        <div className={$.sectionContent}>{children}</div>
      </div>
    </div>
  )
}
