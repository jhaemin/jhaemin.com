import apiPaths from '@/modules/both/api-paths'
import { IsAdminResPayload } from '@/pages/api/auth/is-admin'
import { ResponseData } from '@/types/general'
import useSWR from 'swr'

const useIsAdmin = () => {
  const { data } = useSWR<ResponseData<IsAdminResPayload>>(apiPaths.authIsAdmin)

  return data?.payload?.isAdmin ?? false
}

export default useIsAdmin
