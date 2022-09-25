import { FC, useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'

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

    const timer = setInterval(() => {
      setNum(num + 1)
      setNums(generateNums(num))
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [num])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Box
        sx={{
          width: 500,
          height: 500,
          wordBreak: 'break-all',
          border: '1px solid #ccc',
          overflowY: 'scroll'
        }}
      >
        {nums.map((val) => val)}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 500,
          height: 500,
          border: '1px solid #ccc'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: 50,
            height: 50,
            background: '#a4beb2',
            cursor: 'pointer'
          }}
          ref={boxRef}
        />
      </Box>
    </Box>
  )
}

export default TimeSlice
