import { FC, useState, useEffect } from 'react'

const SSE: FC = () => {
  const [like, setLike] = useState(0)

  const initialSSE = () => {
    const evtSource = new EventSource('http://localhost:3002/sse', {
      withCredentials: true,
    })

    evtSource.addEventListener('open', () => {
      console.log('已开启')
    })

    evtSource.addEventListener('message', (e) => {
      setLike(JSON.parse(e.data).count)
    })

    evtSource.addEventListener('error', (err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    initialSSE()
  }, [])

  return <div>{like}</div>
}

export default SSE
