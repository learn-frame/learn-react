import { lazy } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import CurrencyExchangIcon from '@mui/icons-material/CurrencyExchange'
import WebhookIcon from '@mui/icons-material/Webhook'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack'
import AvTimerIcon from '@mui/icons-material/AvTimer'
import ApartmentIcon from '@mui/icons-material/Apartment'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import SettingsInputSvideoIcon from '@mui/icons-material/SettingsInputSvideo';
import ChatIcon from '@mui/icons-material/Chat';

const Home = lazy(() => import('src/containers/Home'))
const Exchange = lazy(() => import('src/containers/Exchange'))
const LearnHooks = lazy(() => import('src/containers/LearnHooks'))
const LearnRecoil = lazy(() => import('src/containers/LearnRecoil'))
const ConcurrentFeature = lazy(() => import('src/containers/ConcurrentFeature'))
const VideoCapture = lazy(() => import('src/containers/VideoCapture'))
const Todo = lazy(() => import('src/containers/Todo'))
const LearnSWR = lazy(() => import('src/containers/LearnSWR'))
const ChatGPT = lazy(() => import('src/containers/ChatGPT'))

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
    key: 'concurrentFeature',
    icon: AvTimerIcon,
    label: 'Concurrent Feature',
    path: '/concurrent-feature',
    component: ConcurrentFeature
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
    label: 'Todo List',
    path: '/todo',
    component: Todo
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
    key: ' learnSWR',
    icon: SettingsInputSvideoIcon,
    label: 'Learn SWR',
    path: '/learn-swr',
    component: LearnSWR
  },
  {
    key: ' chatGPT',
    icon: ChatIcon,
    label: 'ChatGPT',
    path: '/chat-gpt',
    component: ChatGPT
  },
]

export default routes