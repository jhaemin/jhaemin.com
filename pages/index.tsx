import CushionLink from '@/components/CushionLink'
import Icon from '@/components/Icon'
import { projects } from '@/constants/projects'
import { Page } from '@/types/general'
import { JhmGetServerSideProps } from '@/types/next'
import { withSessionPage } from '@/utils/node/with-session'
import clsx from 'clsx'
import $ from './home.module.scss'

const Home: Page = () => {
  return (
    <div className={$.home}>
      <div className={$.introduction}>
        <div className={$.manifesto}>
          <p>Hello, I’m Jang Haemin.</p>
          <p>
            I mostly spend time designing, developing and surfing the web while
            listening to{' '}
            <span
              style={{
                position: 'relative',
                top: '-0.06em',
                marginLeft: '-0.06em',
              }}
            >
              <Icon name="logo_apple" />
            </span>
            Music or watching Netflix. Endless learning keeps me alive and never
            hangs me down to the past.
          </p>
          <p>
            Programming isn’t just about writing great codes, but one of the
            ways express myself. Having a chance to consider the beauty might be
            a privilege of our frontend developers.
          </p>
          <p>I love my family, friends and Seoul.</p>
          <p>Stay Safe.</p>
        </div>
        <div>
          <div className={$.portrait}>
            <img
              src="/images/jhaemin_portrait.png"
              alt="Jang Haemin Portrait"
            />
          </div>
        </div>
      </div>

      {/* <section className={clsx($.section, $.openSource)}>
        <h1 className={$.subtitle}>Open Source</h1>
      </section> */}

      <section className={clsx($.section, $.projects)}>
        <h1 className={$.subtitle}>Projects</h1>
        <div className={$.projectsList}>
          {projects.map(({ name, description, href, Logo }) => {
            const anchorAttr = href.startsWith('http')
              ? { target: '_blank', rel: 'noreferrer' }
              : {}

            return (
              <div key={name}>
                <CushionLink href={href} newWindow={href.startsWith('http')}>
                  <div className={$.projectItem}>
                    <div className={$.projectInfo}>
                      <h2 className={$.projectName}>{name}</h2>
                      <p className={$.projectDescription}>{description}</p>
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
