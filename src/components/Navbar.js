import React, { Component } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
        <nav className="row navbar-background">
          
          <img className="covid-pic" src={require("../covid.png")} />

          <div className="navbar-title">
            <h1>COVID-19 Dashboard</h1>
          </div>
          {/* 
      </div> */}
          {/* </div> */}
        </nav>
    );
  }
}

export default Navbar;