import { FC, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.min.css'

interface Props {
  language: string
  code: string
  isInline?: boolean
}

interface CodeProps {
  isInline?: boolean
}

const Pre = styled('pre')(() => ({
  marginBottom: '24px!important',
  borderRadius: 8
}))

const StyledCode = styled('code')<CodeProps>(({ isInline }) =>
  isInline
    ? {
        display: 'inline-block',
        marginBottom: 8,
        padding: '1px 4px!important'
      }
    : {}
)

const PrismCode: FC<Props> = ({ language, code, isInline }) => {
  const Code = () => (
    <StyledCode className={`language-${language}`} isInline={isInline}>
      {code}
    </StyledCode>
  )

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return isInline ? (
    <Code />
  ) : (
    <Pre>
      <Code />
    </Pre>
  )
}

export default PrismCode
