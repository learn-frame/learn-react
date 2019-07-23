import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class DemoEntrance extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
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
        <Link to='/fragment'>
          <Button variant='contained' color='primary'>
            React.Fragment
          </Button>
        </Link>
        <Link to='/button-list'>
          <Button variant='contained' color='primary'>
            button list
          </Button>
        </Link>
        {/* NavLink 是 Link 的一个特殊变种 */}
        {/* 它会给激活的 a 标签添加如下属性和属性值 */}
        {/* aria-current="page" class="active" */}
        <NavLink to='/props-state'>
          <Button variant='contained' color='primary'>
            props state
          </Button>
        </NavLink>
        <Link to='/p/5ca5c61ad397224556c4893f'>
          <Button variant='outlined' color='secondary'>
            动态路由 - 文章1
          </Button>
        </Link>
        <Link to='/p/5ca4670bd397224556c4893d'>
          <Button variant='outlined' color='secondary'>
            动态路由 - 文章2
          </Button>
        </Link>
        <Link to='/css-in-js'>
          <Button variant='outlined' color='secondary'>
            CSS IN JS
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
    );
  }
}

export default DemoEntrance;
