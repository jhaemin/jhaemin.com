import CushionLink from '@/components/CushionLink'
import { projects } from '@/constants/projects'
import { Page } from '@/types/general'
import { JhmGetServerSideProps } from '@/types/next'
import { withSessionPage } from '@/utils/node/with-session'
import clsx from 'clsx'
import { ArrowUpRight, LogoApple } from 'framework7-icons-plus/react'
import styles from './home.module.scss'

const Home: Page = () => {
  return (
    <div className={styles.home}>
      <div className={styles.introduction}>
        <div className={styles.manifesto}>
          <p>Hello, my name is Jang Haemin.</p>
          <p>I’m a frontend engineer.</p>
          <p>
            I mostly spend time designing, developing and surfing the web while
            listening to{' '}
            <span style={{ display: 'inline-flex', alignItems: 'baseline' }}>
              <span style={{ display: 'none' }}>Apple</span>
              <LogoApple className="logo-apple" /> Music
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
          <div className={styles.portrait}>
            <img
              src="/images/jhaemin_portrait.jpg"
              alt="Jang Haemin Portrait"
            />
          </div>
        </div>
      </div>

      <div className={styles.educationAndWork}>
        <section className={clsx(styles.section, styles.openSource)}>
          <h1 className={styles.subtitle}>Experience</h1>

          <div>
            <div className={styles.sectionItem}>
              <p className={styles.sectionItemTitle}>Woowa Brothers Corp.</p>
              <p className={styles.sectionItemDescription}>2020-current</p>
            </div>

            <div className={styles.sectionItem}>
              <p className={styles.sectionItemTitle}>Woowahan Tech Camp 3rd</p>
              <p className={styles.sectionItemDescription}>2020</p>
            </div>

            <div className={styles.sectionItem}>
              <p className={styles.sectionItemTitle}>
                Carmore (TeamO2) Internship
              </p>
              <p className={styles.sectionItemDescription}>2019</p>
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.openSource)}>
          <h1 className={styles.subtitle}>Education</h1>

          <div>
            <div className={styles.sectionItem}>
              <p className={styles.sectionItemTitle}>Chung-Ang University</p>
              <p className={styles.sectionItemDescription}>
                Bachelor’s degree, Computer Science
              </p>
              <p className={styles.sectionItemDescription}>2015-2021</p>
            </div>

            <div className={styles.sectionItem}>
              <p className={styles.sectionItemTitle}>Purdue University</p>
              <p className={styles.sectionItemDescription}>
                K-SW Square Winter Program
              </p>
              <p className={styles.sectionItemDescription}>2020</p>
            </div>
          </div>
        </section>
      </div>

      {/* <section className={clsx($.section, $.openSource)}>
        <h1 className={$.subtitle}>Open Source</h1>
      </section> */}

      <section className={clsx(styles.section, styles.projects)}>
        <h1 className={styles.subtitle}>Projects</h1>
        <div className={styles.projectsList}>
          {projects.map(({ name, description, href, Logo }) => {
            const anchorAttr = href.startsWith('http')
              ? { target: '_blank', rel: 'noreferrer' }
              : {}

            return (
              <div key={name}>
                <CushionLink href={href} newWindow={href.startsWith('http')}>
                  <div className={styles.projectItem}>
                    <div className={styles.projectInfo}>
                      <h2 className={styles.projectName}>
                        {name} <ArrowUpRight />
                      </h2>
                      <p className={styles.projectDescription}>{description}</p>
                    </div>
                    {/* {Logo && <Logo />} */}
                  </div>
                </CushionLink>
              </div>
            )
          })}
        </div>
      </section>

      <style jsx>{`
        div :global(.logo-apple) {
          position: relative;
          margin-left: -0.08em;
          transform: translateY(0.074em);
        }
      `}</style>
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
