import React, { Component } from "react";

const MyContext = React.createContext("Hello React");

class App extends Component {
  render() {
    return <Navbar />;
  }
}

class Navbar extends Component {
  render() {
    return <Brand />;
  }
}

class Brand extends Component {
  static contextType = MyContext;
  render() {
    return <h1>{this.context}</h1>;
  }
}

export default App;
