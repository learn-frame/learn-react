import {
  VisibilityFilters,
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
  SET_VISIBILITY_FILTER,
} from './Action';

export interface TASK {
  id: number;
  text: string;
  completed: boolean;
}

// State
export interface TASKState {
  tasks: TASK[];
  visibilityFilter:
    | typeof VisibilityFilters.SHOW_ACTIVE
    | typeof VisibilityFilters.SHOW_ALL
    | typeof VisibilityFilters.SHOW_COMPLETED;
}

interface AddTaskAction {
  type: typeof ADD_TASK;
  text: string;
}

interface RemoveTaskAction {
  type: typeof REMOVE_TASK;
  id: number;
}

interface ToggleTaskAction {
  type: typeof TOGGLE_TASK;
  id: number;
}
interface SetVisibilityFilterAction {
  type: typeof SET_VISIBILITY_FILTER;
  filterCondition:
    | typeof VisibilityFilters.SHOW_ACTIVE
    | typeof VisibilityFilters.SHOW_ALL
    | typeof VisibilityFilters.SHOW_COMPLETED;
}

// Action
export type TASKAction =
  | AddTaskAction
  | RemoveTaskAction
  | ToggleTaskAction
  | SetVisibilityFilterAction;
