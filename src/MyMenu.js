import React, { Component } from "react";

class MyMenu extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default MyMenu;
