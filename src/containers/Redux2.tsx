import React from 'react';
import { connect } from 'react-redux';

interface IRedux2Props {
  AddAndSubtract: any;
  MultiplicationAndDivision: any;
}

class Redux2 extends React.Component<IRedux2Props, {}> {
  constructor(props: IRedux2Props) {
    super(props);
    this.state = {};
  }

  public render() {
    const { AddAndSubtract, MultiplicationAndDivision } = this.props;
    return (
      <div className='redux2'>
        <p>{AddAndSubtract.count_add}</p>
        <p>{MultiplicationAndDivision.count_multi}</p>
      </div>
    );
  }
}

export default connect(state => state)(Redux2);
