import { ReactNode, FC, useState, useEffect, useReducer } from 'react'
import Button from '../../components/Button/Button'

interface Props {
  children: ReactNode
}

interface State {
  total: number
}

interface Action {
  type: ActionKind
  payload: {
    num: number
  }
}

enum ActionKind {
  Increase = 'INCREASE',
  Decrease = 'DECREASE',
}

const Hooks: FC<Props> = (props) => {
  const [count, setCount] = useState(0)
  // 当累加到 10 的时候清零
  const handleCountChange = (count: number) => {
    count === 10 ? setCount(0) : setCount(count + 1)
  }

  useEffect(() => {
    document.addEventListener('visibilitychange', function () {
      const state = this.visibilityState
      state === 'hidden'
        ? (this.title = 'TAT... 页面被隐藏了')
        : (this.title = '我又粗线了~')
    })
  })

  const [state, dispatch] = useReducer(
    (state: State, action: Action) => {
      switch (action.type) {
        case ActionKind.Increase:
          return { total: state.total + action.payload.num }
        case ActionKind.Decrease:
          return { total: state.total - action.payload.num }
        default:
          return state
      }
    },
    { total: 0 },
  )

  const { children } = props
  return (
    <div className='hooks-container'>
      {children}
      <Button onClick={() => handleCountChange(count)}>
        我为长者+{count}s
      </Button>

      <hr />

      <Button
        type='primary'
        onClick={() =>
          dispatch({ type: ActionKind.Decrease, payload: { num: 1 } })
        }
      >
        -
      </Button>
      {state.total}
      <Button
        type='primary'
        onClick={() => {
          dispatch({ type: ActionKind.Increase, payload: { num: 1 } })
          dispatch({ type: ActionKind.Increase, payload: { num: 2 } })
        }}
      >
        +
      </Button>
    </div>
  )
}

export default Hooks
