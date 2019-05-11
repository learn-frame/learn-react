import React from 'react';
import Button from '../components/Button/Button';

class ButtonPage extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div className='button_list'>
        {/* 类型为 default */}
        <Button type='default'>default</Button>

        {/* 类型为 primary */}
        <Button type='primary'>primary</Button>

        {/* 类型为 danger */}
        <Button type='danger'>danger</Button>

        {/* 内容为两字中文，中间用空格隔开 */}
        <Button type='default'>流氓</Button>

        {/* 附加保存按钮 */}
        <Button type='primary' icon='save'>
          save
        </Button>

        {/* 删除 */}
        <Button type='danger' icon='trash-alt'>
          delete
        </Button>

        {/* 按钮不可用 */}
        <Button disabled>disabled</Button>

        {/* 当不传入属性时使用默认属性 */}
        <Button>no any props</Button>

        {/* loading 状态 */}
        <Button icon='save' loading>
          loading
        </Button>
      </div>
    );
  }
}

export default ButtonPage;
