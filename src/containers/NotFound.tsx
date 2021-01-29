import { Component } from 'react'

class NotFound extends Component<{}, {}> {
  constructor(props: {}) {
    super(props)
    this.state = {}
  }

  public render() {
    return <h1 className='not-found'>404 Not Found</h1>
  }
}

export default NotFound
