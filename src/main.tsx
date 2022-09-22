import { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { SWRConfig } from 'swr'
import Loading from 'src/components/Loading'
import Layout from './layouts'
import './index.css'

if (process.env.NODE_ENV !== 'production') {
  import('vconsole').then((m) => new m.default())
}

const $rootEl = document.getElementById('root') as HTMLElement

ReactDOM.createRoot($rootEl).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <RecoilRoot>
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json())
          }}
        >
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </SWRConfig>
      </RecoilRoot>
    </Suspense>
  </StrictMode>
)
