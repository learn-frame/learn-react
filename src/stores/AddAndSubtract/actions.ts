const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const INCREMENT_ASYNC = 'INCREMENT_ASYNC';

const actions = {
  increase: () => ({ type: INCREASE, payload: { name: 'yancey', age: 18 } }),
  decrease: () => ({ type: DECREASE }),
  increaseAsync: () => ({ type: INCREMENT_ASYNC }),
};

export default actions;
