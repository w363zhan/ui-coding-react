import { useParams } from "react-router-dom";
import problemsData from "../data/problemsData";

const ProblemSolution = () => {
  const { id } = useParams();
  const problem = problemsData.find((problem) => problem.id === parseInt(id));
  const SolutionComponent = problem.solutionComponent;

  return (
    <div style={{ display: "flex", gap: "100px", alignItems: "center" }}>
      <div style={{ width: "60%" }}>
        <h1>{problem.title}</h1>
        <p>{problem.description}</p>
        <h2>Requirements</h2>
        <ul>
          {problem.requirements.map((requirement, index) => (
            <Requirement key={index} requirement={requirement} />
          ))}
        </ul>
      </div>
      <SolutionComponent />
    </div>
  );
};

const Requirement = ({ requirement }) => {
  return (
    <li>
      {requirement.title}
      {requirement.children && (
        <ul>
          {requirement.children.map((child, index) => (
            <Requirement key={index} requirement={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default ProblemSolution;
