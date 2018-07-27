import React, { Component } from "react";
import { firestore } from "../../store";

class Table extends Component {
  state = {};
  componentDidMount() {
    if (firestore) {
      firestore.collection("months").onSnapshot(snapshot => {
        snapshot.docs.forEach(doc => {
          this.setState({ months: doc.data() });
        });
        console.log(this.state);
      });
    }
  }

  render() {
    return (
      <div className="col-md-8">
        <h1 className="text-success">Economy</h1>
        <div className="card">
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Estimated income</th>
                  <th>Estimated spending</th>
                  <th>Room for savings</th>
                </tr>
              </thead>
              <tbody>
                {this.state.months &&
                  this.state.months.map(month => {
                    <tr>
                      <td>Hey</td>
                      <td>{month.est_Income}</td>
                      <td>{month.est_Spending}</td>
                      <td>Yes (1800)</td>
                    </tr>;
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
