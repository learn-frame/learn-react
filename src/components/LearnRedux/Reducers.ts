// reducer 指定应用状态变化来响应 action 并发送到 store

// 它一个纯函数, 接收旧的 state 和 action, 并返回新的 state
// 它不得改变旧的 state, 必须通过使用扩展运算符或者 Object.assign() 拷贝出一份

// 如果说 action 是接口，那么 reducer 就是接口的实现

// DONT'T DO:
// 修改传入参数
// 执行有副作用的操作, 如 API 请求和路由跳转
// 调用非纯函数, 如 Date.now() 或 Math.random()

import { combineReducers } from 'redux';

import {
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TASK,
  TOGGLE_TASK,
  REMOVE_TASK,
} from './Action';

import { TASKAction, TASKState, TASK } from './types';

const { SHOW_ALL } = VisibilityFilters;

const initState: TASKState = {
  tasks: [
    {
      id: +new Date(),
      text: 'The first TASK of you!',
      completed: false,
    },
  ],
  visibilityFilter: SHOW_ALL,
};

const tasksReducer = (state = initState.tasks, action: TASKAction): TASK[] => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        { id: +new Date(), text: action.text, completed: false },
      ];
    case TOGGLE_TASK:
      return state.map(task => {
        if (task.id === action.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
    case REMOVE_TASK:
      return state.filter(task => task.id !== action.id);
    default:
      return state;
  }
};

const visibilityFilterReducer = (
  state = initState.visibilityFilter,
  action: TASKAction,
): string => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filterCondition;
    default:
      return state;
  }
};

// const taskApp = (state = initialState, action: TASKAction) => ({
//   visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//   tasks: tasks(state.tasks, action),
// });

// combineReducers 和上面注释掉的代码等价
const taskApp = combineReducers({
  tasksReducer,
  visibilityFilterReducer,
});

export default taskApp;
