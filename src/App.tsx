import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Aside from './components/Aside/Aside'
import routers from './router'
import NotFound from './containers/NotFound'

class App extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props)
    this.state = {}
  }

  public componentDidMount() {}

  public render() {
    return (
      <Router>
        <div className='App'>
          <Aside />
          <main className='main'>
            <Switch>
              <Suspense fallback={<div>Loading...</div>}>
                {routers.map(router => (
                  <Route
                    key={router.path}
                    exact
                    path={router.path}
                    component={lazy(() =>
                      import(`./containers/${router.component}`),
                    )}
                  />
                ))}
              </Suspense>
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}

export default App
