import { forwardRef, FC } from 'react'

export function logProps(WrappedComponent: any) {
  const LogProps: FC<any> = ({ forwardedRef, ...rest }) => {
    // 在开发环境中可以为该组件提供一个更有用的显示名
    // forwardRef.displayName = 'xxx'

    // 将自定义的 prop 属性 "forwardedRef" 定义为 ref
    return <WrappedComponent ref={forwardedRef} {...rest} />
  }

  // 注意 React.forwardRef 回调的第二个参数 "ref".
  // 我们可以将其作为常规 prop 属性传递给 LogProps, 例如 "forwardedRef"
  // 然后它就可以被挂载到被 LogProps 包裹的子组件上.
  return forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />
  })
}
