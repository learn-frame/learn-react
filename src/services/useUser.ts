import useSWR from 'swr'
import { UserInfo } from 'src/types/user'

export const useUser = () => {
  const { data, error } = useSWR<UserInfo>('http://localhost:3002/user')

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export const useUsers = () => {
  const { data, error } = useSWR<UserInfo[]>('http://localhost:3002/users')

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  }
}
