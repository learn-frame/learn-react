import React from 'react';
import Button from '../Button/Button';

interface IPropsAndStatesProps {
  counterName?: string;
  initValue: number;
}

interface IPropsAndStatesStates {
  value: number;
}

class PropsAndStates extends React.Component<
  IPropsAndStatesProps,
  IPropsAndStatesStates
> {
  static defaultProps: {};
  constructor(props: IPropsAndStatesProps) {
    super(props);
    this.state = {
      value: this.props.initValue,
    };
  }

  // 使用 class fileds 的方式可以防止 this 绑定丢失的问题
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
