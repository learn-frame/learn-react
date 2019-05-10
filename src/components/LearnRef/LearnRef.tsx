import React from 'react';
import Button from '@material-ui/core/Button';

// 妈的
// 用 TS 搞 Ref 简直蛋疼

interface ILearnRefStates {
  value: string;
  showInput: boolean;
}

class LearnRef extends React.Component<{}, ILearnRefStates> {
  private inputRef = React.createRef<HTMLInputElement>();
  private componentRef = React.createRef<any>();

  constructor(props: {}) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      value: '',
      showInput: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.clickButton = this.clickButton.bind(this);
  }

  public handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      value: e.target.value,
    });
  }

  public clickButton() {
    this.setState(
      {
        showInput: !this.state.showInput,
      },
      () => {
        this.inputRef.current!.focus();
      },
    );
  }

  public render() {
    const { value, showInput } = this.state;
    return (
      <div className='learn_ref'>
        {showInput ? (
          <input
            value={value}
            onChange={this.handleChange}
            ref={this.inputRef}
          />
        ) : null}
        <Button variant='contained' color='primary' onClick={this.clickButton}>
          点我{showInput ? '隐藏' : '显示'}文本框
        </Button>
      </div>
    );
  }
}

export default LearnRef;
