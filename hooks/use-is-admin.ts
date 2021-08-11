import { IsAdminResPayload } from '@/pages/api/is-admin'
import { ResponseData } from '@/types/general'
import useSWR from 'swr'

const useIsAdmin = () => {
  const { data } = useSWR<ResponseData<IsAdminResPayload>>('is-admin')

  return data?.payload?.isAdmin ?? false
}

export default useIsAdmin
