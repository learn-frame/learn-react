import { FC, useEffect } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Loading from 'src/components/Loading'
import useThemeMode from 'src/hooks/useThemeMode'
import useUser from 'src/services/useUser'
import { useUserInfo } from 'src/stores/user'
import Menu from './Menu'
import Header from './Header'
import Main from './Main'

const Layout: FC = () => {
  const { themeMode } = useThemeMode()
  const { user, isLoading, isError } = useUser()
  const { setUserInfo } = useUserInfo()

  useEffect(() => {
    user && setUserInfo(user)
  }, [user, setUserInfo])

  if (isLoading || isError) {
    return <Loading />
  }

  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          mode: themeMode
        }
      })}
    >
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Header />
        <Menu />
        <Main />
      </Box>
    </ThemeProvider>
  )
}

export default Layout
