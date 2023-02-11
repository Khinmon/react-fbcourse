import { Routes, Route, Link, NavLink, useParams } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "./Main.css";

const App = (props) => {
  return (
    <div>
      <h1 className="duc">You can do it. I belive in you. </h1>
      <p>ကျေးဇူးတင်စွာဖြင့်</p>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            About
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};
export default App;
