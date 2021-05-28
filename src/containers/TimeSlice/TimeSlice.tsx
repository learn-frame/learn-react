import { FC, useState, useEffect } from 'react'
import { TextField } from '@material-ui/core'
import styles from './TimeSlice.module.scss'

function generateNums(num: number) {
  const nums = []

  for (let i = 0; i < 150; i++) {
    nums.push(num)
  }

  return nums
}

const TimeSlice: FC = () => {
  const [num, setNum] = useState(0)
  const [nums, setNums] = useState(generateNums(num))

  useEffect(() => {
    let timer = setInterval(() => {
      setNum(num + 1)
      setNums(generateNums(num))
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [num])

  return (
    <section className={styles.wrapper}>
      <div className={styles.left}>{nums.map((val) => val)}</div>
      <div className={styles.right}>
        <TextField variant='outlined' label='输入框' />
      </div>
    </section>
  )
}

export default TimeSlice
