import { lazy } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import CurrencyExchangIcon from '@mui/icons-material/CurrencyExchange'
import WebhookIcon from '@mui/icons-material/Webhook'
import SportsIcon from '@mui/icons-material/Sports'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack'
import AvTimerIcon from '@mui/icons-material/AvTimer'
import ApartmentIcon from '@mui/icons-material/Apartment'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

const Home = lazy(() => import('src/containers/Home'))
const Exchange = lazy(() => import('src/containers/Exchange'))
const LearnHooks = lazy(() => import('src/containers/LearnHooks'))
const LearnRecoil = lazy(() => import('src/containers/LearnRecoil'))
const SSE = lazy(() => import('src/containers/SSE'))
const TimeSlice = lazy(() => import('src/containers/TimeSlice'))
const VideoCapture = lazy(() => import('src/containers/VideoCapture'))
const Todo = lazy(() => import('src/containers/Todo'))

const routes = [
  {
    key: 'home',
    icon: HomeIcon,
    label: 'Home',
    path: '/',
    component: Home
  },
  {
    key: 'exchange',
    icon: CurrencyExchangIcon,
    label: 'Exchange',
    path: '/exchange',
    component: Exchange
  },
  {
    key: 'learnHooks',
    icon: WebhookIcon,
    label: 'Learn Hooks',
    path: '/learn-hooks',
    component: LearnHooks
  },
  {
    key: 'learnRecoil',
    icon: ApartmentIcon,
    label: 'Learn Recoil',
    path: '/learn-recoil',
    component: LearnRecoil
  },
  {
    key: 'sse',
    icon: SportsIcon,
    label: 'SSE',
    path: '/sse',
    component: SSE
  },
  {
    key: 'timeSlice',
    icon: AvTimerIcon,
    label: 'Time Slice',
    path: '/time-slice',
    component: TimeSlice
  },
  {
    key: 'videoCapture',
    icon: VideoCameraBackIcon,
    label: 'Video Capture',
    path: '/video-capture',
    component: VideoCapture
  },
  {
    key: 'Todo',
    icon: FormatListNumberedIcon,
    label: 'Todo',
    path: '/todo',
    component: Todo
  },
]

export default routes