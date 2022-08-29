import { useState, useEffect } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    return () => clearInterval(id)
  }, [count])

  // 只会执行一次
  // useEffect(() => {
  //   setCount(count + 1)
  // }, [])

  // 每次 render 都会执行
  // 因为 setCount 会带来 render, 会导致死循环
  // useEffect(() => {
  //   setCount(count + 1)
  // })

  return <h1>{count}</h1>
}
