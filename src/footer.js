import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  navStyle = {
    textDecoration: "none",
    color: "white"
  };
  active = {
    fontWeight: "bold",
    color: "silver"
  };

  footer = {
    bottom: "0",
    width: "100%",
    position: "fixed",
    paddingTop: "25px",
    paddingBottom: "10px",
    opacity: "80",
    backgroundColor: "black",
    display: "flex",
    textDecoration: "none",
    justifyContent: "space-evenly",
    listStyle: "none",
  };
  render() {
    return (
      <div style={this.footer}>
        <NavLink to="/legal" style={this.navStyle} activeStyle={this.active}>
          Legal
        </NavLink>
        <NavLink to="/privacy" style={this.navStyle} activeStyle={this.active}>
          Privacy
        </NavLink>
        <NavLink to="/contact" style={this.navStyle} activeStyle={this.active}>
          Contact
        </NavLink>
      </div>
    );
  }
}

export default Footer;
