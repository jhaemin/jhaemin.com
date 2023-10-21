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
        <section className={clsx(s['section'], s['open-source'])}>
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

        <section className={clsx(s['section'], s['open-source'])}>
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

      <section className={clsx(s['section'], s['projects'])}>
        <h1 className={s['subtitle']}>Projects</h1>

        <CushionLink
          href="https://baemin.dev/planning-poker"
          className={clsx(s.latestWork, s.poker)}
          cottonClassName={s.container}
          newWindow
        >
          <span className={s.label}>Recent Work</span>
          <h2 className={s.title}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="83"
              height="96"
              viewBox="0 0 83 96"
              fill="none"
              className={s.pokerIcon}
            >
              <path
                d="M82.4629 32.536V83.6244C82.4629 87.6665 81.4399 90.7231 79.3939 92.7941C77.3478 94.8651 74.3162 95.9006 70.299 95.9006H34.743C30.7507 95.9006 27.7191 94.8651 25.6481 92.7941C23.6021 90.7231 22.5791 87.6665 22.5791 83.6244V32.536C22.5791 28.4938 23.6021 25.4373 25.6481 23.3663C27.7191 21.2953 30.7507 20.2598 34.743 20.2598H70.299C74.3162 20.2598 77.3478 21.2953 79.3939 23.3663C81.4399 25.4373 82.4629 28.4938 82.4629 32.536ZM75.1271 33.0226C75.1271 31.2759 74.678 29.941 73.7798 29.0178C72.8815 28.0697 71.5216 27.5956 69.7002 27.5956H35.4167C33.5952 27.5956 32.2229 28.0697 31.2997 29.0178C30.4014 29.941 29.9523 31.2759 29.9523 33.0226V83.2127C29.9523 84.9094 30.4014 86.2194 31.2997 87.1426C32.2229 88.0907 33.5952 88.5648 35.4167 88.5648H69.7002C71.5216 88.5648 72.8815 88.0907 73.7798 87.1426C74.678 86.2194 75.1271 84.9094 75.1271 83.2127V33.0226ZM28.1558 72.8453L28.5675 80.2559L24.1136 81.0419C20.1962 81.7405 17.0398 81.2415 14.6445 79.5448C12.2491 77.873 10.7021 75.041 10.0035 71.0488L1.20803 21.0832C0.50939 17.091 0.98347 13.8972 2.63028 11.5018C4.30203 9.10645 7.10909 7.55945 11.0514 6.8608L46.0461 0.685281C50.0134 0.0115878 53.1822 0.51062 55.5526 2.18238C57.948 3.85413 59.495 6.69862 60.1936 10.7158L62.4018 23.516L55.2158 24.7885L52.9701 12.4001C52.6707 10.7033 51.997 9.48072 50.949 8.73217C49.926 7.98362 48.5163 7.75906 46.7197 8.05848L12.9602 14.0094C11.1637 14.3338 9.90367 15.0324 9.18007 16.1054C8.45647 17.1533 8.24439 18.5257 8.5438 20.2224L17.1895 69.3271C17.489 71.0238 18.1626 72.2589 19.2106 73.0324C20.2835 73.781 21.7058 73.9931 23.4773 73.6687L28.1558 72.8453Z"
                fill="var(--jhm-primary-text-color)"
              />
            </svg>
            Planning Poker
          </h2>
        </CushionLink>

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

      <section className={clsx(s['section'])}>
        <h1 className={s['subtitle']}>Featured</h1>
        <div className={s['embeds']}>
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
