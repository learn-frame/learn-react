import React, { Component } from 'react';
import { connect } from 'react-redux';
import RootAction from 'stores/rootAction';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from 'components/Button/Button';

interface AsyncReduxProps {
  bitCoins: GitHub.BitCoin[];
  fetchBitCoin: Function;
  loading: boolean;
  fetchStargazers: Function;
  stargazers: GitHub.User[];
}

class AsyncRedux extends Component<AsyncReduxProps, {}> {
  constructor(props: AsyncReduxProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const {
      bitCoins,
      loading,
      stargazers,
      fetchBitCoin,
      fetchStargazers,
    } = this.props;

    return (
      <div className='learn_redux'>
        <h1>异步 Redux</h1>
        <h2>比特币接口</h2>
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
            {bitCoins.map((row: GitHub.BitCoin) => (
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
        <h2>GitHub 接口</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Login</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Node Id</TableCell>
              <TableCell>Avatar URL</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Site Admin</TableCell>
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
          onClick={() =>
            fetchStargazers('YanceyOfficial', 'javascript-apis', {
              userId: '123456',
              userName: 'YanceyLeo',
            })
          }
        >
          Fetch GitHub
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    bitCoins: state.AsyncReducers.data,
    loading: state.AsyncReducers.loading,
    stargazers: state.StargazersReducers.data,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchBitCoin: () => dispatch(RootAction.asyncActions.fetchBitCoin()),
    fetchStargazers: (
      userName: string,
      repoName: string,
      params: GitHub.Params,
    ) =>
      dispatch(
        RootAction.starActions.fetchStargazers(userName, repoName, params),
      ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AsyncRedux);
