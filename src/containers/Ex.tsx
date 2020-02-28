import React from 'react'
import MyCanvas from './MyCanvas/MyCanvas'

class Ex extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <>
        <h1>Exchange</h1>
        <MyCanvas />
      </>
    )
  }
}

export default Ex
