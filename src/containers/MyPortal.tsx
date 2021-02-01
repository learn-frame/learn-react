import { Component } from 'react'
import ReactDom from 'react-dom'
import Button from '../components/Button/Button'
import Modal from '../components/Portal/Modal'

export interface PortalsState {
  showModal: boolean
}

export interface PortalsProps {
  location: any
  history: any
}

class MyPortal extends Component<PortalsProps, PortalsState> {
  constructor(props: PortalsProps) {
    super(props)
    this.state = {
      showModal: false,
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  public openModal = () => {
    this.setState({
      showModal: true,
    })
  }

  public closeModal = () => {
    this.setState({
      showModal: false,
    })
  }

  public render() {
    const { showModal } = this.state
    const { location, history } = this.props
    console.log(location)
    console.log(history)
    return (
      <div>
        <Button type='danger' onClick={this.openModal}>
          点我打开模态框
        </Button>
        {ReactDom.createPortal(
          <Modal showModal={showModal} closeModal={this.closeModal} />,
          document.getElementById('root')!,
        )}
      </div>
    )
  }
}

export default MyPortal
