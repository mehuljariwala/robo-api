import React from "react";
import AsyncComponent from "../Routing/AsyncComponent";

import { Route, Switch } from "react-router-dom";
class Routes extends React.Component {
  render() {
    const AsyncMainComponent = AsyncComponent(() =>
      import("../Containers/ProjectsListHome/ProjectsListHome")
    );
    const AsyncRobotsComponent = AsyncComponent(() =>
      import("../Containers/RobotsHome/RobotsHome")
    );
    const AsyncIntroduction = AsyncComponent(() =>
      import("../Containers/Introduction/Introduction")
    );
    return (
      <Switch>
        <Route exact path="/" component={AsyncRobotsComponent} />
        <Route exact path="/home" component={AsyncMainComponent} />
        <Route path="/robots" component={AsyncRobotsComponent} />
        <Route path="/intro" component={AsyncIntroduction} />
      </Switch>
    );
  }
}
export default Routes;
