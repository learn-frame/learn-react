import { FC, useContext } from 'react'
import { ThemeContext } from 'src'

const LearnContext: FC = () => {
  const ThemeConsumer = ThemeContext.Consumer
  const context = useContext(ThemeContext)
  return (
    <ThemeConsumer>
      {(value) => {
        return (
          <>
            <div>ThemeConsumer: {value}</div>
            <div>context: {context}</div>
          </>
        )
      }}
    </ThemeConsumer>
  )
}

export default LearnContext
