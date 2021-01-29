import components from 'src/containers'

const routers = [
  {
    path: '/',
    name: 'Home',
    component: components.Home,
    exact: true,
  },
  {
    path: '/portal',
    name: 'React.createPortal',
    component: components.MyPortal,
  },
  {
    path: '/exchange',
    name: '汇率计算器',
    component: components.Exchange,
  },
  {
    path: '/button-list',
    name: 'button list',
    component: components.ButtonPage,
  },
  {
    path: '/learn-redux',
    name: 'Sync Redux',
    component: components.LearnRedux,
  },
  {
    path: '/async-redux',
    name: 'Async Redux',
    component: components.AsyncRedux,
  },
  {
    path: '/hooks',
    name: 'Hooks',
    component: components.Hooks,
  },
  {
    path: '/bubble',
    name: 'Bubble',
    component: components.Bubble,
  },
  {
    path: '/learn-immer',
    name: 'Learn Immer',
    component: components.LearnImmer,
  },
]

export default routers
