import { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { bitCoinsActions, fetchStargazers } from 'src/stores/rootAction'
import { RootState } from 'src/stores/rootReducer'
import { User } from 'src/stores/Stargazers/types'
import { BitCoin } from 'src/stores/BitCoins/types'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from 'src/components/Button/Button'

interface PropsFromState {
  bitCoins: BitCoin[]
  fetchBitCoins: Function
  bitCoinsLoading: boolean
  stargazersLoading: boolean
  fetchStargazers: Function
  users: User[]
}

interface PropsFromDispatch {
  fetchStargazers: typeof fetchStargazers
}

type Props = PropsFromState & PropsFromDispatch

class AsyncRedux extends Component<Props, {}> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  public render() {
    const {
      bitCoins,
      bitCoinsLoading,
      users,
      stargazersLoading,
      fetchBitCoins,
      fetchStargazers,
    } = this.props
    return (
      <div className='learnRedux'>
        <h1>异步 Redux</h1>
        <h2 className='h2'>比特币接口</h2>
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
            {bitCoins.map((bitCoin: BitCoin) => {
              const { code, symbol, rate, description, rate_float } = bitCoin
              return (
                <TableRow key={code}>
                  <TableCell component='th' scope='row'>
                    {code}
                  </TableCell>
                  <TableCell
                    dangerouslySetInnerHTML={{
                      __html: symbol,
                    }}
                  />
                  <TableCell>{rate}</TableCell>
                  <TableCell>{description}</TableCell>
                  <TableCell>{rate_float}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        <Button
          type='primary'
          loading={bitCoinsLoading}
          onClick={() => fetchBitCoins()}
        >
          Fetch BitCoin
        </Button>
        <h2 className='h2'>GitHub 接口</h2>
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
            {users.map((user: User) => {
              const { id, login, node_id, avatar_url, type, site_admin } = user
              return (
                <TableRow key={id}>
                  <TableCell>{login}</TableCell>
                  <TableCell>{id}</TableCell>
                  <TableCell>{node_id}</TableCell>
                  <TableCell>
                    <img
                      width='120'
                      height='120'
                      src={avatar_url}
                      alt={login}
                    />
                  </TableCell>
                  <TableCell>{type}</TableCell>
                  <TableCell>{site_admin.toString()}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        <Button
          type='primary'
          loading={stargazersLoading}
          onClick={fetchStargazers}
        >
          Fetch GitHub
        </Button>
      </div>
    )
  }
}

const mapStateToProps = ({
  BitCoinsReducers,
  StargazersReducers,
}: RootState) => ({
  bitCoins: BitCoinsReducers.bitCoins,
  bitCoinsLoading: BitCoinsReducers.loading,
  stargazersLoading: StargazersReducers.loading,
  users: StargazersReducers.users,
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchBitCoins: () => dispatch(bitCoinsActions.fetchBitCoins()),
    fetchStargazers: () => dispatch(fetchStargazers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncRedux)
