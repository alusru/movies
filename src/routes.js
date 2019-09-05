import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/home";
import Layout from "./hoc/layout/layout";
import Movies from './components/Movies/MoviePost/index'
class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/items/:id" exact component={Movies}></Route>
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
