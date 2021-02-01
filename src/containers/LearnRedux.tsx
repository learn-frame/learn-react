import { Component } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { RootState } from 'src/stores/rootReducer'
import { addActions, multiActions } from 'src/stores/rootAction'
import Button from 'src/components/Button/Button'

interface ILearnReduxProps {
  count_add: number
  count_multi: number
  increase: Function
  decrease: Function
  increaseAsync: Function
  multiplicate: Function
  divide: Function
  fetchBitCoin: Function
  loading: boolean
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

const mapStateToProps = ({
  addAndSubtractReducers: { count_add },
  multiplicationAndDivisionReducers: { count_multi },
}: RootState) => {
  return {
    count_add,
    count_multi,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    increase: () => dispatch(addActions.increase()),
    decrease: () => dispatch(addActions.decrease()),
    increaseAsync: () => dispatch(addActions.increaseAsync()),
    multiplicate: () => dispatch(multiActions.multiplicate()),
    divide: () => dispatch(multiActions.divide()),
  }
}

// connect 接收四个参数，分别是
// mapStateToProps | mapDispatchToProps | mergeProps | options
export default connect(mapStateToProps, mapDispatchToProps)(LearnRedux)
