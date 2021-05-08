import { FC, Children, useEffect } from 'react'

const SomeComponent: FC = ({ children }) => {
  useEffect(() => {
    console.log(children)
    console.log(Children.map(children, (c) => '123'))
  }, [children])

  return <div>{children}</div>
}

// Children 可以是 ReactNode, 数字, 字符串, Set, 数组
// undefined 和 boolean 类型被转成了 null
// 但不能是 Map, Functions, 普通对象, 其中如果是「普通对象」, 直接崩溃, 前两个会给予控制台警告
const LearnChildren: FC = () => {
  return (
    <SomeComponent>
      <span>
        <span>1-1</span>
        <span>1-2</span>
      </span>
      <span>2</span>
    </SomeComponent>
  )
}

export default LearnChildren
