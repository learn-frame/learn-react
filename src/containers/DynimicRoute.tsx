import React from 'react';

interface IDynimaicRouteProps {
  match: any;
  location: any;
  history: any;
}

class DynimaicRoute extends React.Component<IDynimaicRouteProps, {}> {
  constructor(props: IDynimaicRouteProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const { match, location, history } = this.props;
    console.log(location.key)
    return <h2 className='dynimaic_route'>当前页面 id: {match.params.id}</h2>;
  }
}

export default DynimaicRoute;
