import React from "react";

const MyContext = React.createContext("Hello React");

const App = (props) => {
  return <Navbar />;
};

const Navbar = (props) => {
  return <Brand />;
};

const Brand = (props) => {
  const value = React.useContext(MyContext);
  return <h1>{value}</h1>;
};

export default App;
