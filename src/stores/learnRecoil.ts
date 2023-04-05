import { useCallback } from 'react'
import {
  atom,
  selector,
  selectorFamily,
  waitForAll,
  waitForAllSettled,
  waitForNone,
  waitForAny,
  Loadable,
  useSetRecoilState,
  constSelector,
  errorSelector
} from 'recoil'
import { UserInfo } from 'src/types/user'
import { BASE_URL } from 'src/shared/constants'

export const currentUserState = atom<UserInfo | null>({
  key: '@user/currentUserState',
  default: null
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

export const userListState = atom<UserInfo[]>({
  key: '@user/userListState',
  default: [
    {
      user_id: '1',
      username: 'Yancey'
    },
    {
      user_id: '2',
      username: 'Sayaka'
    },
    {
      user_id: '3',
      username: 'Mitsuha'
    }
  ]
})

export const userQuery = selectorFamily<
  UserInfo | undefined,
  SelectorMapper<UserInfo>
>({
  key: '@user/userQuery',
  get:
    (params) =>
      ({ get }) =>
        get(userListState).find(
          (user) =>
            user.user_id === params.user_id && user.username === params.username
        )
})

export const fetchUser = selectorFamily<UserInfo, string>({
  key: '@user/fetchUser',
  get: (id) => async () => {
    const res = await fetch(BASE_URL + `/user?user_id=${id}`)
    const data: UserInfo = await res.json()
    return data
  }
})

export const fetchUsersSerial = selector<UserInfo[]>({
  key: '@user/fetchUsersSerial',
  get: ({ get }) => {
    const mock_user_ids = ['a', 'b', 'c', 'd']
    return mock_user_ids.map((id) => get(fetchUser(id)))
  }
})

export const fetchUsersWaitForAll = selector<UserInfo[]>({
  key: '@user/fetchUsersWaitForAll',
  get: ({ get }) => {
    const mock_user_ids = ['e', 'f', 'g', 'h']
    const res = get(waitForAll(mock_user_ids.map((id) => fetchUser(id))))

    return res
  }
})

// 立即把所有的变为 Loadable, 写在 JSX 里效果比较明显
export const fetchUsersWaitForNone = selector<Loadable<UserInfo>[]>({
  key: '@user/fetchUsersWaitForNone',
  get: ({ get }) => {
    const mock_user_ids = ['i', 'j', 'k', 'l']
    const layerLoadables = get(
      waitForNone(mock_user_ids.map((id) => fetchUser(id)))
    )

    return layerLoadables
  }
})

// 所有的均完成, 不管成功还是失败
export const fetchUsersWaitForAllSettled = selector<UserInfo[]>({
  key: '@user/fetchUsersWaitForAllSettled',
  get: ({ get }) => {
    const mock_user_ids = ['m', 'n', 'o', 'p']
    const layerLoadables = get(
      waitForAllSettled(mock_user_ids.map((id) => fetchUser(id)))
    )

    return layerLoadables
      .filter(({ state }) => state === 'hasValue')
      .map(({ contents }) => contents)
  }
})

// 只要有一个成功就算成功, 全失败才算失败
export const fetchUsersWaitForAny = selector<UserInfo[]>({
  key: '@user/fetchUsersWaitForAny',
  get: ({ get }) => {
    const mock_user_ids = ['q', 'r', 's', 't']
    const layerLoadables = get(
      waitForAny(mock_user_ids.map((id) => fetchUser(id)))
    )

    return layerLoadables
      .filter(({ state }) => state === 'hasValue')
      .map(({ contents }) => contents)
  }
})

export const constSelectorState = constSelector('1')

export const errorSelectorState = errorSelector('1')