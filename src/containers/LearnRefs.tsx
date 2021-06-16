import { Component, createRef, ChangeEvent } from 'react'
import Button from 'src/components/Button/Button'

interface State {
  value: string
  showInput: boolean
}

class LearnRef extends Component<{}, State> {
  // ref 指向某个具体的 HTML 元素时，this.inputRef.current 就指向该元素
  private inputRef = createRef<HTMLInputElement>()

  // ref 指向某个 class 组件时，this.inputRef.current 就指向该组件的实例
  private classComponentRef = createRef<Button>()

  // ref 不能指向函数组件，因为他们没有实例。下面这个例子中，ref 指向了一个用 Hooks 编写的组件，控制台直接报 warning
  private functionComponentRef = createRef<HTMLDivElement>()

  constructor(props: {}) {
    super(props)

    this.state = {
      value: '',
      showInput: false,
    }
  }

  public handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      value: e.target.value,
    })
  }

  public clickButton() {
    this.setState(
      {
        showInput: !this.state.showInput,
      },
      () => {
        if (this.state.showInput) {
          // ref 的经典用法: "创建"一个文本框并自动获取焦点
          this.inputRef.current?.focus()
        }
      },
    )
  }

  public clickMyButton() {
    console.log(this.classComponentRef)
  }

  public render() {
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
        <Button onClick={() => this.clickButton()}>
          点我{showInput ? '隐藏' : '显示'}文本框
          {!showInput ? '并自动对焦' : ''}
        </Button>
        <Button
          ref={this.classComponentRef}
          onClick={() => this.clickMyButton()}
        >
          类组件的 ref 指向实例
        </Button>

        {/* 函数式组件不要用 ref */}
        {/* <Exchange ref={this.functionComponentRef} /> */}
      </div>
    )
  }
}

// 可以在函数内部使用 ref 属性，只要它指向一个 DOM 元素或使用 class 声明的组件即可
export function MyFunctionComponent() {
  const textInput = createRef<HTMLInputElement>()

  function handleClick() {
    textInput.current?.focus()
  }

  return (
    <div>
      <input type='text' ref={textInput} />
      <input type='button' value='Focus the text input' onClick={handleClick} />
    </div>
  )
}

export default LearnRef
