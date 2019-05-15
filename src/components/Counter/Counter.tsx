import React from 'react';
import Button from '../Button/Button';

interface ICounterProps {
  counterName?: string;
  initValue: number;
}

interface ICounterState {
  value: number;
}

class PropsAndStates extends React.Component<ICounterProps, ICounterState> {
  static defaultProps: {};
  constructor(props: ICounterProps) {
    super(props);
    this.state = {
      value: this.props.initValue,
    };
  }

  // 当值不发生变化时阻止更新组件
  public shouldComponentUpdate(
    nextProps: ICounterProps,
    nextState: ICounterState,
  ) {
    return nextState.value !== this.state.value;
  }

  public handleIncreaseChange = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  public handleDecreaseChange = () => {
    this.setState({
      value: this.state.value - 1,
    });
  };

  public handleRecoveryChange = () => {
    this.setState({
      value: this.props.initValue,
    });
  };

  public render() {
    const { counterName } = this.props;
    const { value } = this.state;
    return (
      <div className='counter_wrapper'>
        <Button type='primary' onClick={this.handleIncreaseChange}>
          +
        </Button>
        <Button type='danger' onClick={this.handleDecreaseChange}>
          -
        </Button>
        <span>
          {counterName}: {value}
        </span>
        <Button type='default' onClick={this.handleRecoveryChange}>
          重新计数
        </Button>
      </div>
    );
  }
}

PropsAndStates.defaultProps = {
  counterName: '篮球',
};

export default PropsAndStates;
