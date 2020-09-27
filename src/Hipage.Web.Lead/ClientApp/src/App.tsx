import "antd/dist/antd.css";
import "./custom.css";

import * as React from "react";
import { Route, Redirect } from "react-router";
import Layout from "./layout/index";
import NotFound from "./pages/notFound";
import Paths from "./configs/path";
import { Switch } from "react-router-dom";

export default () => (
  <Layout>
    <Switch>
      {Paths.map((path, index) => {
        return (
          <Route
            exact
            path={path.path}
            component={path.component}
            key={index}
          />
        );
      })}
      <Redirect exact path="/" to={Paths[0].path} />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);
