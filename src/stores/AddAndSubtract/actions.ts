const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const actions = {
  increase: () => ({ type: INCREASE, payload: { name: 'yancey', age: 18 } }),
  decrease: () => ({ type: DECREASE }),
};

export default actions;
