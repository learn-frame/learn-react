import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSpinner,
  faTrashAlt,
  faSave,
  faCheckCircle,
  faExclamationCircle,
  faTimesCircle,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import Button from './components/Button/Button';
import Exchange from './components/Exchange/Exchange';
import Toast from './components/Toast/Toast';
import './App.css';

library.add(
  faSpinner,
  faTrashAlt,
  faSave,
  faCheckCircle,
  faExclamationCircle,
  faTimesCircle,
  faInfoCircle
);

class App extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    Toast.loading('hello', 300000);
    Toast.success('hello', 300000);
    Toast.warning('hello', 300000);
    Toast.error('hello', 300000);
    Toast.info('hello', 300000);
  }

  public render() {
    return (
      <div className="App">
        {/* 类型为 default */}
        <Button type="default">default</Button>

        {/* 类型为 primary */}
        <Button type="primary">primary</Button>

        {/* 类型为 danger */}
        <Button type="danger">danger</Button>

        {/* 内容为两字中文，中间用空格隔开 */}
        <Button type="default">流氓</Button>

        {/* 附加保存按钮 */}
        <Button type="primary" icon="save">
          save
        </Button>

        {/* 删除 */}
        <Button type="danger" icon="trash-alt">
          delete
        </Button>

        {/* 按钮不可用 */}
        <Button disabled>disabled</Button>

        {/* 当不传入属性时使用默认属性 */}
        <Button>no any props</Button>

        {/* loading 状态 */}
        <Button icon="save" loading>
          loading
        </Button>

        {/* Hooks 小实验 */}
        <Exchange />
      </div>
    );
  }
}

export default App;
