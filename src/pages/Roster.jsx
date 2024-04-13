import { useEffect, useState } from "react";
import { useSupabase } from "../hooks/useSupabase";
import Agent from '../components/AgentContainer';

const Roster = () => {
  const [agents, setAgents] = useState([]);
  const supabase = useSupabase();

  useEffect(() => {
    const fetchAgents = async () => {
      const { data, error } = await supabase.from("agents").select("*");

      if (error) console.error("Error fetching agents:", error);
      else {
        console.log("agents set", data);
        setAgents(data);
      }
    };

    fetchAgents();
  }, []);

  return (
    <div className="roster-container">
      {agents.map((agent, i) => (
        <Agent key={i} id={agent.id} name={agent.name} country={agent.country} role={agent.role}/>
      ))}
    </div>
  );
};

export default Roster;
