import React from 'react';
import { connect } from 'react-redux';

interface IRedux2Props {
  count: number;
}

class Redux2 extends React.Component<IRedux2Props, {}> {
  constructor(props: IRedux2Props) {
    super(props);
    this.state = {};
  }

  public render() {
    const { count } = this.props;
    return (
      <div className='redux2'>
        <p>{count}</p>
      </div>
    );
  }
}

export default connect(state => state)(Redux2);
