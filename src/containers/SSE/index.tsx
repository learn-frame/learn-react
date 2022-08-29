import { FC, useState, useEffect } from 'react'
interface CustomEvent extends Event {
  data: string
}

interface Data {
  payload: {
    likeCount: number
  }
}

const SSE: FC = () => {
  const [like, setLike] = useState(0)

  const initialSSE = () => {
    const evtSource = new EventSource('http://localhost:3002/sse', {
      withCredentials: true,
    })

    evtSource.addEventListener('open', () => {
      console.log('已开启')
    })

    evtSource.addEventListener('addLikeCount', ((e: CustomEvent) => {
      const {
        payload: { likeCount },
      }: Data = JSON.parse(e.data)

      setLike(likeCount)

      if (likeCount > 10) {
        evtSource.close()
      }
    }) as EventListener)

    evtSource.addEventListener('message', (e: MessageEvent) => {
      console.log(e)
    })

    evtSource.addEventListener('error', (err: Event) => {
      console.log(err)
    })
  }

  useEffect(() => {
    initialSSE()
  }, [])

  return <div>{like}</div>
}

export default SSE
