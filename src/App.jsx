import "./App.css";
import ProblemSolution from "./components/ProblemSolution";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problem/:id" element={<ProblemSolution />} />
      </Routes>
    </Router>
  );
}

export default App;
