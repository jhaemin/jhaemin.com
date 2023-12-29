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

export enum ProjectCategory {
  WebService = 'Web Service',
  WebServer = 'Web Server',
  Fonts = 'Fonts',
  Design = 'Design',
  DesktopApps = 'Desktop Apps',
  Libraries = 'Libraries',
  Utilities = 'Utilities',
  Organization = 'Organization',
  BrowserExtensions = 'Browser Extensions',
  Experiments = 'Experiments',
  Experience = 'Experience',
  WBCorp = 'Woowa Brothers Corp.',
  PurdueUniversity = 'Purdue University',
  CAU = 'CAU',
  WoowaTechCamp = 'Woowa Tech Camp',
  Games = 'Games',
}

interface Project {
  name: string
  description: string
  href?: string
  /**
   * @deprecated
   */
  Logo?: SVGComponent
  links?: { url: string; title: string }[]
  categories: ProjectCategory[]
}

export const projects: Project[] = [
  {
    name: 'Woowa Web Toolkit',
    description:
      'A universal browser extension for Woowa Brothers Corp. that enhances overall web experience.',
    links: [
      {
        url: 'https://www.youtube.com/watch?v=YtrIAqgSDp8',
        title: 'WOOWACON 2023',
      },
    ],
    categories: [ProjectCategory.BrowserExtensions, ProjectCategory.WBCorp],
  },
  {
    name: 'Mandao',
    description:
      'Create a website without writing codes. Developed at Woowa Brothers Corp.',
    Logo: mandaoLogo,
    links: [
      {
        url: 'https://www.youtube.com/watch?v=BiLa7i81BcU',
        title: 'WOOWACON 2021',
      },
      {
        url: 'https://techblog.woowahan.com/2719',
        title: 'Woowa Tech Blog',
      },
      {
        url: 'https://www.youtube.com/watch?v=XDC4QH-4Xms',
        title: 'Woowa Tech Seminar',
      },
    ],
    categories: [
      ProjectCategory.WBCorp,
      ProjectCategory.WebService,
      ProjectCategory.Design,
    ],
  },
  {
    name: 'Dynamic Island',
    description:
      'A web implementation of the Dymanic Island designed by Apple first introduced in iPhone 14 Pro.',
    href: 'https://github.com/jhaemin/dynamic-island',
    categories: [ProjectCategory.Experiments, ProjectCategory.Libraries],
  },
  {
    name: 'Interop',
    description:
      'The Interop font family, a combination of Inter and Noto Sans KR that looks gorgeous together.',
    href: 'https://github.com/jhaemin/Interop',
    Logo: interopLogo,
    categories: [ProjectCategory.Fonts, ProjectCategory.Design],
  },
  {
    name: 'everymoji',
    description: 'Create animated text emojis for Slack quickly and easily.',
    categories: [ProjectCategory.WebService, ProjectCategory.Design],
  },
  {
    name: 'Planning Poker',
    description:
      'A simple yet powerful planning poker service. It is a part of Baemin Dev Center project.',
    href: 'https://baemin.dev/planning-poker',
    categories: [ProjectCategory.WebService, ProjectCategory.Design],
  },
  {
    name: 'freeyard',
    description:
      'A real-time communication canvas. Feel free to leave a message that anyone can see and reply.',
    href: 'https://fy.jhaemin.com',
    categories: [ProjectCategory.WebService, ProjectCategory.Design],
  },
  {
    name: 'Liar Game',
    description: 'A game system for the popular Liar Game.',
    href: 'https://liar-game.com',
    categories: [ProjectCategory.WebService, ProjectCategory.Design],
  },
  {
    name: 'Lucky Level Up',
    description: 'A super simple game to level up. Rank #1 and earn ₩1,000,000',
    href: 'https://lvup.app',
    categories: [
      ProjectCategory.WebService,
      ProjectCategory.Design,
      ProjectCategory.Games,
    ],
  },
  {
    name: 'React Draggg',
    description: 'Make your React elements draggable.',
    href: 'https://github.com/jhaemin/react-draggg',
    categories: [ProjectCategory.Libraries],
  },
  {
    name: 'Advanced Utility Types',
    description: 'Use TypeScript like a pro.',
    href: 'https://github.com/jhaemin/advanced-utility-types',
    categories: [ProjectCategory.Utilities],
  },
  {
    name: 'Framework7 Icons+',
    description: 'A forked version of Framework7 Icons with additional icons.',
    href: 'https://github.com/jhaemin/framework7-icons-plus',
    categories: [
      ProjectCategory.Fonts,
      ProjectCategory.Design,
      ProjectCategory.Libraries,
    ],
  },
  {
    name: 'minmax.js',
    description: 'A simple combination of Math.min and Math.max.',
    href: 'https://github.com/jhaemin/minmax.js',
    categories: [ProjectCategory.Libraries],
  },
  {
    name: 'Game of Life 3D',
    description:
      'An implementation of Conway’s Game of Life powered by Rust, WebAssembly, and Three.js.',
    href: 'https://github.com/jhaemin/game-of-life-3d',
    Logo: gol3dLogo,
    categories: [ProjectCategory.Experiments, ProjectCategory.Design],
  },
  {
    name: 'Code Editor',
    description: `A super simple code editor built with Tauri and Monaco Editor. Sorry I use VSCode.`,
    href: 'https://github.com/jhaemin/code-editor',
    categories: [ProjectCategory.Experiments, ProjectCategory.DesktopApps],
  },
  {
    name: 'PAYW',
    description:
      'An open source group where talented developers are operating.',
    href: 'https://payw.org',
    Logo: paywLogo,
    categories: [ProjectCategory.Design, ProjectCategory.Organization],
  },
  {
    name: 'Woowa Fonts',
    description:
      'A modern and interactive website for Woowa Bros fonts using Svelte.',
    href: 'https://github.com/jhaemin/fonts.woowa.io',
    Logo: woowafontsLogo,
    categories: [
      ProjectCategory.WebService,
      ProjectCategory.Fonts,
      ProjectCategory.WBCorp,
    ],
  },
  {
    name: 'Marko',
    description:
      'An HTML editor written in pure JavaScript with near-zero dependencies.',
    href: 'https://github.com/jhaemin/marko',
    categories: [ProjectCategory.Experiments],
  },
  {
    name: 'PolToday',
    description:
      'Award-winning auxiliary police management system. Developed during my military service.',
    href: 'https://github.com/jhaemin/poltoday',
    Logo: poltodayLogo,
    categories: [ProjectCategory.WebService, ProjectCategory.Design],
  },
  {
    name: 'Clowd',
    description:
      'A cloud powered by a crowd. It stores data in our personal computers storage instead of a single, centralized data center. Developed at Purdue University.',
    href: 'https://github.com/team836',
    Logo: clowdLogo,
    categories: [
      ProjectCategory.WebService,
      ProjectCategory.Design,
      ProjectCategory.PurdueUniversity,
    ],
  },
  {
    name: 'Naver Auto Dark',
    description:
      'Automatically sync Naver homepage color scheme to your system preference.',
    href: 'https://github.com/jhaemin/naver-auto-dark',
    categories: [ProjectCategory.BrowserExtensions],
  },
  {
    name: 'Multilinguist',
    description: 'A Chrome extension that allows you to set language per site.',
    href: 'https://github.com/jhaemin/multilinguist',
    categories: [ProjectCategory.BrowserExtensions],
  },
  {
    name: 'eodiro',
    description:
      'A guidance service for Chung-Ang University used by thousands of students.',
    href: 'https://github.com/payw-org/eodiro',
    Logo: eodiroLogo,
    categories: [
      ProjectCategory.WebService,
      ProjectCategory.CAU,
      ProjectCategory.Design,
    ],
  },
  {
    name: 'eodiro Server',
    description:
      'A Node.js server that simply powers eodiro, written in TypeScript.',
    href: 'https://github.com/payw-org/eodiro-server',
    categories: [ProjectCategory.WebServer],
  },
  {
    name: 'CAU Timetable Scraper',
    description:
      'Accurately scrape CAU timetable. Doesn’t work after graduation.',
    href: 'https://github.com/payw-org/cau-timetable-scraper',
    categories: [
      ProjectCategory.Libraries,
      ProjectCategory.CAU,
      ProjectCategory.Utilities,
    ],
  },
  {
    name: 'CAU Cafeteria Menus Scraper',
    description:
      'Accurately scrape CAU cafeteria menus. Doesn’t work after graduation.',
    href: 'https://github.com/payw-org/cau-cafeteria-menus-scraper',
    categories: [
      ProjectCategory.Libraries,
      ProjectCategory.CAU,
      ProjectCategory.Utilities,
    ],
  },
  {
    // TODO: GitHub repository
    name: 'Bmart',
    description:
      'A responsive web version of Bmart with a stunning thunder effect.',
    href: 'https://github.com/woowa-techcamp-2020/bmart-1',
    categories: [
      ProjectCategory.WoowaTechCamp,
      ProjectCategory.WebService,
      ProjectCategory.Design,
    ],
  },
  {
    name: 'To Do List',
    description:
      'A kanban-style, butter smooth and performant To Do web application.',
    href: 'https://github.com/woowa-techcamp-2020/todo-14',
    categories: [
      ProjectCategory.WoowaTechCamp,
      ProjectCategory.WebService,
      ProjectCategory.Design,
    ],
  },
  {
    name: 'Woowahan Chart',
    description:
      'Simply create pie charts or bar charts with just a set of data.',
    href: 'https://github.com/woowa-techcamp-2020/woowahan-chart',
    categories: [ProjectCategory.Libraries, ProjectCategory.WoowaTechCamp],
  },
  {
    name: 'Financial Ledger',
    description: 'A simple web app for managing your money on any device.',
    href: 'https://github.com/woowa-techcamp-2020/hkb-15',
    categories: [
      ProjectCategory.WoowaTechCamp,
      ProjectCategory.WebService,
      ProjectCategory.Design,
    ],
  },
  {
    name: 'Baemin Market Sign Up',
    description:
      'Sign up and sign in of Baemin Market with a neat spring animation and transitions.',
    href: 'https://github.com/woowa-techcamp-2020/market-6',
    categories: [
      ProjectCategory.WoowaTechCamp,
      ProjectCategory.WebService,
      ProjectCategory.Design,
    ],
  },
  {
    name: 'Prismap',
    description:
      'Automatically map and pluralize Prisma schema to match database table names with JavaScript.',
    href: 'https://github.com/jhaemin/prismap',
    categories: [ProjectCategory.Libraries],
  },
  {
    name: 'Cassandra',
    description:
      'Box office prediction app for Mac. It precisely predicted the Luck-Key movie.',
    href: 'https://github.com/payw-org/Cassandra',
    Logo: cassandraLogo,
    categories: [ProjectCategory.DesktopApps, ProjectCategory.CAU],
  },
  {
    name: 'webglue',
    description: 'Gather your favorite websites in one place.',
    href: 'https://github.com/payw-org/webglue.me-vue',
    Logo: webglueLogo,
    categories: [ProjectCategory.WebService, ProjectCategory.CAU],
  },
  {
    name: 'WEBuffet',
    description: 'A Chrome extension that allows you to manipulate websites.',
    href: 'https://github.com/payw-org/webuffet',
    Logo: webuffetLogo,
    categories: [ProjectCategory.BrowserExtensions, ProjectCategory.CAU],
  },
  {
    name: 'Squircle.js',
    description: 'Squircles for web. Responsively updates radius itself ',
    href: 'https://github.com/jhaemin/squircle.js',
    Logo: squircleLogo,
    categories: [
      ProjectCategory.Design,
      ProjectCategory.Libraries,
      ProjectCategory.Experiments,
    ],
  },
  {
    name: 'Saying',
    description: 'One saying per day. You can save it as an image.',
    href: 'https://github.com/jhaemin/saying.today',
    Logo: sayingLogo,
    categories: [ProjectCategory.WebService, ProjectCategory.Design],
  },
  {
    name: 'where.land',
    description: 'A public websites shortcut to replace your bookmarks.',
    href: 'https://github.com/jhaemin/where.land',
    Logo: wherelandLogo,
    categories: [ProjectCategory.WebService, ProjectCategory.Design],
  },
  {
    name: 'Labyrinth',
    description:
      'A password manager app for Mac. Simple, but with all features you need.',
    href: 'https://github.com/payw-org/Labyrinth',
    Logo: labyrinthLogo,
    categories: [ProjectCategory.DesktopApps, ProjectCategory.CAU],
  },
  {
    name: 'Delightful Naver Webtoon',
    description:
      'Directly mirrors Naver Webtoon website with additional sync feature.',
    href: 'https://github.com/jhaemin/delightful-naver-webtoon',
    categories: [ProjectCategory.WebService],
  },
  {
    name: 'Touch Scroll Lock',
    description:
      'A tiny script that prevents vertical scrolling while you’re swiping horizontally on unscrollable areas.',
    href: 'https://github.com/jhaemin/touch-scroll-lock',
    categories: [ProjectCategory.Experiments],
  },
  {
    name: 'Drag and Drop',
    description: 'Butter smooth drag and drop prototype for Woowahan To Do.',
    href: 'https://github.com/jhaemin/drag-and-drop',
    categories: [ProjectCategory.Libraries],
  },
  {
    name: 'ReScript Calculator',
    description: 'Learning ReScript with a practical example.',
    href: 'https://github.com/jhaemin/rescript-calculator',
    categories: [ProjectCategory.Experiments],
  },
  {
    name: 'Muyaho',
    description: 'Which means I’m excited.',
    href: 'https://github.com/jhaemin/muyaho',
    categories: [ProjectCategory.Libraries],
  },
  {
    name: 'jsoup+',
    description:
      'Extended version of jsoup with new features inspired by modern web development.',
    href: 'https://github.com/payw-org/jsoup-plus',
    categories: [ProjectCategory.CAU],
  },
]
