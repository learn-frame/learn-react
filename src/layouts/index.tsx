import { FC } from 'react'
import Header from 'src/components/Header'
import Home from 'src/containers/Home'

const Layouts: FC = () => {
  return (
    <section style={{ width: '100vw', minHeight: '100vh', display: 'flex' }}>
      <Header />

      <main style={{ margin: '88px 24px', width: '100%' }}>
        <Home />
      </main>
    </section >
  )
}

export default Layouts