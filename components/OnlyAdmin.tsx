import useIsAdmin from '@/hooks/use-is-admin'
import { ReactNode } from 'react'

/**
 * Display children components when the user is admin.
 */
const OnlyAdmin: React.FC<{ children: ReactNode }> = ({ children }) => {
  const isAdmin = useIsAdmin()

  if (!isAdmin) {
    return null
  }

  return <>{children}</>
}

export default OnlyAdmin
