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
import s from './index.home.module.scss'

const Home: Page = () => {
  return (
    <div className={s['wrapper']}>
      <div className={s['introduction']}>
        <div className={s['manifesto']}>
          <p>Hi, my name is Jang Haemin.</p>
          <p>
            I mostly spend time designing, developing and surfing the web while
            listening to{' '}
            <span className={s['apple-music']}>
              <span className={s['apple-music-text']}>Apple</span>
              <LogoApple className={s['logo-apple']} /> Music
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
          <figure className={s['portrait']}>
            <img
              src="/images/jhaemin_portrait.jpg"
              alt="Jang Haemin Portrait"
              className="dark-mode"
            />
            <img
              src="/images/jhaemin_woowacon.jpg"
              alt="Jang Haemin Woowacon"
              className={clsx('light-mode', s['light'])}
            />

            <figcaption className={clsx('dark-mode', s.caption)}>
              Photo by 김명중
            </figcaption>
          </figure>
        </div>
      </div>

      <div className={s['education-and-work']}>
        <section className={clsx(s['home-section'], s['open-source'])}>
          <h1 className={s['subtitle']}>Experience</h1>

          <div>
            <div className={s['section-item']}>
              <p className={s['section-item-title']}>Woowa Brothers Corp.</p>
              <p className={s['section-item-description']}>2020 – current</p>
            </div>

            <div className={s['section-item']}>
              <p className={s['section-item-title']}>Woowahan Tech Camp 3rd</p>
              <p className={s['section-item-description']}>Summer 2020</p>
            </div>

            <div className={s['section-item']}>
              <p className={s['section-item-title']}>
                Carmore (TeamO2) Internship
              </p>
              <p className={s['section-item-description']}>Summer 2019</p>
            </div>
          </div>
        </section>

        <section className={clsx(s['home-section'], s['open-source'])}>
          <h1 className={s['subtitle']}>Education</h1>

          <div>
            <div className={s['section-item']}>
              <p className={s['section-item-title']}>Chung-Ang University</p>
              <p className={s['section-item-description']}>
                Bachelor’s degree, Computer Science
              </p>
              <p className={s['section-item-description']}>2015 – 2021</p>
            </div>

            <div className={s['section-item']}>
              <p className={s['section-item-title']}>Purdue University</p>
              <p className={s['section-item-description']}>
                K-SW Square Winter Program
              </p>
              <p className={s['section-item-description']}>Winter 2020</p>
            </div>
          </div>
        </section>
      </div>

      {/* <section className={clsx($["section"], $["open-source"])}>
        <h1 className={$["subtitle"]}>Open Source</h1>
      </section> */}

      <section className={clsx(s['home-section'], s['projects'])}>
        <h1 className={s['subtitle']}>Works</h1>

        <CushionLink
          href="https://woowacon.com"
          className={s.woowacon23}
          newWindow
        >
          <div className={s.container}>
            <img
              className={s.woowacon23Logo}
              alt="WOOWACON 2023"
              src="/images/woowacon23-white.png"
            />
            <picture className={s.baedalScience}>
              <source
                media="(max-width: 734px)"
                srcSet="/images/baedal-science-portrait.png"
              />
              <img
                alt="Baedal Science"
                src="/images/baedal-science-landscape.png"
              />
            </picture>
          </div>
        </CushionLink>

        <div className={s.recentWorksContainer}>
          <CushionLink
            href="https://everymoji.com"
            className={clsx(s.recentWork, s.everymoji)}
            cottonClassName={s.container}
            newWindow
          >
            <span className={s.label}>Recent Work</span>
            <h2 className={s.title}>everymoji</h2>
          </CushionLink>

          <CushionLink
            href="https://baemin.dev/planning-poker"
            className={clsx(s.recentWork, s.poker)}
            cottonClassName={s.container}
            newWindow
          >
            <span className={s.label}>Recent Work</span>
            <h2 className={s.title}>Planning Poker</h2>
          </CushionLink>
        </div>

        {/* TODO: filter */}

        <div className={s['projects-list']}>
          {projects.map(({ name, description, href, links }) => {
            const hasSingleLink = !!href
            const anchorAttr = href?.startsWith('http')
              ? { target: '_blank', rel: 'noreferrer' }
              : {}

            return (
              <div key={name}>
                {hasSingleLink ? (
                  <CushionLink href={href} newWindow={href.startsWith('http')}>
                    <div className={s['project-item']}>
                      <div className={s['project-info']}>
                        <h2 className={s['project-name']}>
                          {name} <ArrowUpRight />
                        </h2>
                        <p className={s['project-description']}>
                          {description}
                        </p>
                      </div>
                    </div>
                  </CushionLink>
                ) : (
                  <div className={s['project-item']}>
                    <div className={s['project-info']}>
                      <h2 className={s['project-name']}>{name}</h2>
                      <p className={s['project-description']}>{description}</p>
                      {links && links.length > 0 && (
                        <div className={s['project-links']}>
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

      <section className={clsx(s['home-section'])}>
        <h1 className={s['subtitle']}>Featured</h1>
        <div className={s['embeds']}>
          <div
            className={s['embedded-video-wrapper']}
            style={{
              gridColumn: '1 / -1',
            }}
          >
            <iframe
              className={s['embedded-video']}
              src="https://www.youtube.com/embed/YtrIAqgSDp8?si=9sIA5VdwQn82LyiT"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={s['embedded-video-wrapper']}>
            <iframe
              className={s['embedded-video']}
              src="https://www.youtube.com/embed/nbVF9LzIQMo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={s['embedded-video-wrapper']}>
            <iframe
              className={s['embedded-video']}
              src="https://www.youtube.com/embed/BiLa7i81BcU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={s['embedded-video-wrapper']}>
            <iframe
              className={s['embedded-video']}
              src="https://www.youtube.com/embed/B_sB_PJR_x8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={s['embedded-video-wrapper']}>
            <iframe
              className={s['embedded-video']}
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
