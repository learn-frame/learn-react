import React from 'react';
import Button from '@material-ui/core/Button';

class Login extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div>
        <h1 className='login'>请登录</h1>
        <Button variant='contained' color='primary'>
          点我登录
        </Button>
      </div>
    );
  }
}

export default Login;
