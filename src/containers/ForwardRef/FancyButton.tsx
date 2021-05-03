import { Component } from 'react'
import { logProps } from './logProps'

class FancyButton extends Component {
  focus() {
    // ...
  }

  render() {
    return <button>按钮</button>
  }
}

console.log(logProps(FancyButton))

// 我们导出 LogProps，而不是 FancyButton。
// 虽然它也会渲染一个 FancyButton。
export default logProps(FancyButton)
