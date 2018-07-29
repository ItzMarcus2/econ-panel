import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "firebase";
import "firebase/firestore";

class CreateMonth extends Component {
  state = {
    month: "January",
    est_Income: "",
    est_Spending: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    // Construct new "month" object
    const newMonth = {
      est_Income: this.state.est_Income,
      est_Spending: this.state.est_Spending
    };

    // Create new document in Firestore
    firebase
      .firestore()
      .collection("months")
      .doc(this.state.month)
      .set(newMonth)
      .then(this.props.history.push("/"))
      .catch(err => {
        alert(err.message);
      });
  };

  render() {
    return (
      <div className="container mx-auto">
        <div className="row">
          <span className="text-primary">
            <Link to="/">
              <i className="fas fa-arrow-circle-left" /> Back to Dashboard
            </Link>
          </span>
        </div>
        <div>
          <div className="card">
            <div className="card-header">
              <h1>Create a new month</h1>
            </div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="month">Select month</label>
                  <select
                    className="custom-select mr-sm-2 form-control"
                    id="inlineFormCustomSelect"
                    name="month"
                    onChange={this.onChange}
                  >
                    <option defaultValue="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="est_Income">
                    Estimated income for this month
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    name="est_Income"
                    id="est_Income"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="est_Spending">
                    Estimated amount of spending for this month
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    name="est_Spending"
                    id="est_Spending"
                    onChange={this.onChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-block btn-success"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateMonth);
