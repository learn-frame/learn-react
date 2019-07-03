import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Routers from './Routers';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './stores/reducer';

const store = createStore(
  reducer,
  // 连接浏览器的 Redux 时光机调试工具
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

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

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter
      basename='/'
      getUserConfirmation={getConfirmation} // 跳转前的回调
      forceRefresh={!supportsHistory} // 作为降级处理，当你的浏览器不支持 h5 的 history api 时可以使用 forceRefresh
      keyLength={12} // this.props.location.key 会给每个路由生成独一无二的 key (即使多次点击同一个路由，key 也会发生变化)，默认是 6 位，如 tr0i54 这个属性可以让你修改 key 的长度
    >
      <Routers />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
