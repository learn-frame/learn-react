import { MouseEventHandler, Component, Children } from 'react'
import classnames from 'classnames'
import './Button.css'

const needSpace = (child: any) =>
  /^[\u4E00-\u9FA5\uF900-\uFA2D]+$/.test(child) && child.length === 2
    ? child.split('').join(' ')
    : child

interface IButtonProps {
  type?: string
  disabled?: boolean
  loading?: boolean
  icon?: any
  className?: string,
  onClick?: MouseEventHandler<any>
}

class Button extends Component<IButtonProps, any> {
  static defaultProps: {
    type: string
    disabled: boolean
    loading: boolean
    icon: null
    className: undefined
  }
  constructor(props: IButtonProps) {
    super(props)
    this.state = {}
  }

  public componentDidMount() {
    // todo
  }

  public handleClick = (e: any) => {
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
    const kids = Children.map(children, (child) => needSpace(child))
    return (
      <button
        className={classnames(`${loading || disabled ? 'disabled' : type} button`, this.props.className)}
        disabled={loading || disabled}
        onClick={this.handleClick}
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
