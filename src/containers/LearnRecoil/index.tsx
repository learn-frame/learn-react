import { FC, useEffect } from 'react'
import {
  useRecoilValue,
  waitForAll,
  noWait,
  useRecoilValueLoadable,
  useRecoilStateLoadable,
  RecoilState,
  useRecoilCallback,
  isRecoilValue,
  useResetRecoilState,
  useRecoilSnapshot
} from 'recoil'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import {
  userQuery,
  fetchUsersWaitForAll,
  fetchUsersWaitForAny,
  fetchUsersWaitForAllSettled,
  fetchUsersWaitForNone,
  fetchUser,
  currentUserState
} from 'src/stores/learnRecoil'
import { UserInfo } from 'src/types/user'

const LearnRecoil: FC = () => {
  const userInfo = useRecoilValue(currentUserState)

  const queryUser = useRecoilValue(
    userQuery({
      user_id: '2',
      username: 'Sayaka'
    })
  )

  const [userA, userB] = useRecoilValue(
    waitForAll([fetchUser('userA'), fetchUser('userB')])
  )

  const userC = useRecoilValue(noWait(fetchUser('userC')))

  const usersWaitForAll = useRecoilValue(fetchUsersWaitForAll)

  const usersWaitForAny = useRecoilValue(fetchUsersWaitForAny)

  const usersWaitForAllSettled = useRecoilValue(fetchUsersWaitForAllSettled)

  const usersWaitForNone = useRecoilValue(fetchUsersWaitForNone)

  const loadableValue = useRecoilValueLoadable(fetchUser('userD'))

  const [loadableValue1, setLoadableValue] = useRecoilStateLoadable(
    fetchUser('userE') as RecoilState<UserInfo>
  )

  const resetUser = useResetRecoilState(currentUserState)

  // changeUser 是个函数, 只有主动执行才会触发
  const changeUser = useRecoilCallback(
    ({ snapshot, set }) =>
      (userID: string) => {
        const res = snapshot.getLoadable(fetchUser(userID)) // 预取用户信息

        if (res.state === 'hasValue') {
          set(currentUserState, res.contents) //  改变当前用户以开始新的渲染
        }
      }
  )

  const snapshot = useRecoilSnapshot()

  console.log({
    userInfo,
    queryUser,
    userA,
    userB,
    usersWaitForAll,
    usersWaitForAny,
    usersWaitForAllSettled,
    usersWaitForNone,
    userC,
    loadableValue,
    loadableValue1,
    setLoadableValue,
    snapshot
  })

  useEffect(() => {
    console.debug('The following atoms were modified:')
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node))
    }
  }, [snapshot])

  if (!userInfo) {
    return null
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <TextField
        label="user_id"
        variant="standard"
        value={userInfo.user_id}
        sx={{ marginBottom: 4 }}
      />
      <TextField
        label="username"
        variant="standard"
        value={userInfo.username}
        sx={{ marginBottom: 4 }}
      />
      <TextField
        label="full_name"
        variant="standard"
        value={userInfo.full_name}
        sx={{ marginBottom: 4 }}
      />
      <TextField
        label="biography"
        variant="standard"
        value={userInfo.biography}
        multiline
        sx={{ marginBottom: 4 }}
      />
      <TextField
        label="email"
        variant="standard"
        value={userInfo.email}
        sx={{ marginBottom: 4 }}
      />
      <TextField
        label="follower_count"
        variant="standard"
        value={userInfo.follower_count}
        sx={{ marginBottom: 4 }}
      />
      <TextField
        label="follow_count"
        variant="standard"
        value={userInfo.follow_count}
        sx={{ marginBottom: 4 }}
      />

      <Button onClick={resetUser}>Reset User</Button>

      <List>
        {usersWaitForNone.map((layerLoadable, i) => {
          switch (layerLoadable.state) {
            case 'hasValue':
              return (
                <ListItem
                  key={i}
                  onClick={() => changeUser(layerLoadable.contents.user_id)}
                >
                  <ListItemText
                    primary="使用 waitForNone"
                    secondary={<span>{layerLoadable.contents.user_id}</span>}
                  />
                </ListItem>
              )
            case 'hasError':
              return (
                <Snackbar open autoHideDuration={3000}>
                  <Alert severity="error">出错惹!</Alert>
                </Snackbar>
              )
            case 'loading':
              return <CircularProgress key={i} />
          }
        })}
      </List>

      <Typography variant="h3">{'<RecoilRoot />'}</Typography>
      <List>
        <ListItem>
          <ListItemText
            secondary={
              <span>
                RecoilRoot 是整个库的 Context, 有{' '}
                <strong>initializeState</strong> 和 <strong>override</strong>{' '}
                两个 props:
                <br />
                <strong>initializeState</strong>: 是个函数, 用来初始 APP 的状态,
                换言之就是初始化写死的一些状态.
                <br />
                <strong>override</strong>: 默认为 true, 比较有趣的是, recoil
                支持多个 RecoilRoot, 默认内部根将覆盖外部根, 如果设置了 override
                为 false, 将不会覆盖.
              </span>
            }
          />
        </ListItem>
      </List>

      <Typography variant="h3">State</Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="atom()"
            secondary={<span>一个 atom 表示 Recoil 的 state.</span>}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="selector()"
            secondary={
              <span>
                理论上是个纯函数, 它提供 get 方法, 可以根据某个或某些状态,
                来衍生出新的值. 但 get 也支持异步.
              </span>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="useRecoilState()"
            secondary={
              <span>
                当<strong>同时需要对 atom 进行读写</strong>时, 使用此 hook.
                使用此 hook 会使组件订阅 atom.
              </span>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="useRecoilValue()"
            secondary={
              <span>
                当<strong>仅需要读取 atom</strong> 时, 使用此 hook. 使用此 hook
                会使组件订阅 atom.
              </span>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="useSetRecoilState()"
            secondary={
              <span>
                <strong>当仅需要写入 atom</strong> 时, 使用此 hook.
              </span>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="useResetRecoilState()"
            secondary={
              <span>
                需<strong>将 atom 重置为默认值</strong>时, 使用此 hook.
              </span>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Loadable()"
            secondary={
              <span>
                代表 atom 或 selector 的异步状态, 有 <strong>state</strong> 和{' '}
                <strong>contents</strong> 两个属性:
                <br />
                <strong>state</strong>: 可选值有 hasValue, hasError, loading
                <br />
                <strong>contents</strong>
              </span>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="useRecoilStateLoadable()"
            secondary={
              <span>
                总之就是异步的 useRecoilState, 相当于 useRecoilState + noWait
                的组合, 更细粒度的拿到异步状态, 可以保证不使用 React Suspense.
              </span>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="useRecoilValueLoadable()"
            secondary={
              <span>
                总之就是异步的 useRecoilValue, 相当于 useRecoilValue + noWait
                的组合, 更细粒度的拿到异步状态, 可以保证不使用 React Suspense.
              </span>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="useGetRecoilValueInfo_UNSTABLE()"
            secondary={<span>TODO:</span>}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="useRecoilRefresher_UNSTABLE()"
            secondary={<span>TODO:</span>}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="isRecoilValue()"
            secondary={
              <span>
                如果 value 是一个 atom 或者 selector 则返回 true, 反之, 返回
                false. 下面是几个例子:
                <br />
                <br />
                isRecoilValue(fetchUser) ==={' '}
                {isRecoilValue(fetchUser).toString()}
                <br />
                isRecoilValue(currentUserState) ==={' '}
                {isRecoilValue(currentUserState).toString()}
                <br />
                isRecoilValue(5) === {isRecoilValue(5).toString()}
                <br />
                isRecoilValue({}) === {isRecoilValue({}).toString()}
                <br />
              </span>
            }
          />
        </ListItem>
      </List>

      <Typography variant="h3">Utils</Typography>

      <List>
        <ListItem>
          <ListItemText
            primary="atomFamily()"
            secondary={<span>可以传参数的 atom.</span>}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="selectorFamily()"
            secondary={<span>可以传参数的 selector.</span>}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="waitForAll()"
            secondary={
              <span>
                类似于 Promise.all, 嗯, 实际底层就是 Promise.all,
                它的好处是可以并发几个异步接口. 如果不使用它,
                批量请求接口只能是线性的.
              </span>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="waitForAny()"
            secondary={
              <span>
                只要有一个成功就算成功, 全失败才算失败. 举个例子,
                如果有四个并发的请求, 凉了一个, 成功了三个,
                那它返回这三个成功了的数组.
              </span>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="waitForAllSettled()"
            secondary={
              <span>
                类似于 Promise.allSettled,
                需要等到全部完成了才出结果(不管里面成功还是失败)
              </span>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="waitForNone()"
            secondary={
              <span>
                它也是用于批量几个请求, 但它会返回一个 Loadable 对象的数组, 这个
                Loadable 对象能拿到请求中的状态, 有 hasValue, hasError, loading,
                这样你可以细粒度的根据不同状态来渲染不同逻辑.
                <br />
                换句话说, waitForAll, waitForAny, waitForAllSettled
                最终结果都是返回值的数组, 而 waitForNone 是 Loadable 对象的数组
              </span>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="noWait()"
            secondary={
              <span>
                可以和 waitForNone 一起对比着看, waitForNone 是多个, noWait
                是针对一个请求. 其实 noWait 就是现代化基于 hooks
                的标准请求方式了.
              </span>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="constSelector()"
            secondary={<span>常量 selector, 暂没想明白能干啥, 先马一哈.</span>}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="errorSelector()"
            secondary={
              <span>恒返回错误的 selector, 暂没想明白能干啥, 先马一哈.</span>
            }
          />
        </ListItem>
      </List>

      <Typography variant="h3">useRecoilTransaction_UNSTABLE</Typography>
      <List>
        <ListItem>
          <ListItemText secondary={<span>TODO:</span>} />
        </ListItem>
      </List>

      <Typography variant="h3">useRecoilCallback</Typography>
      <List>
        <ListItem>
          <ListItemText
            secondary={
              <span>
                如 useRecoilValue, 在页面渲染之后就会立即执行.
                如果我们想通过点击某个按钮, 或者处触发某种条件或行为时, 再触发.
                此外, useRecoilCallback 也是对快照进行异步访问.
              </span>
            }
          />
        </ListItem>
      </List>

      <Typography variant="h3">Snapshot</Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="useRecoilTransactionObserver_UNSTABLE()"
            secondary={<span>TODO:</span>}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary="useRecoilSnapshot()"
            secondary={<span>对快照进行同步访问</span>}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="useGotoRecoilSnapshot()"
            secondary={
              <span>该函数可以根据 snapshot 来更新整个 Recoil state</span>
            }
          />
        </ListItem>
      </List>
    </Box>
  )
}

export default LearnRecoil
