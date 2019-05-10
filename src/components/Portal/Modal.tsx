import React from 'react';
import Button from '@material-ui/core/Button';
import classnames from 'classnames';
import styles from './Modal.module.scss';

interface IModalProps {
  showModal: boolean;
  closeModal: () => void;
}

class Modal extends React.Component<IModalProps, {}> {
  constructor(props: IModalProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const { showModal, closeModal } = this.props;

    // 简单写一个模态框组件，不太合理，凑合着看
    const modal = (
      <div className={styles.modal_wrapper}>
        <div className={styles.mask} />
        <div className={styles.modal_container}>
          <p className={styles.title}>WeAreX</p>
          <p className={styles.content}>
            もう独りで歩けない 時代の風が強すぎて Ah 傷きつくことなんて
            慣れたはずだけど今は。
          </p>
          <Button variant='contained' color='primary' className={styles.btn}>
            OK
          </Button>
          <Button
            variant='contained'
            className={classnames(styles.btn, styles.cancel_btn)}
            onClick={closeModal}
          >
            Close
          </Button>
        </div>
      </div>
    );
    return <>{showModal ? modal : null}</>;
  }
}

export default Modal;
