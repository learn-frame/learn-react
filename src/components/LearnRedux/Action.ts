// Action 用于定义行为，或者可以说: Action 是用来列举用户可以交互的功能
// 对于 TASK APP, 它会有:
// [添加 TASK] [切换某个 TASK 完成/未完成] [移除某个 TASK] [按条件搜索]

import { TASKAction } from './types';

export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export const addTask = (text: string): TASKAction => ({
  type: ADD_TASK,
  text,
});

export const toggleTask = (id: number): TASKAction => ({
  type: TOGGLE_TASK,
  id,
});

export const removeTask = (id: number): TASKAction => ({
  type: REMOVE_TASK,
  id,
});

export const setVisibilityFilter = (filterCondition: string): TASKAction => ({
  type: SET_VISIBILITY_FILTER,
  filterCondition,
});
