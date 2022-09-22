import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
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
    </Box>
  )
}

export default LearnRecoil
