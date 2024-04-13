import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h1>VALORANT Agent Roster</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="create">Create An Agent</NavLink>
        <NavLink to="roster">View Agent Roster</NavLink>
      </nav>
    </>
  );
};

export default Navbar;
