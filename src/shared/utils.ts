export const parseChatGPTData = (rawData: string) => {
    const groups = rawData.match(/^([\s\S]*?)```([\s\S]*?)```([\s\S]*?)$/) || []

    const frontText = groups[1] || ''
    const codeBlock = groups[2] || ''
    const backText = groups[3] || ''

    const frontHtml = frontText.replace(/\n/g, '<br />')
    const backHtml = backText.replace(/\n/g, '<br />')

    return { frontHtml, codeBlock, backHtml }
}