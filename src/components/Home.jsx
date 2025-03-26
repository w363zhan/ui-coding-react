import problemsData from "../data/problemsData";
import { Link } from "react-router";

export default function Home() {
  return (
    <nav style={{ display: "flex", flexDirection: "column" }}>
      {problemsData.map((problem) => (
        <Link key={problem.id} to={`/problem/${problem.id}`}>
          {problem.title}
        </Link>
      ))}
    </nav>
  );
}
