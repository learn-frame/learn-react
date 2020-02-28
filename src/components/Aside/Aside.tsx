import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import routers from '../../router'

const Aside: FC = () => {
  return (
    <aside className='aside'>
      {routers.map(router => (
        <Link to={router.path} key={router.path}>
          <Button color='primary' variant='text'>
            {router.name}
          </Button>
        </Link>
      ))}
    </aside>
  )
}

export default Aside
