import React from 'react';
import Counter from '../components/Counter/Counter';

// 单一数据源: 整个应用的 state 被储存在一棵 object tree 中, 并且这个 object tree 只存在于唯一一个 store 中
// State 是只读的: 唯一改变 state 的方法就是触发 action, action 是一个用于描述已发生事件的普通对象
// 数据改变只能通过纯函数: 通过编写 reducers 来描述 action 改变 state tree

class PropsState extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <>
        <Counter counterName='唱' initValue={3} />
        <Counter counterName='跳' initValue={3} />
        <Counter counterName='rap' initValue={32} />
        <Counter initValue={1} />
      </>
    );
  }
}

export default PropsState;
