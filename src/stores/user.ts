import { atom, selector } from 'recoil'
import { UserInfo } from 'src/types/user'

export const currentUserState = atom<UserInfo | null>({
  key: 'CurrentUserState',
  default: null
})

export const userQuery = selector({
  key: 'UserState',
  get: async ({ get }) => {
    const res = await fetch('http://localhost:3002/user')
    const data: UserInfo = await res.json();
    return data
  }
})