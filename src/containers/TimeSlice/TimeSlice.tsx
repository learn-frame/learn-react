import { FC, useState, useEffect, useRef } from 'react'
import styles from './TimeSlice.module.scss'

function generateNums(num: number) {
  const nums = []

  for (let i = 0; i < 1400; i++) {
    nums.push(num)
  }

  return nums
}

const TimeSlice: FC = () => {
  const [num, setNum] = useState(0)
  const [nums, setNums] = useState(generateNums(num))
  const boxRef = useRef<HTMLDivElement>(null)

  const dnd = () => {
    if (boxRef && boxRef.current) {
      boxRef.current.onmousedown = (e) => {
        let x = 0,
          y = 0
        if (boxRef && boxRef.current) {
          x = e.clientX - boxRef.current.offsetLeft
          y = e.clientY - boxRef.current.offsetTop
        }

        document.onmousemove = (moveE) => {
          if (boxRef && boxRef.current) {
            boxRef.current.style.left = moveE.clientX - x + 'px'
            boxRef.current.style.top = moveE.clientY - y + 'px'
          }
        }
        document.onmouseup = () => {
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    }
  }

  useEffect(() => {
    dnd()

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
        <div className={styles.box} ref={boxRef} />
      </div>
    </section>
  )
}

export default TimeSlice
