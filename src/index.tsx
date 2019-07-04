import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Routers from './Routers';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';

const store = configureStore();

// Both of these will create a specialized history object for you.
// 这两个路由组件都用于创建一个序列化的历史对象

// 对于动态网站应当使用 BrowserRouter
// BrowserRouter 实际是 HTML5 history API 的封装

// 对于静态网站可以使用 HashRouter
// HashRouter 实际上是通过 window.location.hash 来保持 UI 和 URL 的同步
// 因此该方式会导致地址栏的 URL 有一个丑丑的 #

function getConfirmation(message: string, cb: Function) {
  const allowTransition = window.confirm(message);
  cb(allowTransition);
}

const supportsHistory = 'pushState' in window.history;

const renderApp = () =>
  ReactDOM.render(
    <Provider store={store}>
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
        <Routers />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
  );

if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
  (module as any).hot.accept('./Routers', renderApp);
}

renderApp();

serviceWorker.unregister();
