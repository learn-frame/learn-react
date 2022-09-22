import { atom } from 'recoil'
import type { PaletteMode } from '@mui/material'

export const themeModeState = atom<PaletteMode>({
    key: 'ThemeModeState',
    default: 'light'
})
