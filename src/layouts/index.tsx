import { FC } from 'react'
import Header from 'src/components/Header'
import Home from 'src/containers/Home'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Layouts: FC = () => {
  return (
    <section style={{ width: '100vw', minHeight: '100vh', display: 'flex' }}>
      <Header />

      <main style={{ margin: '88px 24px', width: '100%' }}>
        <Home />
      </main>

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Paper>
    </section >
  )
}

export default Layouts