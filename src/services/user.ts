import useSWR from 'swr'

export const useUser = () => {
  const { data, error } = useSWR('http://localhost:3002/user')

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  }
}