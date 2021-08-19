import useUser from '@/hooks/use-user'

/**
 * Display children components when the user is signed in.
 */
const SignedIn: React.FC = ({ children }) => {
  const user = useUser()

  if (!user) {
    return null
  }

  return <>{children}</>
}

export default SignedIn
