import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Table from "./Table";
import Overview from "./Overview";

class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <Table />
        <Overview />
      </div>
    );
  }
}

export default withRouter(Dashboard);
