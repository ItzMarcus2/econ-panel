import React, { Component } from "react";

class Overview extends Component {
  render() {
    return (
      <div className="col-md-4">
        <h1 className="text-primary">Overview (till now)</h1>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Estimated revenue this year
            <span class="badge badge-success badge-pill">28.000kr</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Estimated spending this year
            <span class="badge badge-success badge-pill">20.000kr</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Estimated savings this year
            <span class="badge badge-success badge-pill">8.000kr</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Overview;
