// Store 用于将 [当前的 state] 和 [action] 传入 reducer，然后调用响应的 [reducer] 来返回新的 [state]
// 它保存了 [根 reducer] 返回的完整的 state 树.

// getState() 获取 state
// dispatch(action) 更新 state
// subscribe(listener) 注册监听器

import { createStore } from 'redux';
import taskApp from './Reducers';

import {
  addTask,
  toggleTask,
  removeTask,
  setVisibilityFilter,
  VisibilityFilters,
} from './Action';

// createStore() 第二个参数可选，用于设置 state 的初始状态
const store = createStore(taskApp);

// 打印初始状态
console.log(store.getState());

// 每次 state 更新时，打印日志
// subscribe()返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// 让 store 来 [调度] 一个 [行为]
store.dispatch(addTask('新增一个 TODO'));
store.dispatch(addTask('新增第二个 TODO'));
store.dispatch(toggleTask(1557994074783));
store.dispatch(removeTask(1557994074783));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe();
