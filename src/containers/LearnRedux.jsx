import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../stores/action';

class LearnRedux extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <div className='learn_redux'>
        <h1>Learn Redux</h1>
        <p>{this.props.count}</p>
        <button onClick={()=>this.props.increase()}>increase</button>
        <button onClick={()=>this.props.decrease()}>decrease</button>
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
