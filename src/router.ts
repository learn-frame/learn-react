const routers = [
  {
    path: '/',
    name: 'Home',
    component: 'Home',
  },
  {
    path: '/portal',
    name: 'React.createPortal',
    component: 'MyPortal',
  },
  {
    path: '/exchange',
    name: '汇率计算器',
    component: 'Exchange',
  },
  {
    path: '/button-list',
    name: 'button list',
    component: 'ButtonPage',
  },
  {
    path: '/learn-redux',
    name: 'Sync Redux',
    component: 'LearnRedux',
  },
  {
    path: '/async-redux',
    name: 'Async Redux',
    component: 'AsyncRedux',
  },
  {
    path: '/hooks',
    name: 'Hooks',
    component: 'Hooks',
  },
  {
    path: '/bubble',
    name: 'Bubble',
    component: 'Bubble',
  },
  {
    path: '/photo-canvas',
    name: '拍照修改',
    component: 'MyCanvas/MyCanvas',
  },
]

export default routers
