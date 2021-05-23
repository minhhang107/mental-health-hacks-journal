import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import EntryAddPage from "./entry/Add/index";
import EntryPage from "./entry/index";

const Home = React.lazy(() => import("pages/Homepage/index"));
const Dashboard = React.lazy(() => import("pages/Dashboard/index"));
const UserLogin = React.lazy(() => import("pages/user/Login/index"));
const UserSignup = React.lazy(() => import("pages/user/Signup/index"));

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<h1>Loading</h1>}>
        <Switch>
          <Route path="/user/login" component={UserLogin} />
          <Route path="/user/signup" component={UserSignup} />
          <Route path="/user/dashboard" component={Dashboard} />

          <Route path="/entry/add">
            <EntryAddPage />
          </Route>

          <Route path="/entry">
            <EntryPage />
          </Route>

          <Route path="/" component={Home} exact />
          <Route path="/404" component={() => <h1>Page not found</h1>} />

          <Redirect to="/404" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
