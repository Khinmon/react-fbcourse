import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <Title name={this.props.name} />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header name="App Title" />
      </div>
    );
  }
}

export default App;
