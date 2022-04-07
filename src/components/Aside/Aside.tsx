import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'src/components/Button/Button'
import routers from 'src/router'

const Aside: FC = () => {
  return (
    <aside className='aside'>
      {routers.map((router) => (
        <div key={router.path}>
          <NavLink to={router.path} exact={router.exact}>
            <Button type='primary'>
              {router.name}
            </Button>
          </NavLink>
        </div>
      ))}
    </aside>
  )
}

export default Aside
