import { FC } from 'react'
import { styled } from '@mui/material/styles'

const DrawerHeaderEl = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}))

const DrawerHeader: FC = () => {
  return <DrawerHeaderEl />
}

export default DrawerHeader
