import useSWR from 'swr'
import { UserInfo, UserParams } from 'src/types/user'
import { BASE_URL } from 'src/shared/constants'

export const useUser = () => {
  const { data, error } = useSWR<UserInfo>(BASE_URL + '/user')

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export const useUsers = (params: SelectorMapper<UserParams>) => {
  const { data, error } = useSWR<UserInfo[]>(BASE_URL + '/users?' +
    new URLSearchParams(params))

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  }
}
