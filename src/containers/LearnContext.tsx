import { FC, useContext } from 'react'
import { ThemeContext } from 'src'

const LearnContext: FC = () => {
  // 可以通过传统的 Consumer 来订阅 context
  const ThemeConsumer = ThemeContext.Consumer

  // 也可以用 Hooks
  const context = useContext(ThemeContext)

  console.log(ThemeContext)
  
  return (
    <ThemeConsumer>
      {(value) => {
        return (
          <>
            <div>uses Consumer component: {value}</div>
            <div>uses useContext hooks: {context}</div>
          </>
        )
      }}
    </ThemeConsumer>
  )
}

export default LearnContext
