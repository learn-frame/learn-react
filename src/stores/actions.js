// 单一数据源
// 只读的 state
// 使用纯函数执行修改

// 所有的 state 都存储到一颗 store
// 改变 state 的唯一方式是触发 action, action 是一个纯对象
// 使用纯函数编写 reducer, 来描述如何修改 state

const INCREASE = 'INCREASE';
const DECREASE = 'INCREASE';

const actions = {
  increase: () => ({ type: INCREASE, payload: { name: 'yancey', age: 18 } }),
  decrease: () => ({ type: DECREASE }),
};

export default actions;
