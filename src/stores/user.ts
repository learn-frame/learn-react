import { useCallback } from 'react'
import { atom, selector, useSetRecoilState } from 'recoil'
import { UserInfo } from 'src/types/user'

export const currentUserState = atom<UserInfo | null>({
  key: 'CurrentUserState',
  default: null
})

export const userQuery = selector({
  key: 'UserState',
  get: async () => {
    const res = await fetch('http://localhost:3002/user')
    const data: UserInfo = await res.json();
    return data
  }
})

export const useUserInfo = () => {
  const setState = useSetRecoilState(currentUserState)
  const setUserInfo = useCallback(
    (userInfo: UserInfo) => {
      setState(userInfo)
    },
    [setState]
  )

  return { setUserInfo }
}
