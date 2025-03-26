import { useParams } from "react-router-dom";
import problemsData from "../data/problemsData";
import Section from "./Section";
import React from "react";

const ProblemSolution = () => {
  const { id } = useParams();
  const problem = problemsData.find((problem) => problem.id === parseInt(id));
  const SolutionComponent = problem.solutionComponent;

  return (
    <div style={{ display: "flex", gap: "100px", alignItems: "center" }}>
      <div style={{ width: "60%" }}>
        <h1>{problem.title}</h1>
        <p>
          {problem.description.split("\n").map((paragraph, index) => (
            <React.Fragment key={index}>
              {paragraph}
              <br />
              <br />
            </React.Fragment>
          ))}
        </p>
        <Section sectionTitle="Requirements" items={problem.requirements} />
      </div>
      <div style={{ width: "40%" }}>
        <SolutionComponent />
      </div>
    </div>
  );
};

export default ProblemSolution;
