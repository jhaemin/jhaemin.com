import apiPaths from '@/modules/both/api-paths'
import { GetUserPayload } from '@/pages/api/auth/user'
import { ResponseData } from '@/types/general'
import useSWR from 'swr'

const useUser = () => {
  const { data } = useSWR<ResponseData<GetUserPayload>>(apiPaths.authUser)

  return data?.payload ?? null
}

export default useUser
