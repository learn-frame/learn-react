import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { helloSaga } from './sagas';

  // 初始化 redux-saga
  const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState?: {}) {


  // 收集中间件
  const middlewares = [sagaMiddleware];

  // 应用中间件
  const middlewareEnhancer = applyMiddleware(...middlewares);

  // 收集增强，增强可以包含中间件和一些手写的增强
  const enhancers = [middlewareEnhancer];

  // 组合增强
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, initialState, composedEnhancers);
  sagaMiddleware.run(helloSaga);

  return store;
}
