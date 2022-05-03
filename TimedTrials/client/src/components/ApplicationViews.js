import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import TrialList from "./TrialList";
import TrialForm from "./TrialForm";
import TrialDelete from "./TrialDelete";
import UserTrialList from "./UserTrialList";
import WebsiteDelete from "./WebsiteDelete";
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
        <Route path="/website/delete/:id(\d+)" exact>
          {isLoggedIn ? <WebsiteDelete /> : <Redirect to="/login" />}
        </Route>
        <Route path="/trial" exact>
          {isLoggedIn ? <TrialList /> : <Redirect to="/login" />}
        </Route>
        <Route path="/trial/new">
          {isLoggedIn ? <TrialForm /> : <Redirect to="/login" />}
        </Route>
        <Route path="/trial/delete/:id(\d+)" exact>
          {isLoggedIn ? <TrialDelete /> : <Redirect to="/login" />}
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
