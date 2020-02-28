import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

class SiteMap extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <>
        <Link
          to={{
            pathname: '/portal',
            search: '?sort=name',
            hash: '#the-hash',
            state: { showModal: true },
          }}
        >
          <Button variant='contained' color='primary'>
            React.createPortal
          </Button>
        </Link>
        <Link to='/exchange'>
          <Button variant='contained' color='primary'>
            汇率计算器页面
          </Button>
        </Link>
        <Link to='/button-list'>
          <Button variant='contained' color='primary'>
            button list
          </Button>
        </Link>
        <Link to='/learn-redux'>
          <Button variant='contained' color='primary'>
            Redux
          </Button>
        </Link>
        <Link to='/async-redux'>
          <Button variant='contained' color='primary'>
            Async Redux
          </Button>
        </Link>
        <Link to='/hooks'>
          <Button variant='outlined' color='secondary'>
            Hooks
          </Button>
        </Link>
        <Link to='/not-found-path'>
          <Button variant='contained' color='secondary'>
            我是一个不存在的路由
          </Button>
        </Link>
      </>
    )
  }
}

export default SiteMap
