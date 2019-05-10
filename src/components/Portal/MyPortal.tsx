import React from 'react';
import ReactDom from 'react-dom';
import Button from '../Button/Button';
import Modal from './Modal';

export interface IPortalsState {
  showModal: boolean;
}

class MyPortal extends React.Component<{}, IPortalsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  public openModal = () => {
    this.setState({
      showModal: true,
    });
  };

  public closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  public render() {
    const { showModal } = this.state;
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
    );
  }
}

export default MyPortal;
