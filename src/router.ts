import {
  Home,
  MyPortal,
  Exchange,
  ButtonPage,
  LearnRedux,
  AsyncRedux,
  Hooks,
  Bubble,
  ForwardRef,
  LearnContext,
  SSE,
  LearnChildren,
  LearnRecoil,
  TimeSlice,
} from 'src/containers'

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
  {
    path: '/forwardRef',
    name: 'Learn ForwardRef',
    component: ForwardRef,
  },
  {
    path: '/learn-context',
    name: 'Learn Context',
    component: LearnContext,
  },
  {
    path: '/learn-children',
    name: 'Learn Children',
    component: LearnChildren,
  },
  {
    path: '/time-slice',
    name: 'Time Slice',
    component: TimeSlice,
  },
  {
    path: '/learn-recoil',
    name: 'Learn Recoil',
    component: LearnRecoil,
  },
  {
    path: '/sse',
    name: 'Server Send Event',
    component: SSE,
  },
]

export default routers
