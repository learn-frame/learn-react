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

export default connect(
  state => state,
  actions,
)(LearnRedux);
