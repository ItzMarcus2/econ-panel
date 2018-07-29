import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { months: state.months };
};

class Table extends Component {
  render() {
    const { months } = this.props;
    return (
      <div className="col-md-8">
        <h1 className="text-success">Economy</h1>
        <div className="card">
          <div className="card-body">
            <table className="table table-striped">
              {months ? (
                <React.Fragment>
                  <thead>
                    <tr>
                      <th>Month</th>
                      <th>Estimated income</th>
                      <th>Estimated spending</th>
                      <th>Room for savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {months[0].map((month, i) => {
                      const status =
                        month.est_Spending > month.est_Income ? "No" : "Yes";
                      return (
                        <tr key={i}>
                          <td>{month.id}</td>
                          <td>{month.est_Income}</td>
                          <td>{month.est_Spending}</td>
                          <td>{status}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </React.Fragment>
              ) : null}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Table);
