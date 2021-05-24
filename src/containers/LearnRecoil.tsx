import { FC, ChangeEvent, Suspense } from 'react'
import {
  atom,
  useRecoilState,
  selector,
  useRecoilValue,
  selectorFamily,
} from 'recoil'
import { TextField } from '@material-ui/core'
import { getStars } from 'src/services/github.service'

const LearnRecoil: FC = () => {
  /*
   * 同步的
   */
  const userNameInputState = atom({
    key: 'userNameInputState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  })

  const userNameLengthState = selector({
    key: 'userNameLengthState', // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => get(userNameInputState).length,
  })

  const [userNameInput, setUserNameInput] = useRecoilState(userNameInputState)

  const userNameLength = useRecoilValue(userNameLengthState)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserNameInput(e.target.value)
  }

  /*
   * 异步的
   */
  const starsQuery = selectorFamily({
    key: 'StarsQuery',
    get: (param) => async () => {
      const res = await getStars(param as any)
      return res
    },
  })

  const UserInfo = (params: any) => {
    const userName = useRecoilValue(starsQuery(params))
    return <div>{userName}</div>
  }

  return (
    <>
      {/* 同步 */}
      <section>
        <TextField label='Standard' onChange={onChange} />
        <div style={{ marginTop: '20px' }}>Your Input: {userNameInput}</div>
        <br />
        <div>Your Input's Length: {userNameLength}</div>
        <br />
      </section>

      {/* 异步 */}
      <section>
        <Suspense fallback={<div>loading...</div>}>
          <UserInfo
            params={{
              userName: 'YanceyOfficial',
              repoName: 'natsuha-weather',
            }}
          />
        </Suspense>
      </section>
    </>
  )
}

export default LearnRecoil
