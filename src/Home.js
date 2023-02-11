import { Link } from "react-router-dom";
import puppy from "./images/puppy.png";
import "./Main.css";

console.log(puppy);

const Home = (props) => {
  const Images = [
    { src: "puppy" },
    { src: "puppy2" },
    { src: "puppy3" },
    { src: "puppy4" },
  ];

  return (
    <div>
      <h1>Repo Hub | Home</h1>
      <Link to="/about">About</Link>
      {Images.map((image, index) => (
        <img
          key={index}
          src={require(`./images/${image.src}.png`)}
          className="img"
        />
      ))}
    </div>
  );
};
export default Home;
