import { atom, selector } from 'recoil'

export enum TodoListStatus {
  Uncompleted,
  Completed
}

export enum TodoListFilter {
  ShowAll,
  ShowAllUncompleted,
  ShowAllCompleted,
}

export interface TodoList {
  id: string
  text: string
  status: TodoListStatus
}

export const todoListState = atom<TodoList[]>({
  key: 'todoListState',
  default: []
})

export const todoListFilterState = atom<TodoListFilter>({
  key: 'todoListFilterState',
  default: TodoListFilter.ShowAll
});

export const editTodoState = atom<TodoList | null>({
  key: 'editTodoState',
  default: null
});

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case TodoListFilter.ShowAllCompleted:
        return list.filter((item) => item.status === TodoListStatus.Completed);
      case TodoListFilter.ShowAllUncompleted:
        return list.filter((item) => item.status === TodoListStatus.Uncompleted);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.status === TodoListStatus.Completed).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = (totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100).toFixed(2);

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});