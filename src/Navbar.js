import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return <div className="Dark-nav">{this.props.children}</div>;
  }
}

export default Navbar;
