import PageInfo from '@/components/PageInfo'
import { Page } from '@/types'
import $ from './articles.module.scss'

const Design: Page = () => {
  return (
    <div className={$.designPage}>
      <PageInfo title="Design | Jang Haemin" />
      <div>
        <p className={$.paragraph}>
          When you’re somewhat good at only one thing, fairly that’s not enough
          to be remembered by the world. There are a lot of full-stack
          developers who not only know the technologies across frontend and
          backend, but with a wide spectrum that reads people’s emotion and the
          future. Both developers and designers should not be biased to their
          own job. If you focus only one thing, you’ll never see the other side.
          We need harmony. We need to cross the boundary between totally
          different areas.
        </p>
        <p className={$.paragraph}>
          Look around you. Literally, everything is designed. A typography, the
          font you’re looking at right now is also a design. Products and
          services with lots of features and without design are no more
          satisfactory. You are eventually rewarded only after making things
          stimulate our sensation from its visual refinement.
        </p>
        <p className={$.from} style={{ textAlign: 'right' }}>
          —<br /> From the article{' '}
          <a
            href="https://blog.jhaemin.com/frontend-designer"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Designer
          </a>
        </p>
      </div>
    </div>
  )
}

export default Design
