import React, { useState } from 'react'

interface Props {
  children: React.ReactNode
}

const Hooks: React.FC<Props> = props => {
  const [count, setCount] = useState(0)
  // 当累加到 10 的时候清零
  const handleCountChange = (count: number) => {
    count === 10 ? setCount(0) : setCount(count + 1)
  }

  const { children } = props
  return (
    <div>
      {children}
      <p>我为长者+{count}s</p>
      <button onClick={() => handleCountChange(count)}>Click me</button>
    </div>
  )
}

export default Hooks
