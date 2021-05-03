import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Aside from 'src/components/Aside/Aside'
import routers from 'src/router'
import NotFound from 'src/containers/NotFound'

class App extends Component<{}, {}> {
  constructor(props: {}) {
    super(props)
    this.state = {}
  }

  private visibilityChange() {
    document.title = document.visibilityState === 'visible' ? '我又粗线了...' : '好像消失了...'
  }

  public componentDidMount() {
    window.addEventListener('visibilitychange', this.visibilityChange)
  }

  public componentWillUnmount() {
    window.removeEventListener('visibilitychange', this.visibilityChange)
  }

  public render() {
    return (
      <div className='App'>
        <Aside />
        <main className='main'>
          <Switch>
            {routers.map((router) => (
              <Route
                key={router.path}
                exact
                path={router.path}
                component={router.component}
              />
            ))}
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
