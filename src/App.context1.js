import React from "react";

const MyContext = React.createContext();

const App = (props) => {
  return (
    <MyContext.Provider value="Hello React">
      <Navbar />
    </MyContext.Provider>
  );
};

const Navbar = (props) => {
  return <Brand />;
};

const Brand = (props) => {
  return <MyContext.Consumer>{(value) => <h1>{value}</h1>}</MyContext.Consumer>;
};

export default App;
