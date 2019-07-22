import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddAndSubtractAction from 'stores/AddAndSubtract/actions';
import MultiplicationAndDivisionAction from 'stores/MultiplicationAndDivision/actions';
import AsyncAction from 'stores/Async/actions';
import StargazersAction from 'stores/Stargazers/actions';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from 'components/Button/Button';

interface ILearnReduxProps {
  count_add: number;
  count_multi: number;
  bitCoins: any[];
  increase: Function;
  decrease: Function;
  increaseAsync: Function;
  multiplicate: Function;
  divide: Function;
  fetchBitCoin: Function;
  loading: boolean;
  fetchStargazers: Function;
  stargazers: GitHub.User[];
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
      bitCoins,
      increaseAsync,
      multiplicate,
      divide,
      fetchBitCoin,
      loading,
      fetchStargazers,
      stargazers,
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
              <TableCell>Symbol</TableCell>
              <TableCell>Rate</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Rate Float</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bitCoins.map((row: any) => (
              <TableRow key={row.code}>
                <TableCell component='th' scope='row'>
                  {row.code}
                </TableCell>
                <TableCell
                  dangerouslySetInnerHTML={{
                    __html: row.symbol,
                  }}
                />
                <TableCell>{row.rate}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.rate_float}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button type='primary' loading={loading} onClick={() => fetchBitCoin()}>
          Fetch BitCoin
        </Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>login</TableCell>
              <TableCell>id</TableCell>
              <TableCell>node_id</TableCell>
              <TableCell>avatar_url</TableCell>
              <TableCell>type</TableCell>
              <TableCell>site_admin</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stargazers.map((row: GitHub.User) => (
              <TableRow key={row.id}>
                <TableCell>{row.login}</TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.node_id}</TableCell>
                <TableCell>
                  <img
                    width='120'
                    height='120'
                    src={row.avatar_url}
                    alt={row.login}
                  />
                </TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.site_admin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button
          type='primary'
          onClick={() => fetchStargazers('YanceyOfficial', 'javascript-apis')}
        >
          Fetch GitHub
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    count_add: state.AddAndSubtractReducers.count_add,
    count_multi: state.MultiplicationAndDivisionReducers.count_multi,
    bitCoins: state.AsyncReducers.data,
    loading: state.AsyncReducers.loading,
    stargazers: state.StargazersReducers.data,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increase: () => dispatch(AddAndSubtractAction.increase()),
    decrease: () => dispatch(AddAndSubtractAction.decrease()),
    increaseAsync: () => dispatch(AddAndSubtractAction.increaseAsync()),
    multiplicate: () =>
      dispatch(MultiplicationAndDivisionAction.multiplicate()),
    divide: () => dispatch(MultiplicationAndDivisionAction.divide()),
    fetchBitCoin: () => dispatch(AsyncAction.fetchBitCoin()),
    fetchStargazers: (userName: string, repoName: string, params: any) =>
      dispatch(StargazersAction.fetchStargazers(userName, repoName, params)),
  };
};

// connect 接收四个参数，分别是
// mapStateToProps | mapDispatchToProps | mergeProps | options
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LearnRedux);
