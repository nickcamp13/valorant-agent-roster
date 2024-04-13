import { useState } from "react";
import { useSupabase } from "../hooks/useSupabase";
import jett from "../assets/jett.png";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [role, setRole] = useState("duelist");
  const supabase = useSupabase();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("agents")
      .insert([{ name: name, country: country, role: role }])
      .select();

    if (error) {
      console.error("Error inserting data", error);
    } else {
      console.log("Data inserted", data);
      navigate("/roster")
    }
  };

  return (
    <div>
      <h2>Create a New Agent</h2>
      <div className="center-content">
        <div className="page-imgs">
          <img src={jett} alt="agents" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="card">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="card">
            <label htmlFor="origin">Country of Origin</label>
            <input
              type="text"
              name="origin"
              id="origin"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="card">
            <label htmlFor="role">Role</label>
            <select
              name="role"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="duelist">Duelist</option>
              <option value="initiator">Initiator</option>
              <option value="controller">Controller</option>
              <option value="sentinel">Sentinel</option>
            </select>
          </div>
          <button type="submit">Create Agent</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
