import { FC } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Loading from 'src/components/Loading'
import useThemeMode from 'src/hooks/useThemeMode'
import useUser from 'src/services/useUser'
import Menu from './Menu'
import Header from './Header'
import Main from './Main'

const Layout: FC = () => {
  const { themeMode } = useThemeMode()
  const { isLoading, isError } = useUser()

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
