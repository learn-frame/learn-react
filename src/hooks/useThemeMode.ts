import { useRecoilState } from 'recoil'
import { themeModeState } from 'src/stores/themeMode'

const useThemeMode = () => {
  const [themeMode, setThemeMode] = useRecoilState(themeModeState)

  const toggleThemeMode = () => {
    if (themeMode === 'light') {
      setThemeMode('dark')
    } else {
      setThemeMode('light')
    }
  }

  return { themeMode, toggleThemeMode }
}

export default useThemeMode