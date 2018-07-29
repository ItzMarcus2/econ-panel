import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

import firebase from "firebase/app";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";
import Login from "./components/auth/Login";
import CreateMonth from "./components/months/CreateMonth";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container">
              <Switch>
                <Route path="/login" component={Login} />
                <Route
                  exact
                  path="/"
                  render={() =>
                    firebase.auth().currentUser === null ? (
                      <Redirect to="/login" />
                    ) : (
                      <Dashboard />
                    )
                  }
                />
                <Route path="/new-month" component={CreateMonth} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
