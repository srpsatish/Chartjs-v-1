import React, { Component } from "react";
import "./medicinetracker.scss";
import { NavLink } from "react-router-dom";
import firebase from '../../firebase/Firebase'

function MedicineTracker() {
  const [newDate, setNewDate] = React.useState();
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
      <div className="date-picker">
        <input type="date" value={newDate}  onChange={(e) => setNewDate(e.target.value)}></input>
        <button>set</button>
      </div>
    </div>
  );
}

export default MedicineTracker;
