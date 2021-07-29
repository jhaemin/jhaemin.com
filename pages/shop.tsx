import { Page } from '@/types/general'
import { JhmGetServerSideProps } from '@/types/next'
import { withSessionPage } from '@/utils/node/with-session'

type ShopPageProps = {
  userId?: number
}

const ShopPage: Page<ShopPageProps> = ({ userId }) => {
  console.log(userId)

  return null
}

export default ShopPage

const handler: JhmGetServerSideProps = async ({ req }) => {
  console.log(req.userId)

  return {
    props: {},
  }
}

export const getServerSideProps = withSessionPage(handler)
