import useUser from '@/hooks/use-user'
import { ReactNode } from 'react'

/**
 * Display children components when the user is signed in.
 */
const SignedIn: React.FC<{ children: ReactNode }> = ({ children }) => {
  const user = useUser()

  if (!user) {
    return null
  }

  return <>{children}</>
}

export default SignedIn
