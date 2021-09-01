import JhmLogo from '@/components/JhmLogo'
import useUser from '@/hooks/use-user'
import clsx from 'clsx'
import { LogoGithub, LogoLinkedin } from 'framework7-icons-plus/react'
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
  {
    name: 'About',
    href: '/',
  },
  {
    name: 'Articles',
    href: '/articles',
  },
  {
    name: 'Photography',
    href: '/photography',
  },
  // {
  //   name: 'Shop',
  //   href: '/shop',
  // },
]

const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children } = props
  const { pathname } = useRouter()
  const user = useUser()

  return (
    <div className={clsx($.defaultLayout)}>
      <div className={$.defaultLayoutContent}>
        <nav className={$.header}>
          <div className={$.firstRow}>
            {/* <Link href="/"> */}
            <a href="/" className={$.logoLink}>
              <JhmLogo className={$.logo} />
            </a>
            {/* </Link> */}

            <div className={$.socialLinks}>
              <a
                href="https://github.com/jhaemin"
                target="_blank"
                rel="noreferrer"
              >
                <LogoGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/haemin-jang-b1038a1a0"
                target="_blank"
                rel="noreferrer"
              >
                <LogoLinkedin />
              </a>
            </div>
          </div>

          <div className={$.sectionsContainer}>
            {sections.map((section) => {
              const matched =
                section.href === '/'
                  ? section.href === pathname
                  : pathname.includes(section.href)

              return (
                // <Link key={section.name} href={section.href}>
                <a
                  key={section.name}
                  href={section.href}
                  className={clsx($.section, {
                    [$.defocus]: !matched,
                    [$.active]: matched,
                  })}
                >
                  {section.name}
                </a>
                // </Link>
              )
            })}
          </div>
        </nav>

        <main className={$.sectionContent}>{children}</main>
      </div>

      <footer className={$.footer}>
        <p>
          This website is an{' '}
          <a
            href="https://github.com/jhaemin/jhaemin.com-next"
            target="_blank"
            rel="noreferrer noopener"
          >
            open source
          </a>
        </p>
        <p>Copyright © 2021 Jang Haemin</p>
        {user ? (
          <>
            <p>Signed in as {user.email}</p>
            <p>
              <a href="/sign-out">Sign Out</a>
            </p>
          </>
        ) : (
          <p>
            Experimental: <a href="/sign-in">Sign In</a>
          </p>
        )}
      </footer>
    </div>
  )
}

export default DefaultLayout
