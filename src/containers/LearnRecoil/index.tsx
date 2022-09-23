import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { currentUserState } from 'src/stores/user'

const LearnRecoil: FC = () => {
  const userInfo = useRecoilValue(currentUserState)

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
      <List>
        <ListItem>
          <ListItemText
            primary="atom()"
            secondary={<span>一个 atom 表示 Recoil 的 state</span>}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="selector()"
            secondary={<span>理论上是个纯函数, 它提供 get 方法, 可以根据某个或某些状态, 来衍生出新的值. 但 get 也支持异步, 所以还是有点儿意思的.</span>}
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
      </List>
    </Box>
  )
}

export default LearnRecoil
