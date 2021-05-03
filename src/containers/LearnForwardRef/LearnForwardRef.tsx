import { createRef, FC } from 'react'
import FancyButton from './FancyButton'

const LearnForwardRef: FC = () => {
  const ref = createRef()

  // 我们导入的 FancyButton 组件是高阶组件 LogProps
  // 尽管渲染结果将是一样的,
  // 但我们的 ref 将指向 LogProps 而不是内部的 FancyButton 组件
  // 这意味着我们不能调用例如 ref.current.focus() 这样的方法
  return <FancyButton ref={ref} />
}

export default LearnForwardRef
