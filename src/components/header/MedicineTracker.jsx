import React, { Component } from "react";
import "./medicinetracker.scss";
import { NavLink } from "react-router-dom";

export default class MedicineTracker extends Component {
  render() {
    return (
      <div className="container">
        <NavLink
          exact
          to="/"
          activeStyle={{
            fontWeight: "500",
            color: "#000000",
          }}
        >
          Pills Taken
        </NavLink>
        <NavLink
          exact
          to="/missed"
          activeStyle={{
            fontWeight: "500",
            color: "#000000",
          }}
        >
          Pills Missed
        </NavLink>
        <div className='date-picker'>
          <input type="date"></input>
        </div>
      </div>
    );
  }
}
