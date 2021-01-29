import Home from 'src/containers/Home'
import MyPortal from 'src/containers/MyPortal'
import Exchange from 'src/containers/Exchange'
import ButtonPage from 'src/containers/ButtonPage'
import LearnRedux from 'src/containers/LearnRedux'
import AsyncRedux from 'src/containers/AsyncRedux'
import Hooks from 'src/containers/Hooks'
import Bubble from 'src/containers/Bubble'

const routers = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true,
  },
  {
    path: '/portal',
    name: 'React.createPortal',
    component: MyPortal,
  },
  {
    path: '/exchange',
    name: '汇率计算器',
    component: Exchange,
  },
  {
    path: '/button-list',
    name: 'button list',
    component: ButtonPage,
  },
  {
    path: '/learn-redux',
    name: 'Sync Redux',
    component: LearnRedux,
  },
  {
    path: '/async-redux',
    name: 'Async Redux',
    component: AsyncRedux,
  },
  {
    path: '/hooks',
    name: 'Hooks',
    component: Hooks,
  },
  {
    path: '/bubble',
    name: 'Bubble',
    component: Bubble,
  },
]

export default routers
