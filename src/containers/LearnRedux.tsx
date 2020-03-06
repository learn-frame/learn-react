import React, { Component } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { RootState } from '../stores/rootReducer'
import AddAndSubtractAction from '../stores/AddAndSubtract/actions'
import MultiplicationAndDivisionAction from '../stores/MultiplicationAndDivision/actions'
import Button from '../components/Button/Button'
import { User } from './AsyncRedux'

interface ILearnReduxProps {
  count_add: number
  count_multi: number
  bitCoins: any[]
  increase: Function
  decrease: Function
  increaseAsync: Function
  multiplicate: Function
  divide: Function
  fetchBitCoin: Function
  loading: boolean
  fetchStargazers: Function
  stargazers: User[]
}

class LearnRedux extends Component<ILearnReduxProps, {}> {
  constructor(props: ILearnReduxProps) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      count_add,
      count_multi,
      increase,
      decrease,
      increaseAsync,
      multiplicate,
      divide,
    } = this.props

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
        <Button onClick={() => increaseAsync()}>Increase Async</Button>
        <h2>乘除</h2>
        <p>{count_multi}</p>
        <Button type='primary' onClick={() => multiplicate()}>
          Multiplicate
        </Button>
        <Button type='danger' onClick={() => divide()}>
          Divide
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    count_add: state.AddAndSubtractReducers.count_add,
    count_multi: state.MultiplicationAndDivisionReducers.count_multi,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    increase: () => dispatch(AddAndSubtractAction.increase()),
    decrease: () => dispatch(AddAndSubtractAction.decrease()),
    increaseAsync: () => dispatch(AddAndSubtractAction.increaseAsync()),
    multiplicate: () =>
      dispatch(MultiplicationAndDivisionAction.multiplicate()),
    divide: () => dispatch(MultiplicationAndDivisionAction.divide()),
  }
}

// connect 接收四个参数，分别是
// mapStateToProps | mapDispatchToProps | mergeProps | options
export default connect(mapStateToProps, mapDispatchToProps)(LearnRedux)
