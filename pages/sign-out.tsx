import { Page } from '@/types/general'
import { JhmGetServerSideProps } from '@/types/next'
import { withSessionPage } from '@/utils/node/with-session'

const SignOutPage: Page = () => {
  return <div>Signed Out</div>
}

export default SignOutPage

const get: JhmGetServerSideProps = async ({ req }) => {
  req.session.destroy()

  return {
    props: {},
  }
}

export const getServerSideProps = withSessionPage(get)
