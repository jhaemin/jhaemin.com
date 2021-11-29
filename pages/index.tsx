import CushionLink from '@/components/CushionLink'
import { projects } from '@/constants/projects'
import { Page } from '@/types/general'
import { JhmGetServerSideProps } from '@/types/next'
import { withSessionPage } from '@/utils/node/with-session'
import clsx from 'clsx'
import { ArrowUpRight, LogoApple } from 'framework7-icons-plus/react'
import $ from './home.module.scss'

const Home: Page = () => {
  return (
    <div className={$['wrapper']}>
      <div className={$['introduction']}>
        <div className={$['manifesto']}>
          <p>Hello, my name is Jang Haemin.</p>
          <p>I’m a frontend engineer.</p>
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
          <p>Stay safe.</p>
        </div>
        <div>
          <div className={$['portrait']}>
            <img
              src="/images/jhaemin_portrait.jpg"
              alt="Jang Haemin Portrait"
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
              <p className={$['section-item-description']}>2020-current</p>
            </div>

            <div className={$['section-item']}>
              <p className={$['section-item-title']}>Woowahan Tech Camp 3rd</p>
              <p className={$['section-item-description']}>2020</p>
            </div>

            <div className={$['section-item']}>
              <p className={$['section-item-title']}>
                Carmore (TeamO2) Internship
              </p>
              <p className={$['section-item-description']}>2019</p>
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
              <p className={$['section-item-description']}>2015-2021</p>
            </div>

            <div className={$['section-item']}>
              <p className={$['section-item-title']}>Purdue University</p>
              <p className={$['section-item-description']}>
                K-SW Square Winter Program
              </p>
              <p className={$['section-item-description']}>2020</p>
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
          {projects.map(({ name, description, href, Logo }) => {
            const anchorAttr = href.startsWith('http')
              ? { target: '_blank', rel: 'noreferrer' }
              : {}

            return (
              <div key={name}>
                <CushionLink href={href} newWindow={href.startsWith('http')}>
                  <div className={$['project-item']}>
                    <div className={$['project-info']}>
                      <h2 className={$['project-name']}>
                        {name} <ArrowUpRight />
                      </h2>
                      <p className={$['project-description']}>{description}</p>
                    </div>
                    {/* {Logo && <Logo />} */}
                  </div>
                </CushionLink>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Home

const handler: JhmGetServerSideProps = async ({ req, res }) => {
  return {
    props: {},
  }
}
export const getServerSideProps = withSessionPage(handler)
