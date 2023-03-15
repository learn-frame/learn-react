import { FC } from 'react'
import { styled } from '@mui/material/styles'
import PrismCode from 'src/components/PrismCode'
import { parseChatGPTData } from 'src/shared/utils'
import data from './data.json'

const TextBlock = styled('p')(() => ({
    marginBottom: 48,
  }))

const ChatGPT: FC = () => {
  const { frontHtml, codeBlock, backHtml } =
    parseChatGPTData(data.choices[0].message.content) || {}

  return (
    <section>
      {frontHtml && <TextBlock dangerouslySetInnerHTML={{ __html: frontHtml }}></TextBlock>}
      {codeBlock && <PrismCode language="rust" code={codeBlock}></PrismCode>}
      {backHtml && <TextBlock dangerouslySetInnerHTML={{ __html: backHtml }}></TextBlock>}
    </section>
  )
}

export default ChatGPT
