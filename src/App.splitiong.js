import React, { Component } from "react";
import MyMenu from "./MyMenu";

class Nav extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Nav>
          <h1 style={{ background: "black", padding: 20, color: "white" }}>
            Digital Hunter
          </h1>
        </Nav>
        <MyMenu>
          <h1>Hello React</h1>
          <p>Component Composition</p>
        </MyMenu>
      </div>
    );
  }
}

export default App;
