import JhmLogo from '@/components/JhmLogo'
import clsx from 'clsx'
import {
  LogoGithub,
  LogoInstagram,
  LogoLinkedin,
} from 'framework7-icons-plus/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import $ from './default-layout.module.scss'

type DefaultLayoutProps = {
  children: ReactNode
}

const sections: {
  name: string
  href: string
  newTab?: true
}[] = [
  {
    name: 'About',
    href: '/',
  },
  // {
  //   name: 'Design',
  //   href: '/design',
  // },
  {
    name: 'Articles',
    href: 'https://blog.jhaemin.com',
    newTab: true,
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

  return (
    <div className={clsx($['wrapper'])}>
      <div className={$['content']}>
        <nav className={$['header']}>
          <div className={$['first-row']}>
            {/* <Link href="/"> */}
            <a href="/" className={$['logo-link']}>
              <JhmLogo className={$['logo']} />
            </a>
            {/* </Link> */}

            <div className={$['social-links']}>
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
              <a
                href="https://www.instagram.com/_jhaemin/"
                target="_blank"
                rel="noreferrer"
              >
                <LogoInstagram />
              </a>
            </div>
          </div>

          <div className={$['sections-container']}>
            {sections.map((section) => {
              const matched =
                section.href === '/'
                  ? section.href === pathname
                  : pathname.includes(section.href)

              return (
                <Link
                  key={section.name}
                  href={section.href}
                  className={clsx($['section'], {
                    [$['defocus']]: !matched,
                    [$['active']]: matched,
                  })}
                  target={section.newTab ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  {section.name}
                </Link>
              )
            })}
          </div>
        </nav>

        <main className={$['section-content']}>{children}</main>
      </div>

      <footer className={$['footer']}>
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
        <p>Copyright © 2022 Jang Haemin</p>
        {/* {user ? (
          <>
            <p>Signed in as {user.email}</p>
            <p>
              <a href="/sign-out">Sign Out</a>
            </p>
          </>
        ) : (
          <p>
            Experimental: <Link href="/sign-in">Sign In</Link>
          </p>
        )} */}
      </footer>
    </div>
  )
}

export default DefaultLayout
