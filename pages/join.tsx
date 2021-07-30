import Button from '@/components/ui/button/Button'
import Input from '@/components/ui/input/Input'
import { error } from '@/constants/error'
import { Page } from '@/types/general'
import { isEmail } from '@/utils/both/regex'
import axiom from '@/utils/web/axiom'
import { bindTextInput } from '@/utils/web/react'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import $ from './join.module.scss'

const JoinPage: Page = () => {
  const [email, setEmail] = useState('')
  const [magicKey, setMagicKey] = useState('')
  const [sentMagicKey, setSentMagicKey] = useState(false)
  const router = useRouter()

  const join = useCallback(async () => {
    if (!isEmail(email)) {
      window.alert(error.AUTH_004.msg)
      return
    }

    const res = await axiom.post('join', {
      email,
    })

    if (res.data.err) return

    window.alert(`Sent a magic key to ${email}`)

    setSentMagicKey(true)
  }, [email])

  const verify = useCallback(async () => {
    const res = await axiom.post('verify-join', {
      email,
      magicKey,
    })

    if (res.data.err) return

    window.alert('Thanks for joining jhaemin.com')

    router.push('/')
  }, [email, magicKey, router])

  return (
    <div className={$.inputContainer}>
      <Input
        type="email"
        placeholder="Email"
        {...bindTextInput(email, setEmail)}
      />
      <Button onClick={join}>Join</Button>

      {sentMagicKey && (
        <>
          <Input
            type="text"
            placeholder="Magic key"
            {...bindTextInput(magicKey, setMagicKey)}
          />
          <Button onClick={verify}>Verify</Button>
        </>
      )}
    </div>
  )
}

export default JoinPage
