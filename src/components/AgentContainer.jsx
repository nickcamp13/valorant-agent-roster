/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Agent = ({ id, name, country, role }) => {
  return (
    <div className="agent-container">
      <div className="agent-card">
        <Link to={`/agent/${id}`}>
          <h2>Codename: {name}</h2>
          <p>Country of Origin: {country}</p>
          <p>Role: {role}</p>
        </Link>
        <Link to={`/edit/${id}`}>Edit</Link>
      </div>
    </div>
  );
};

export default Agent;
