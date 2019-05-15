import React from 'react';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
} from 'react-router-dom';
import { Prompt } from 'react-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSpinner,
  faTrashAlt,
  faSave,
  faCheckCircle,
  faExclamationCircle,
  faTimesCircle,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

// import Toast from './components/Toast/Toast';
import Fragment from './components/Fragment/Fragment';
import MyPortal from './components/Portal/MyPortal';
import PropsState from './containers/PropsState';
import Ex from './containers/Ex';
import ButtonPage from './containers/ButtonPage';
import DynimaicRoute from './containers/DynimicRoute';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import './App.css';

library.add(
  faSpinner,
  faTrashAlt,
  faSave,
  faCheckCircle,
  faExclamationCircle,
  faTimesCircle,
  faInfoCircle,
);

interface IAppState {
  isLogin: boolean;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  public componentDidMount() {
    // Toast.loading('hello', 300000);
    // Toast.success('hello', 300000);
    // Toast.warning('hello', 300000);
    // Toast.error('hello', 300000);
    // Toast.info('hello', 300000);
  }

  public logout = () => {
    this.setState({
      isLogin: false,
    });
  };

  public render() {
    const { isLogin } = this.state;
    return (
      <Router>
        <div className='App'>
          <div className='route-list'>
            {/*  使用 getUserConfirmation 必须配合使用 Prompt 组件*/}
            {/* <Prompt message='在跳转到下一个路由前执行的回调' /> */}
            <Link to='/'>
              <Button variant='contained' color='primary'>
                首页
              </Button>
            </Link>
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
            <Link to='/not-found-path'>
              <Button variant='contained' color='secondary'>
                我是一个不存在的路由
              </Button>
            </Link>
          </div>

          {/* Route 组件通过下面两个来匹配路由 */}
          {/* window.location.pathname */}
          {/* this.props.location.pathname */}
          {/* 因为 404 页面没有匹配路径，所以它总会被渲染 */}
          {/* 所以一组 Route 组件外必须套一层 Switch */}

          <Switch>
            <Route path='/' exact />

            <Route path='/exchange' component={Ex} />
            <Route path='/portal' component={MyPortal} />
            <Route path='/fragment' component={Fragment} />
            <Route path='/button-list' component={ButtonPage} />
            <Route path='/props-state' component={PropsState} />
            <Route path='/p/:id' component={DynimaicRoute} />

            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
