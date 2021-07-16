import { Component } from 'react'

export default class SomeComponent extends Component {
  state = { count: 0 }

  handleClick = async () => {
    this.increaseCount()
    this.increaseCount()
    await window.fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    this.increaseCount()
    this.increaseCount()
    setTimeout(() => {
      console.log('setTimeout:', this.state.count)
    }, 0)
  }

  increaseCount = () => {
    const { count } = this.state
    this.setState({
      count: count + 1,
    })
  }

  render() {
    return <button onClick={this.handleClick}>Click</button>
  }
}
