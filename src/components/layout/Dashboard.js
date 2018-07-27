import React, { Component } from "react";
import Table from "./Table";
import Overview from "./Overview";

class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <Table />
        <div className="col-md-2">
          <button className="btn btn-success">New Month</button>
        </div>
        <Overview />
      </div>
    );
  }
}

export default Dashboard;
