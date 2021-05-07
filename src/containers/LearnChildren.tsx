import { FC, Children, useEffect } from 'react'

const SomeComponent: FC = ({ children }) => {
  useEffect(() => {
    console.log(Children.map(children, (c) => [c, c]))
  }, [children])

  return <div>{children}</div>
}

const LearnChildren: FC = () => {
  return (
    <SomeComponent>
      <span>1</span>
      <span>2</span>
    </SomeComponent>
  )
}

export default LearnChildren
