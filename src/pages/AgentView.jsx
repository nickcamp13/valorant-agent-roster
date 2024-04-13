import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSupabase } from "../hooks/useSupabase";

function AgentDetails() {
  const { agentId } = useParams();
  const [agent, setAgent] = useState(null);
  const supabase = useSupabase();

  useEffect(() => {
    const fetchAgent = async () => {
      const { data, error } = await supabase
        .from("agents")
        .select("*")
        .eq("id", agentId)
        .single();

      if (error) {
        console.error("Error fetching agent details:", error);
      } else {
        setAgent(data);
      }
    };

    fetchAgent();
  }, [agentId, supabase]);

  if (!agent) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Agent Codename: {agent.name}</h1>
      <p>Country: {agent.country}</p>
      <p>Role: {agent.role}</p>
    </div>
  );
}

export default AgentDetails;
