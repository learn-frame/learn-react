import { FC } from 'react'
import Header from 'src/components/Header'
import Home from 'src/containers/Home'
import VideoCapture from 'src/containers/VideoCapture'

const Layouts: FC = () => {
  return (
    <section style={{ width: '100vw', minHeight: '100vh', display: 'flex' }}>
      <Header />

      <main style={{ margin: '88px 24px', width: '100%' }}>
        <VideoCapture />
      </main>
    </section >
  )
}

export default Layouts