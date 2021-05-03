import { StrictMode, createContext } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { enableMapSet } from 'immer'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import configureStore from 'src/stores/configureStore'
import App from 'src/App'
import 'src/index.css'

enableMapSet()

const store = configureStore()

// Both of these will create a specialized history object for you.
// 这两个路由组件都用于创建一个序列化的历史对象

// 对于动态网站应当使用 BrowserRouter
// BrowserRouter 实际是 HTML5 history API 的封装

// 对于静态网站可以使用 HashRouter
// HashRouter 实际上是通过 window.location.hash 来保持 UI 和 URL 的同步
// 因此该方式会导致地址栏的 URL 有一个丑丑的 #

function getConfirmation(message: string, cb: Function) {
  const allowTransition = window.confirm(message)
  cb(allowTransition)
}

const supportsHistory = 'pushState' in window.history

export const ThemeContext = createContext('light')
const ThemeProvider = ThemeContext.Provider

const renderApp = () =>
  ReactDOM.render(
    <StrictMode>
      <ThemeProvider value='dark'>
        <ReduxProvider store={store}>
          <BrowserRouter
            basename='/'
            // 跳转前的回调
            getUserConfirmation={getConfirmation}
            // 作为降级处理，当你的浏览器不支持 h5 的 history api 时可以使用 forceRefresh
            forceRefresh={!supportsHistory}
            // this.props.location.key 会给每个路由生成独一无二的 key (即使多次点击同一个路由，key 也会发生变化)
            // 默认是 6 位，如 tr0i54 这个属性可以让你修改 key 的长度
            // 随机算法的实现很有趣 Math.random().toString(36)
            keyLength={12}
          >
            <App />
          </BrowserRouter>
        </ReduxProvider>
      </ThemeProvider>
    </StrictMode>,
    document.getElementById('root'),
  )

if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
  ;(module as any).hot.accept('./App', renderApp)
}

renderApp()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
