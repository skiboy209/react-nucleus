import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  navStyle = {
    textDecoration: "none",
    color: "white"
  };
  active = {
    fontWeight: "bold",
    color: "silver"
  };

  header = {
    paddingTop: "10px",
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
      <div style={this.header}>
        <NavLink exact to="/" style={this.navStyle} activeStyle={this.active}>
          Home
        </NavLink>
        <NavLink to="/posts" style={this.navStyle} activeStyle={this.active}>
          Posts
        </NavLink>
        <NavLink to="/about" style={this.navStyle} activeStyle={this.active}>
          About
        </NavLink>
        <NavLink to="/table" style={this.navStyle} activeStyle={this.active}>
          Table
        </NavLink>
      </div>
    );
  }
}

export default Header;
