import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../stores/action';
import Button from '../components/Button/Button';

interface ILearnReduxProps {
  count: number;
  increase: Function;
  decrease: Function;
}

class LearnRedux extends Component<ILearnReduxProps, {}> {
  constructor(props: ILearnReduxProps) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div className='learn_redux'>
        <h1>Learn Redux</h1>
        <p>{this.props.count}</p>
        <Button type='primary' onClick={() => this.props.increase()}>
          Increase
        </Button>
        <Button type='danger' onClick={() => this.props.decrease()}>
          Decrease
        </Button>
      </div>
    );
  }
}

// connect 接收四个参数，分别是
// mapStateToProps | mapDispatchToProps | mergeProps | options
// 第一个将 store 中的数据挂载到 props 上
// 第二个是将 action 对象挂载到 props 上
export default connect(
  state => state,
  actions,
)(LearnRedux);
