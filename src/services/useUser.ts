import useSWR from 'swr'
import { useSetRecoilState } from 'recoil'
import { currentUserState } from 'src/stores/user'

const useUser = () => {
  const setCurrentUserState = useSetRecoilState(currentUserState)
  const { data, error } = useSWR('http://localhost:3002/user')
  setCurrentUserState(data)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useUser