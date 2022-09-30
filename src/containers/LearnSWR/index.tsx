import { FC } from 'react'
import useSWR, { useSWRConfig } from 'swr'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import PrismCode from 'src/components/PrismCode'
import { useUsers } from 'src/services/useUser'
import { UserInfo } from 'src/types/user'
import { GET } from 'src/shared/request'

function Navbar() {
  return (
    <div>
      <UserAvatar />
    </div>
  )
}

function Content() {
  // 使用原生 fetch 做 fetch
  const { users } = useUsers({
    user_id: '1',
    username: 'Yancey'
  })

  // 使用 axios 做 fetcher
  const { data } = useSWR<UserInfo[]>(
    [
      'http://localhost:3002/users',
      {
        user_id: '2',
        username: 'Sayaka'
      }
    ],
    GET
  )

  if (!users) return <CircularProgress />

  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.user_id}>
          <ListItemText primary={user.full_name} secondary={user.biography} />
        </ListItem>
      ))}
    </List>
  )
}

function UserAvatar() {
  const { users, isLoading } = useUsers({
    user_id: '1',
    username: 'Yancey'
  })

  if (isLoading || !users) return <CircularProgress />

  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.user_id}>
          <ListItemText primary={user.user_id} />
        </ListItem>
      ))}
    </List>
  )
}

// 虽然在 Content 和 UserAvatar 中都使用了 useUsers
// 但由于 url 和 query string 是一样的, SWR 只会请求一次, 非常好.
const LearnSWR: FC = () => {
  const { mutate } = useSWRConfig()

  const requestViaClicking = ()=> {
    mutate('http://localhost:3002/users')
  }

  return (
    <Box>
      <Navbar />
      <Content />

      <Divider sx={{ marginBottom: 4 }} />

      <Box>
        <PrismCode
          language="javascript"
          code="const {(data, error, isValidating, mutate)} = useSWR(key, fetcher, options)"
        />

        <Typography variant="h4">参数</Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="key"
              secondary={
                <span>
                  一般就是 url 的字符串, 当然如果带参数, 可以是对象字面量或数组,
                  具体看你 fetcher 接收参数的模式.
                </span>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="fetcher"
              secondary={
                <span>
                  fetch / axios / grahql-request / 甚至手写 XMLHttpRequest 都可,
                  只要返回 Promise 就好.
                </span>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="options" secondary={<span></span>} />
          </ListItem>
        </List>
        <Typography variant="h4">返回值</Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="data"
              secondary={
                <span>
                  响应体, 如果 Promise 在 pending 中, data 的值为 undefined.
                </span>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="error"
              secondary={<span>fetcher 抛出的错误.</span>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="isValidating"
              secondary={<span>是否有请求或重新验证加载</span>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <PrismCode
                  language="javascript"
                  code="mutate(data?, options?)"
                  isInline
                />
              }
              secondary={<span>更改缓存数据的函数</span>}
            />
          </ListItem>
        </List>
        <Typography variant="h4">选项</Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="suspense"
              secondary={<span>启用 React Suspense 模式, 默认为 false</span>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <PrismCode
                  language="javascript"
                  code="fetcher(args)"
                  isInline
                />
              }
              secondary={<span>fetcher 函数</span>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={'revalidateIfStale'}
              secondary={
                <span>即使存在陈旧数据, 也自动重新验证. 默认为 true</span>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={'revalidateOnMount'}
              secondary={
                <span>在挂载组件时启用或禁用自动重新验证. 默认为 false.</span>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={'revalidateOnFocus'}
              secondary={<span>窗口聚焦时自动重新验证. 默认为 true.</span>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={'revalidateOnReconnect'}
              secondary={
                <span>
                  浏览器恢复网络连接时自动重新验证(通过
                  <PrismCode
                    language="javascript"
                    code="window.navigator.onLine"
                    isInline
                  />
                  判断). 默认为 true.
                </span>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={'refreshInterval'}
              secondary={
                <>
                  <span>1. 默认为 0</span>
                  <br />
                  <span>
                    2. 如果设置为数字, 数字即为轮询间隔, 应以毫秒为单位.
                  </span>
                  <br />
                  <span>
                    3. 如果设置为函数, 该函数将接收最新数据,
                    并且应以毫秒为单位返回间隔
                  </span>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={'refreshWhenHidden'}
              secondary={
                <span>
                  窗口不可见时进行轮询(如果启用了 refreshInterval). 默认为
                  false.
                </span>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={'refreshWhenOffline'}
              secondary={
                <span>
                  浏览器离线时轮询(通过
                  <PrismCode
                    language="javascript"
                    code="window.navigator.onLine"
                    isInline
                  />
                  判断). 默认为 false.
                </span>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={'shouldRetryOnError'}
              secondary={<span>fetcher 有错误时重试. 默认为 true.</span>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={'dedupingInterval'}
              secondary={
                <span>
                  删除一段时间内相同 key 的重复请求. 默认为 2000 毫秒.
                </span>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={'focusThrottleInterval'}
              secondary={
                <span>在一段时间内只重新验证一次. 默认为 5000 毫秒.</span>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={'loadingTimeout'}
              secondary={
                <span>
                  请求超时触发
                  <PrismCode
                    language="javascript"
                    code="onLoadingSlow(key, config)"
                    isInline
                  />
                  事件. 默认为 3000 毫秒.
                </span>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={'errorRetryInterval'}
              secondary={<span>错误重试的时间间隔. 默认为 5000 毫秒.</span>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={'errorRetryCount'}
              secondary={<span>重试最大次数.</span>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={'fallback'}
              secondary={
                <span>
                  用于 SSR 或者 SSG. 具体看
                  <Button href="https://swr.vercel.app/zh-CN/docs/with-nextjs">
                    fallback
                  </Button>
                </span>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={'fallbackData'}
              secondary={
                <span>
                  如果想在 SWR 缓存中预填充已经存在的数据, 可以使用 fallbackData
                  选项. 当 SWR 还没有获取此次数据的时候, 这个 hook 将返回
                  prefetchedData 作为 fallback.
                </span>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <PrismCode
                  language="javascript"
                  code="onLoadingSlow(key, config)"
                  isInline
                />
              }
              secondary={
                <span>
                  请求加载时间过长时的回调函数. 和 loadingTimeout 搭配.
                </span>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <PrismCode
                  language="javascript"
                  code="onSuccess(data, key, config)"
                  isInline
                />
              }
              secondary={<span>请求成功完成时的回调函数.</span>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <PrismCode
                  language="javascript"
                  code="onError(data, key, config)"
                  isInline
                />
              }
              secondary={<span>请求返回错误时的回调函数.</span>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <PrismCode
                  language="javascript"
                  code="onErrorRetry(err, key, config, revalidate, revalidateOps)"
                  isInline
                />
              }
              secondary={<span>错误处理的重试函数.</span>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <PrismCode
                  language="javascript"
                  code="compare(a, b)"
                  isInline
                />
              }
              secondary={
                <span>
                  比较函数, 用来检测返回的数据何时已更改, 以防止伪造的重新渲染.
                  默认情况下使用
                  <Button href="https://github.com/shuding/stable-hash">
                    stable-hash
                  </Button>
                </span>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <PrismCode language="javascript" code="isPaused()" isInline />
              }
              secondary={
                <span>
                  用于暂停所有数据请求, 如果返回值为 true,
                  请求的数据和错误都会被忽略. 默认返回值为 false.
                </span>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<PrismCode language="javascript" code="use" isInline />}
              secondary={<span>中间件函数数组.</span>}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default LearnSWR
