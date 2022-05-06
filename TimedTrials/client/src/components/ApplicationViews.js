import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import TrialList from "./TrialList";
import TrialForm from "./TrialForm";

import UserTrialList from "./UserTrialList";
import UserTrialDelete from "./UserTrialDelete";
import WebsiteEditForm from "./WebsiteEditForm";
import WebsiteForm from "./WebsiteForm";
import WebsiteList from "./WebsiteList";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <UserTrialList /> : <Redirect to="/login" />}
        </Route>
        <Route path="/website" exact>
          {isLoggedIn ? <WebsiteList /> : <Redirect to="/login" />}
        </Route>
        <Route path="/website/new">
          {isLoggedIn ? <WebsiteForm /> : <Redirect to="/login" />}
        </Route>
        <Route path="/userTrial/delete/:id(\d+)" exact>
          {isLoggedIn ? <UserTrialDelete /> : <Redirect to="/login" />}
        </Route>
        <Route path="/website/edit/:id(\d+)" exact>
          {isLoggedIn ? <WebsiteEditForm /> : <Redirect to="/login" />}
        </Route>
        <Route path="/trial" exact>
          {isLoggedIn ? <TrialList /> : <Redirect to="/login" />}
        </Route>
        <Route path="/trial/new">
          {isLoggedIn ? <TrialForm /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </main>
  );
}
