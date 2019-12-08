import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import './Toast.css'

interface INoticeProps {
  type: string
  content: string
}

const iconList: { [key: string]: IconProp } = {
  success: 'check-circle',
  loading: 'spinner',
  warning: 'exclamation-circle',
  error: 'times-circle',
  info: 'info-circle',
}

class Notice extends React.Component<INoticeProps, {}> {
  render() {
    const { type, content } = this.props
    return (
      <div className={`toast-notice ${type}`}>
        <FontAwesomeIcon icon={iconList[type]} />
        <span>{content}</span>
      </div>
    )
  }
}

export default Notice
