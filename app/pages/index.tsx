import { BlitzPage, Link, Routes } from '@blitzjs/core'

const Home: BlitzPage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href={Routes.PhotographyPage()}>Photography</Link>
    </div>
  )
}

export default Home
