import logo from "../assets/logo.jpg";
import cypher from "../assets/cypher.png";

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Roster Builder</h2>
      <p>
        Build your very own roster of agents that you want to be added to the
        game
      </p>
      <div className="page-imgs">
        <img src={logo} alt="logo" />
        <img src={cypher} alt="cypher" />
      </div>
    </div>
  );
};

export default Home;
