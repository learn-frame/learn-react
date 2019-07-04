// 数据初始化放在 reducer 里
// reducer 必须是一个 pure function

const initialState = {
  count_add: 0,
};

const AddAndSubtract = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INCREASE':
      return { count_add: state.count_add + 1 };
    case 'DECREASE':
      return { count_add: state.count_add - 1 };
    default:
      return state;
  }
};

export default AddAndSubtract;
