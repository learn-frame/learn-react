import { useState, useEffect } from 'react'

function Hooks() {
  const [val, setVal] = useState(1)
  useEffect(() => {
    console.log(val)
    return () => {
      console.log(val)
    }
  }, [])

  return (
    <>
      <button
        onClick={() => {
          setVal(val + 1)
        }}
      >
        {val}
      </button>
    </>
  )
}

export default Hooks

// mounted: 打印出 1
// 点击一下: val 变成 2
// 注意!!! 卸载的时候, 打印出 1
