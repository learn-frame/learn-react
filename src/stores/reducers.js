// 数据初始化放在 reducer 里
// reducer 必须是一个 pure function

const initialState = {
  count: 0,
};

const reducers = (state = initialState, action) => {
  console.log(state, action)
  switch (action.type) {
    case 'INCREASE':
      return { count: state.count + 1 };
    case 'DECREASE':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default reducers;
