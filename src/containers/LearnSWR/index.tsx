import { FC } from 'react'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { useUsers } from 'src/services/useUser'

function Navbar() {
  return (
    <div>
      <UserAvatar />
    </div>
  )
}

function Content() {
  const { users, isLoading } = useUsers()

  if (isLoading || !users) return <CircularProgress />

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
  const { users, isLoading } = useUsers()

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
// 但 SWR 只会请求一次
const LearnSWR: FC = () => {
  return (
    <Box>
      <Navbar />
      <Content />
    </Box>
  )
}

export default LearnSWR
