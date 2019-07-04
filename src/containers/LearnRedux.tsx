import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddAndSubtractAction from '../stores/AddAndSubtract/actions';
import MultiplicationAndDivisionAction from '../stores/MultiplicationAndDivision/actions';
import Button from '../components/Button/Button';

interface ILearnReduxProps {
  count_add: number;
  count_multi: number;
  increase: Function;
  decrease: Function;
  multiplicate: Function;
  divide: Function;
}

class LearnRedux extends Component<ILearnReduxProps, {}> {
  constructor(props: ILearnReduxProps) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    const {
      count_add,
      count_multi,
      increase,
      decrease,
      multiplicate,
      divide,
    } = this.props;
    return (
      <div className='learn_redux'>
        <h1>Learn Redux</h1>
        <h2>加减</h2>
        <p>{count_add}</p>
        <Button type='primary' onClick={() => increase()}>
          Increase
        </Button>
        <Button type='danger' onClick={() => decrease()}>
          Decrease
        </Button>
        <h2>乘除</h2>
        <p>{count_multi}</p>
        <Button type='primary' onClick={() => multiplicate()}>
          Increase
        </Button>
        <Button type='danger' onClick={() => divide()}>
          Decrease
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    count_add: state.count_add,
    count_multi: state.count_multi,
  };
}

// connect 接收四个参数，分别是
// mapStateToProps | mapDispatchToProps | mergeProps | options
// 第一个将 store 中的数据挂载到 props 上
// 第二个是将 action 对象挂载到 props 上
export default connect(
  mapStateToProps,
  AddAndSubtractAction,
)(LearnRedux);
