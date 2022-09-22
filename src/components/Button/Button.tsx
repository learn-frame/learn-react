import {
  Component,
  Children,
  ReactNode,
  MouseEvent,
  ReactElement,
  ReactFragment,
  ReactPortal,
  JSXElementConstructor
} from 'react'
import classnames from 'classnames'
import './Button.css'

const needSpace = (
  children:
    | string
    | number
    | boolean
    | ReactElement<unknown, string | JSXElementConstructor<unknown>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined
) => {
  if (typeof children === 'string') {
    return /^[\u4E00-\u9FA5\uF900-\uFA2D]+$/.test(children) &&
      children.length === 2
      ? children.split('').join(' ')
      : children
  }

  return children
}

interface IButtonProps {
  type?: string
  disabled?: boolean
  loading?: boolean
  icon?: ReactNode
  className?: string
  children: ReactNode
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
}

interface IButtonState {
  loading: boolean
  disabled: boolean
}

class Button extends Component<IButtonProps, IButtonState> {
  static defaultProps: {
    type: string
    disabled: boolean
    loading: boolean
    icon: null
    className: undefined
  }
  constructor(props: IButtonProps) {
    super(props)
    this.state = {
      loading: false,
      disabled: false
    }
  }

  private handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    const { loading, disabled } = this.state
    const { onClick } = this.props
    if (loading || disabled) {
      return false
    } else {
      if (onClick) {
        onClick(e)
      }
    }
  }

  public render() {
    const loading = this.props.loading
    const icon = loading ? 'spinner' : this.props.icon
    const iconNode = icon ? <span>icon</span> : null
    const children = this.props.children
    const type = this.props.type
    const disabled = this.props.disabled
    const kids = Children.map(children, (_children) => needSpace(_children))
    return (
      <button
        className={classnames(
          `${loading || disabled ? 'disabled' : type} button`,
          this.props.className
        )}
        disabled={loading || disabled}
        onClick={(e) => this.handleClick(e)}
      >
        {kids}
        {iconNode}
      </button>
    )
  }
}

Button.defaultProps = {
  type: 'default',
  disabled: false,
  loading: false,
  icon: null,
  className: undefined
}

export default Button
