import cassandraLogo from '@/assets/project-icons/cassandra.svg'
import clowdLogo from '@/assets/project-icons/clowd.svg'
import eodiroLogo from '@/assets/project-icons/eodiro.svg'
import gol3dLogo from '@/assets/project-icons/gol3d.svg'
import interopLogo from '@/assets/project-icons/interop.svg'
import labyrinthLogo from '@/assets/project-icons/labyrinth.svg'
import mandaoLogo from '@/assets/project-icons/mandao.svg'
import paywLogo from '@/assets/project-icons/payw.svg'
import poltodayLogo from '@/assets/project-icons/poltoday.svg'
import sayingLogo from '@/assets/project-icons/saying.svg'
import squircleLogo from '@/assets/project-icons/squircle.svg'
import webglueLogo from '@/assets/project-icons/webglue.svg'
import webuffetLogo from '@/assets/project-icons/webuffet.svg'
import wherelandLogo from '@/assets/project-icons/whereland.svg'
import woowafontsLogo from '@/assets/project-icons/woowafonts.svg'
import { SVGComponent } from '@/types/general'

export const projects: {
  name: string
  description: string
  href: string
  Logo?: SVGComponent
}[] = [
  {
    name: 'Mandao',
    description:
      'Create a website without writing codes. Developed at Woowa Brothers Corp.',
    href: 'https://www.youtube.com/watch?v=XDC4QH-4Xms',
    Logo: mandaoLogo,
  },
  {
    name: 'Interop',
    description:
      'The Interop font family, a combination of Inter and Noto Sans KR that looks gorgeous together.',
    href: 'https://github.com/jhaemin/Interop',
    Logo: interopLogo,
  },
  {
    name: 'React Draggg',
    description: 'Make your React elements draggable.',
    href: 'https://github.com/jhaemin/react-draggg',
  },
  {
    name: 'Advanced Utility Types',
    description: 'Use TypeScript like a pro.',
    href: 'https://github.com/jhaemin/react-draggg',
  },
  {
    name: 'Framework7 Icons+',
    description: 'A forked version of Framework7 Icons with additional icons.',
    href: 'https://github.com/jhaemin/framework7-icons-plus',
  },
  {
    name: 'minmax.js',
    description: 'A simple combination of Math.min and Math.max.',
    href: 'https://github.com/jhaemin/minmax.js',
  },
  {
    name: 'Game of Life 3D',
    description:
      'An implementation of Conway’s Game of Life powered by Rust, WebAssembly, and Three.js.',
    href: 'https://github.com/jhaemin/game-of-life-3d',
    Logo: gol3dLogo,
  },
  {
    name: 'PAYW',
    description:
      'An open source group where talented developers are operating.',
    href: 'https://payw.org',
    Logo: paywLogo,
  },
  {
    name: 'Woowa Fonts',
    description:
      'A modern and interactive website for Woowa Bros fonts using Svelte.',
    href: 'https://github.com/jhaemin/fonts.woowa.io',
    Logo: woowafontsLogo,
  },
  {
    name: 'Marko',
    description:
      'An HTML editor written in pure JavaScript with near-zero dependencies.',
    href: 'https://github.com/jhaemin/marko',
  },
  {
    name: 'PolToday',
    description:
      'Award-winning auxiliary police management system. Developed during my military service.',
    href: 'https://github.com/jhaemin/poltoday',
    Logo: poltodayLogo,
  },
  {
    name: 'Clowd',
    description:
      'A cloud powered by a crowd. It stores data in our personal computers storage instead of a single, centralized data center. Developed at Purdue University.',
    href: 'https://github.com/team836',
    Logo: clowdLogo,
  },
  {
    name: 'Naver Auto Dark',
    description:
      'Automatically sync Naver homepage color scheme to your system preference.',
    href: 'https://github.com/jhaemin/naver-auto-dark',
  },
  {
    name: 'Multilinguist',
    description: 'A Chrome extension that allows you to set language per site.',
    href: 'https://github.com/jhaemin/multilinguist',
  },
  {
    name: 'eodiro',
    description:
      'A guidance service for Chung-Ang University used by thousands of students.',
    href: 'https://github.com/payw-org/eodiro',
    Logo: eodiroLogo,
  },
  {
    name: 'eodiro Server',
    description:
      'A Node.js server that simply powers eodiro, written in TypeScript.',
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
    name: 'Bmart',
    description:
      'A responsive web version of Bmart with a stunning thunder effect.',
    href: 'https://github.com/woowa-techcamp-2020/bmart-1',
  },
  {
    name: 'To Do List',
    description:
      'A kanban-style, butter smooth and performant To Do web application.',
    href: 'https://github.com/woowa-techcamp-2020/todo-14',
  },
  {
    name: 'Woowahan Chart',
    description:
      'Simply create pie charts or bar charts with just a set of data.',
    href: 'https://github.com/woowa-techcamp-2020/woowahan-chart',
  },
  {
    name: 'Financial Ledger',
    description: 'A simple web app for managing your money on any device.',
    href: 'https://github.com/woowa-techcamp-2020/hkb-15',
  },
  {
    name: 'Baemin Market Sign Up',
    description:
      'Sign up and sign in of Baemin Market with a neat spring animation and transitions.',
    href: 'https://github.com/woowa-techcamp-2020/market-6',
  },
  {
    name: 'Prismap',
    description:
      'Automatically map and pluralize Prisma schema to match database table names with JavaScript.',
    href: 'https://github.com/jhaemin/prismap',
  },
  {
    name: 'Cassandra',
    description:
      'Box office prediction app for Mac. It precisely predicted the Luck-Key movie.',
    href: 'https://github.com/payw-org/Cassandra',
    Logo: cassandraLogo,
  },
  {
    name: 'webglue',
    description: 'Gather your favorite websites in one place.',
    href: 'https://github.com/payw-org/webglue.me-vue',
    Logo: webglueLogo,
  },
  {
    name: 'WEBuffet',
    description: 'A Chrome extension that allows you to manipulate websites.',
    href: 'https://github.com/payw-org/webuffet',
    Logo: webuffetLogo,
  },
  {
    name: 'Squircle.js',
    description: 'Squircles for web. Responsively updates radius itself ',
    href: 'https://github.com/jhaemin/squircle.js',
    Logo: squircleLogo,
  },
  {
    name: 'Saying',
    description: 'One saying per day. You can save it as an image.',
    href: 'https://github.com/jhaemin/saying.today',
    Logo: sayingLogo,
  },
  {
    name: 'where.land',
    description: 'A public websites shortcut to replace your bookmarks.',
    href: 'https://github.com/jhaemin/where.land',
    Logo: wherelandLogo,
  },
  {
    name: 'Labyrinth',
    description:
      'A password manager app for Mac. Simple, but with all features you need.',
    href: 'https://github.com/payw-org/Labyrinth',
    Logo: labyrinthLogo,
  },
  {
    name: 'Delightful Naver Webtoon',
    description:
      'Directly mirrors Naver Webtoon website with additional sync feature.',
    href: 'https://github.com/jhaemin/delightful-naver-webtoon',
  },
  {
    name: 'Touch Scroll Lock',
    description:
      'A tiny script that prevents vertical scrolling while you’re swiping horizontally on unscrollable areas.',
    href: 'https://github.com/jhaemin/touch-scroll-lock',
  },
  {
    name: 'Drag and Drop',
    description: 'Butter smooth drag and drop prototype for Woowahan To Do.',
    href: 'https://github.com/jhaemin/drag-and-drop',
  },
  {
    name: 'ReScript Calculator',
    description: 'Learning ReScript with a practical example.',
    href: 'https://github.com/jhaemin/rescript-calculator',
  },
  {
    name: 'Muyaho',
    description: 'Which means I’m excited.',
    href: 'https://github.com/jhaemin/muyaho',
  },
  {
    name: 'jsoup+',
    description: 'jsoup, extended. For the purpose of research and study.',
    href: 'https://github.com/payw-org/jsoup-plus',
  },
]
