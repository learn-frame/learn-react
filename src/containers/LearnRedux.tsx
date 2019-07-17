import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';
import AddAndSubtractReducersAction from '../stores/AddAndSubtract/actions';
import MultiplicationAndDivisionReducersAction from '../stores/MultiplicationAndDivision/actions';
import AsyncAction from '../stores/Async/actions';
import Button from '../components/Button/Button';

interface ILearnReduxProps {
  count_add: number;
  count_multi: number;
  data: any[];
  increase: Function;
  decrease: Function;
  increaseAsync: Function;
  multiplicate: Function;
  divide: Function;
  fetchBitCoin: Function;
  loading: boolean;
}

class LearnRedux extends Component<ILearnReduxProps, {}> {
  constructor(props: ILearnReduxProps) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    const {
      count_add,
      count_multi,
      increase,
      decrease,
      data,
      increaseAsync,
      multiplicate,
      divide,
      fetchBitCoin,
      loading,
    } = this.props;
    return (
      <div className='learn_redux'>
        <h1>Learn Redux</h1>
        <h2>加减</h2>
        <p>{count_add}</p>
        <Button type='primary' onClick={() => increase()}>
          Increase
        </Button>
        <Button type='danger' onClick={() => decrease()}>
          Decrease
        </Button>
        <Button onClick={() => increaseAsync()}>Increase Async</Button>
        <h2>乘除</h2>
        <p>{count_multi}</p>
        <Button type='primary' onClick={() => multiplicate()}>
          Multiplicate
        </Button>
        <Button type='danger' onClick={() => divide()}>
          Divide
        </Button>
        <h2>请求接口</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Code</TableCell>
              <TableCell align='right'>Symbol</TableCell>
              <TableCell align='right'>Rate</TableCell>
              <TableCell align='right'>Description</TableCell>
              <TableCell align='right'>Rate Float</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
              <TableRow key={row.code}>
                <TableCell component='th' scope='row'>
                  {row.code}
                </TableCell>
                <TableCell
                  align='right'
                  dangerouslySetInnerHTML={{
                    __html: row.symbol,
                  }}
                />
                <TableCell align='right'>{row.rate}</TableCell>
                <TableCell align='right'>{row.description}</TableCell>
                <TableCell align='right'>{row.rate_float}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button type='primary' loading={loading} onClick={() => fetchBitCoin()}>
          Fetch
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    count_add: state.AddAndSubtractReducers.count_add,
    count_multi: state.MultiplicationAndDivisionReducers.count_multi,
    data: state.AsyncReducers.data,
    loading: state.AsyncReducers.loading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increase: () => dispatch(AddAndSubtractReducersAction.increase()),
    decrease: () => dispatch(AddAndSubtractReducersAction.decrease()),
    increaseAsync: () => dispatch(AddAndSubtractReducersAction.increaseAsync()),
    multiplicate: () =>
      dispatch(MultiplicationAndDivisionReducersAction.multiplicate()),
    divide: () => dispatch(MultiplicationAndDivisionReducersAction.divide()),
    fetchBitCoin: () => dispatch(AsyncAction.fetchBitCoin()),
  };
};

// connect 接收四个参数，分别是
// mapStateToProps | mapDispatchToProps | mergeProps | options
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LearnRedux);
