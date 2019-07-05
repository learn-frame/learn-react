// 数据初始化放在 reducer 里
// reducer 必须是一个 pure function

const initialState = {
  count_multi: 1,
};

export default function MultiplicationAndDivision(state = initialState, action: any) {
  switch (action.type) {
    case 'MULTIPLICATION':
      return { count_multi: state.count_multi * 10 };
    case 'DIVISION':
      return { count_multi: state.count_multi / 10 };
    default:
      return state;
  }
}

