import Button from '@/components/ui/button/Button'
import Input from '@/components/ui/input/Input'
import { Page } from '@/types/general'
import { withSessionPage } from '@/utils/node/with-session'
import axiom from '@/utils/web/axiom'
import { bindTextInput } from '@/utils/web/react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useState } from 'react'
import $ from './sign-in.module.scss'

const SignInPage: Page = () => {
  const [email, setEmail] = useState('')
  const [magicKey, setMagicKey] = useState('')
  const router = useRouter()

  return (
    <div className={$.inputContainer}>
      <div className={clsx($.row, $.row1)}>
        <Input
          type="email"
          {...bindTextInput(email, setEmail)}
          placeholder="Email"
        />
        <Button
          onClick={async () => {
            const res = await axiom.post('sign-in', {
              email,
            })

            if (res.data.err) return

            window.alert('Sent a magic key')
          }}
        >
          Send a magic key
        </Button>
      </div>

      <div className={$.row}>
        <Input
          type="text"
          {...bindTextInput(magicKey, setMagicKey)}
          placeholder="Magic Key"
        />
        <Button
          onClick={async () => {
            const res = await axiom.post('verify-sign-in', {
              email,
              magicKey,
            })

            if (res.data.err) return

            window.alert('Success')

            router.push('/')
          }}
        >
          Sign In
        </Button>
      </div>
    </div>
  )
}

export default SignInPage

export const getServerSideProps = withSessionPage(
  async ({ req }) => {
    return { props: {} }
  },
  {
    noAccessWithSignedIn: true,
  }
)