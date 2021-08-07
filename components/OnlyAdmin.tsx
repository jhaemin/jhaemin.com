import useIsAdmin from '@/hooks/use-is-admin'

/**
 * Display children components when the user is admin.
 */
const OnlyAdmin: React.FC = ({ children }) => {
  const isAdmin = useIsAdmin()

  if (!isAdmin) {
    return null
  }

  return <>{children}</>
}

export default OnlyAdmin
