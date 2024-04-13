import { useParams, useNavigate } from "react-router-dom";
import { useSupabase } from "../hooks/useSupabase";
import { useEffect, useState } from "react";

const Edit = () => {
  const { agentId } = useParams();
  // const [agent, setAgent] = useState({ name: "", country: "", role: "" });
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [role, setRole] = useState("");
  const supabase = useSupabase();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAgent = async () => {
      const { data, error } = await supabase
        .from("agents")
        .select("*")
        .eq("id", agentId)
        .single();

      if (error) console.log("Error fetching agent", error);
      else {
        setName(data.name)
        setCountry(data.country)
        setRole(data.role)
      }
        
    };

    fetchAgent();
  }, [agentId, supabase]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedName = e.target.name.value;
    const updatedCountry = e.target.country.value;
    const updatedRole = e.target.role.value;

    const { error } = await supabase
      .from("agents")
      .update({ name: updatedName, country: updatedCountry, role: updatedRole })
      .match({ id: agentId });


    if (error) console.error("Error updating agent:", error);
    else navigate("/roster");
  };

  const handleDelete = async () => {
    const { error } = await supabase
      .from("agents")
      .delete()
      .match({ id: agentId });

    if (error) console.error("Error deleting agent:", error);
    else navigate("/roster");
  };

  if (!name) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Update Your Agent</h2>
      <img src="" alt="" />
      <h3>Current Agent Info:</h3>
      <p>
        Codename: {name}, Origin: {country}, Role: {role}
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <label htmlFor="country">Country: </label>
        <input
          type="text"
          name="country"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
        />
        <label htmlFor="role">Role: </label>
        <select name="role" id="role" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Duelist">Duelist</option>
          <option value="Initiator">Initiator</option>
          <option value="Sentinel">Sentinel</option>
          <option value="Controller">Controller</option>
        </select>
        <button type="submit">Update Agent</button>
      </form>
      <button onClick={handleDelete}>Delete from roster</button>
    </div>
  );
};

export default Edit;
