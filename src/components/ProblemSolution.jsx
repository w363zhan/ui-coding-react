import { useParams } from "react-router-dom";
import problemsData from "../data/problemsData";

const ProblemSolution = () => {
  const { id } = useParams();
  const problem = problemsData.find((problem) => problem.id === parseInt(id));
  const SolutionComponent = problem.solutionComponent;

  return (
    <div>
      <h1>{problem.title}</h1>
      <p style={{ maxWidth: "600px" }}>{problem.description}</p>
      <SolutionComponent />
    </div>
  );
};

export default ProblemSolution;
