import useSWR from 'swr'
import { UserInfo, UserParams } from 'src/types/user'

export const useUser = () => {
  const { data, error } = useSWR<UserInfo>('http://localhost:3002/user')

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export const useUsers = (params: SelectorMapper<UserParams>) => {
  const { data, error } = useSWR<UserInfo[]>('http://localhost:3002/users?' +
    new URLSearchParams(params))

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  }
}
