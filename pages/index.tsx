import CushionLink from '@/components/CushionLink'
import { projects } from '@/constants/projects'
import { Page } from '@/types/general'
import { JhmGetServerSideProps } from '@/types/next'
import clsx from 'clsx'
import {
  ArrowUpRight,
  Link as LinkIcon,
  LogoApple,
} from 'framework7-icons-plus/react'
import Link from 'next/link'
import $ from './index.home.module.scss'

const Home: Page = () => {
  return (
    <div className={$['wrapper']}>
      <div className={$['introduction']}>
        <div className={$['manifesto']}>
          <p>Hi, my name is Jang Haemin.</p>
          <p>
            I mostly spend time designing, developing and surfing the web while
            listening to{' '}
            <span className={$['apple-music']}>
              <span className={$['apple-music-text']}>Apple</span>
              <LogoApple className={$['logo-apple']} /> Music
            </span>{' '}
            or watching Netflix. Endless learning keeps me alive and never hangs
            me down to the past.
          </p>
          <p>
            For me, programming isn’t just about writing great codes, but one of
            the ways express myself and improve our lives.
          </p>
          <p>I love my family, friends and Seoul.</p>
        </div>
        <div>
          <div className={$['portrait']}>
            <img
              src="/images/jhaemin_portrait.jpg"
              alt="Jang Haemin Portrait"
              className="dark-mode"
            />
            <img
              src="/images/jhaemin_woowacon.jpg"
              alt="Jang Haemin Woowacon"
              className={clsx('light-mode', $['light'])}
            />
          </div>
        </div>
      </div>

      <div className={$['education-and-work']}>
        <section className={clsx($['section'], $['open-source'])}>
          <h1 className={$['subtitle']}>Experience</h1>

          <div>
            <div className={$['section-item']}>
              <p className={$['section-item-title']}>Woowa Brothers Corp.</p>
              <p className={$['section-item-description']}>2020 – current</p>
            </div>

            <div className={$['section-item']}>
              <p className={$['section-item-title']}>Woowahan Tech Camp 3rd</p>
              <p className={$['section-item-description']}>Summer 2020</p>
            </div>

            <div className={$['section-item']}>
              <p className={$['section-item-title']}>
                Carmore (TeamO2) Internship
              </p>
              <p className={$['section-item-description']}>Summer 2019</p>
            </div>
          </div>
        </section>

        <section className={clsx($['section'], $['open-source'])}>
          <h1 className={$['subtitle']}>Education</h1>

          <div>
            <div className={$['section-item']}>
              <p className={$['section-item-title']}>Chung-Ang University</p>
              <p className={$['section-item-description']}>
                Bachelor’s degree, Computer Science
              </p>
              <p className={$['section-item-description']}>2015 – 2021</p>
            </div>

            <div className={$['section-item']}>
              <p className={$['section-item-title']}>Purdue University</p>
              <p className={$['section-item-description']}>
                K-SW Square Winter Program
              </p>
              <p className={$['section-item-description']}>Winter 2020</p>
            </div>
          </div>
        </section>
      </div>

      {/* <section className={clsx($["section"], $["open-source"])}>
        <h1 className={$["subtitle"]}>Open Source</h1>
      </section> */}

      <section className={clsx($['section'], $['projects'])}>
        <h1 className={$['subtitle']}>Projects</h1>
        <div className={$['projects-list']}>
          {projects.map(({ name, description, href, links }) => {
            const hasSingleLink = !!href
            const anchorAttr = href?.startsWith('http')
              ? { target: '_blank', rel: 'noreferrer' }
              : {}

            return (
              <div key={name}>
                {hasSingleLink ? (
                  <CushionLink href={href} newWindow={href.startsWith('http')}>
                    <div className={$['project-item']}>
                      <div className={$['project-info']}>
                        <h2 className={$['project-name']}>
                          {name} <ArrowUpRight />
                        </h2>
                        <p className={$['project-description']}>
                          {description}
                        </p>
                      </div>
                    </div>
                  </CushionLink>
                ) : (
                  <div className={$['project-item']}>
                    <div className={$['project-info']}>
                      <h2 className={$['project-name']}>{name}</h2>
                      <p className={$['project-description']}>{description}</p>
                      {links && links.length > 0 && (
                        <div className={$['project-links']}>
                          {links.map(({ url, title }) => (
                            <Link
                              key={url + title}
                              href={url}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <LinkIcon />
                              {title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <section className={clsx($['section'])}>
        <h1 className={$['subtitle']}>Featured</h1>
        <div className={$['embeds']}>
          <div className={$['embedded-video-wrapper']}>
            <iframe
              className={$['embedded-video']}
              src="https://www.youtube.com/embed/nbVF9LzIQMo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={$['embedded-video-wrapper']}>
            <iframe
              className={$['embedded-video']}
              src="https://www.youtube.com/embed/BiLa7i81BcU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={$['embedded-video-wrapper']}>
            <iframe
              className={$['embedded-video']}
              src="https://www.youtube.com/embed/B_sB_PJR_x8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={$['embedded-video-wrapper']}>
            <iframe
              className={$['embedded-video']}
              src="https://www.youtube.com/embed/XDC4QH-4Xms"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
