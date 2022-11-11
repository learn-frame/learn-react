import { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { SWRConfig } from 'swr'
import { SnackbarProvider } from 'notistack'
import Loading from 'src/components/Loading'
import SnackbarUtils, { SnackbarUtilsConfigurator } from 'src/components/Toast'
import { GET } from 'src/shared/request'
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
        <SnackbarProvider maxSnack={3}>
          <SWRConfig
            value={{
              revalidateOnFocus: false,
              fetcher: function <T>(url: string, params?: T) {
                return GET(url, params)
              },
              onError(err) {
                SnackbarUtils.error(err.message)
              }
            }}
          >
            <BrowserRouter>
              <SnackbarUtilsConfigurator />
              <Layout />
            </BrowserRouter>
          </SWRConfig>
        </SnackbarProvider>
      </RecoilRoot>
    </Suspense>
  </StrictMode>
)
