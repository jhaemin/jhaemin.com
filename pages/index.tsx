import Icon from '@/components/Icon'
import jhmPortrait from '@/images/jhaemin_portrait.png'
import { Page } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import $ from './index.home.module.scss'

// export default function Home() {
//   return (
//     <div className={styles.home}>
//       <h1 className={styles.name}>Jang Haemin</h1>

//       {Array(10)
//         .fill(1)
//         .map((i) => (
//           <div className={styles.piece} key={i}>
//             <h2 className={styles.pieceName}>Mandao</h2>
//             <p className={styles.pieceDescription}>
//               Create websites without coding.
//             </p>
//           </div>
//         ))}
//     </div>
//   )
// }

const projects: {
  name: string
  description: string
  href: string
}[] = [
  {
    name: 'Mandao',
    description:
      'Create a website without writing codes. Developed at Woowa Brothers Corp.',
    href: 'https://www.youtube.com/watch?v=XDC4QH-4Xms',
  },
  {
    name: 'Interop',
    description:
      'The Interop font family, a combination of Inter and Noto Sans KR.',
    href: 'https://github.com/jhaemin/Interop',
  },
  {
    name: 'Game of Life 3D',
    description: 'Powered by Rust, WebAssembly, and Three.js.',
    href: 'https://github.com/jhaemin/game-of-life-3d',
  },
  {
    name: 'Muyaho',
    description: 'Which means I’m excited.',
    href: 'https://github.com/jhaemin/muyaho',
  },
  {
    name: 'PolToday',
    description: 'Award-winning auxiliary police management system.',
    href: 'https://github.com/jhaemin/poltoday',
  },
  {
    name: 'PAYW',
    description:
      'An open source group where talented developers are operating.',
    href: 'https://payw.org',
  },
  {
    name: 'eodiro',
    description:
      'A guidance service for Chung-Ang University used by thousands of students.',
    href: 'https://github.com/payw-org/eodiro',
  },
  {
    name: 'eodiro Server',
    description: 'A Node.js server that simply powers eodiro.',
    href: 'https://github.com/payw-org/eodiro-server',
  },
  {
    name: 'CAU Timetable Scraper',
    description:
      'Accurately scrape CAU timetable. Doesn’t work after graduation.',
    href: 'https://github.com/payw-org/cau-timetable-scraper',
  },
  {
    name: 'CAU Cafeteria Menus Scraper',
    description:
      'Accurately scrape CAU cafeteria menus. Doesn’t work after graduation.',
    href: 'https://github.com/payw-org/cau-cafeteria-menus-scraper',
  },
  {
    name: 'Prismap',
    description:
      'Automatically map and pluralize Prisma schema to match database table names with JavaScript.',
    href: 'https://github.com/jhaemin/prismap',
  },
  {
    name: 'Squircle.js',
    description: 'Squircles for web.',
    href: 'https://github.com/jhaemin/squircle.js',
  },
  {
    name: 'webglue',
    description: 'Gather your favorite websites in one place.',
    href: 'https://github.com/payw-org/webglue.me-vue',
  },
  {
    name: 'WEBuffet',
    description: 'A Chrome extension that allows you to manipulate websites.',
    href: 'https://github.com/payw-org/webuffet',
  },
  {
    name: 'Saying',
    description: 'One saying per day.',
    href: 'https://github.com/jhaemin/saying.today',
  },
  {
    name: 'where.land',
    description: 'A public websites shortcut.',
    href: 'https://github.com/jhaemin/where.land',
  },
  {
    name: 'Cassandra',
    description:
      'Box office prediction app for Mac. It precisely predicted the Luck-Key movie.',
    href: 'https://github.com/payw-org/Cassandra',
  },
  {
    name: 'Labyrinth',
    description: 'A password manager app for Mac.',
    href: 'https://github.com/payw-org/Labyrinth',
  },
  {
    name: 'jsoup+',
    description: 'jsoup, extended.',
    href: 'https://github.com/payw-org/jsoup-plus',
  },
]

const Home: Page = () => {
  return (
    <div className={$.home}>
      <div className={$.introduction}>
        <div className={$.manifesto}>
          <p>Hello, I’m Jang Haemin.</p>
          <p>
            I mostly spend time developing, designing and surfing the web while
            listening to{' '}
            <span style={{ position: 'relative', top: '-0.06em' }}>
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
          <p>I love my family, friends and Seoul. Stay Safe.</p>

          {/* <p className={$.moreLink}>
            <Link href="/about">
              <a>
                Read more about me
                <Icon className={$.moreIcon} name="chevron_right" />
              </a>
            </Link>
          </p> */}
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

      <div className={$.projects}>
        <h1 className={$.subtitle}>Projects</h1>
        <div className={$.projectsList}>
          {projects.map(({ name, description, href }) => {
            const anchorAttr = href.startsWith('http')
              ? { target: '_blank', rel: 'noreferrer' }
              : {}

            return (
              <Link key={name} href={href}>
                <a {...anchorAttr}>
                  <div className={$.projectItem}>
                    <h2 className={$.projectName}>{name}</h2>
                    <p className={$.projectDescription}>{description}</p>
                  </div>
                </a>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
