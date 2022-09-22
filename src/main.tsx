import { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { SWRConfig } from 'swr'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import Loading from 'src/components/Loading'
import Layouts from './layouts'
import './index.css'

if (process.env.NODE_ENV !== 'production') {
  import('vconsole').then((m) => new m.default())
}

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
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
            <ThemeProvider theme={darkTheme}>
              <CssBaseline />
              <Layouts />
            </ThemeProvider>
          </BrowserRouter>
        </SWRConfig>
      </RecoilRoot>
    </Suspense>
  </StrictMode>
)
