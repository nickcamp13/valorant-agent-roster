import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Roster from "./pages/Roster";
import Edit from './pages/Edit';
import Navbar from "./components/Navbar";
import AgentView from "./pages/AgentView";

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="create" element={<Create />} />
            <Route path="roster" element={<Roster />} />
            <Route path="edit/:agentId" element={<Edit />} />
            <Route path="agent/:agentId" element={<AgentView/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
