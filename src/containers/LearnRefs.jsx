import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

class LearnRef extends Component {
  constructor(props) {
    super(props)

    // ref 指向某个具体的 HTML 元素时，this.inputRef.current 就指向该元素
    this.inputRef = React.createRef()
    // ref 指向某个 class 组件时，this.inputRef.current 就指向该组件的实例
    this.classComponentRef = React.createRef()
    // ref 不能指向函数组件，因为他们没有实例。下面这个例子中，ref 指向了一个用 Hooks 编写的组件，控制台直接报 warning
    this.functionComponentRef = React.createRef()

    // 可以通过回调的方式设置 ref
    this.textInput = null

    this.setTextInputRef = element => {
      this.textInput = element
    }

    this.focusTextInput = () => {
      if (this.textInput) this.textInput.focus()
    }

    this.state = {
      value: '',
      showInput: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.clickButton = this.clickButton.bind(this)
    this.clickMyButton = this.clickMyButton.bind(this)
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    })
  }

  clickButton() {
    this.setState(
      {
        showInput: !this.state.showInput,
      },
      () => {
        if (this.state.showInput) {
          // ref 的经典用法: "创建"一个文本框并自动获取焦点
          this.inputRef.current.focus()
        }
      },
    )
  }

  clickMyButton() {
    console.log(this.classComponentRef.current)
  }

  componentDidMount() {
    this.focusTextInput()
  }

  render() {
    const { value, showInput } = this.state
    return (
      <div className='learn_ref'>
        {showInput ? (
          <input
            value={value}
            onChange={this.handleChange}
            ref={this.inputRef}
          />
        ) : null}
        <Button
          style={{ display: 'block', margin: '20px 0' }}
          variant='contained'
          color='primary'
          onClick={this.clickButton}
        >
          点我{showInput ? '隐藏' : '显示'}文本框
          {!showInput ? '并自动对焦' : ''}
        </Button>
        <Button ref={this.classComponentRef} onClick={this.clickMyButton}>
          类组件的 ref 指向实例
        </Button>

        {/* 函数式组件不要用 ref */}
        {/* <Exchange ref={this.functionComponentRef} /> */}

        <input
          type='text'
          ref={this.setTextInputRef}
          placeholder='组件挂载后，文本框自动获得焦点'
        />
      </div>
    )
  }
}

// 可以在函数内部使用 ref 属性，只要它指向一个 DOM 元素或使用 class 声明的组件即可
// eslint-disable-next-line no-unused-vars
function MyFunctionComponent(props) {
  const textInput = React.createRef()

  function handleClick() {
    textInput.current.focus()
  }

  return (
    <div>
      <input type='text' ref={textInput} />

      <input type='button' value='Focus the text input' onClick={handleClick} />
    </div>
  )
}

export default LearnRef
