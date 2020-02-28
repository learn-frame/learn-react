import React from "react";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MyPortal from "./components/Portal/MyPortal";
import Ex from "./containers/Ex";
import ButtonPage from "./containers/ButtonPage";
import SiteMap from "./containers/SiteMap";
import LearnRedux from "./containers/LearnRedux";
import AsyncRedux from "./containers/AsyncRedux";
import Hooks from "./containers/Hooks";
import NotFound from "./containers/NotFound";

class App extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {}

  public render() {
    return (
      <Router>
        <div className="App">
          <div className="route-list">
            {/*  使用 getUserConfirmation 必须配合使用 Prompt 组件*/}
            {/* <Prompt message='在跳转到下一个路由前执行的回调' /> */}
            <Link to="/demo">
              <Button variant="contained" color="primary">
                demo 列表
              </Button>
            </Link>
          </div>

          {/* Route 组件通过下面两个来匹配路由 */}
          {/* window.location.pathname */}
          {/* this.props.location.pathname */}
          {/* 因为 404 页面没有匹配路径，所以它总会被渲染 */}
          {/* 所以一组 Route 组件外必须套一层 Switch */}
          <Switch>
            <Route path="/" exact />
            <Route path="/exchange" component={Ex} />
            <Route path="/portal" component={MyPortal} />
            <Route path="/button-list" component={ButtonPage} />
            <Route path="/site-map" component={SiteMap} />
            <Route path="/learn-redux" component={LearnRedux} />
            <Route path="/async-redux" component={AsyncRedux} />
            <Route path="/hooks" component={Hooks} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
