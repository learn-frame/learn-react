import useSWR from 'swr'

const useUser = () => {
  const { data, error } = useSWR('http://localhost:3002/user')

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useUser