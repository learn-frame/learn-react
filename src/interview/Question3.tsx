import { useState, useRef } from 'react'

// 点击第一个按钮2次，再点击第二个按钮3次，再点击第一个按钮3次（3秒内完成点击），请问弹出的alert是什么？
export function Counters() {
  const [count, setCount] = useState(0)
  function handleAlertClick() {
    setTimeout(() => {
      alert('You clicked on: ' + count)
    }, 3000)
  }
  return (
    <div>
         <p>You clicked {count} times</p>   
      <button onClick={() => setCount(count + 1)}>     Click me    </button>   
      <button onClick={handleAlertClick}> Show alert </button>     
    </div>
  )
}

export default function Counter() {
  const [count, setCount] = useState(0)
  const ref = useRef(count)

  // Keeps the state and ref equal
  function updateState(newState: number) {
    ref.current = newState
    setCount(newState)
  }

  function handleAlertClick() {
    setTimeout(() => {
      alert('You clicked on: ' + count)
    }, 3000)
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          // Use the created function instead of the manual update
          updateState(count + 1)
        }}
      >
        Click me
      </button>
      <button onClick={handleAlertClick}> Show alert </button>
    </div>
  )
}
