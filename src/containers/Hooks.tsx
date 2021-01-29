import { ReactNode, FC, useState, useEffect } from 'react'
import Button from '../components/Button/Button'

interface Props {
  children: ReactNode
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

  const { children } = props
  return (
    <div>
      {children}
      <Button onClick={() => handleCountChange(count)}>
        我为长者+{count}s
      </Button>
    </div>
  )
}

export default Hooks
