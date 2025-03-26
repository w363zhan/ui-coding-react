import { useState, useEffect, useRef } from "react";

export default function JobBoard() {
  const jobIds = useRef([]);
  const currentIndex = useRef(0);
  const increment = 6;
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreJobs = async (isFirst) => {
    const moreJobs = await Promise.all(
      jobIds.current
        .slice(currentIndex.current, currentIndex.current + increment)
        .map(async (id) => {
          const res = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
          );
          return res.json();
        })
    );
    if (isFirst === true) {
      setJobs(moreJobs);
    } else {
      setJobs([...jobs, ...moreJobs]);
    }
    setIsLoading(false);
  };

  const handleLoadMoreJobsClick = () => {
    setIsLoading(true);
    currentIndex.current += increment;
    loadMoreJobs();
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      const res = await fetch(
        "https://hacker-news.firebaseio.com/v0/jobstories.json"
      );
      jobIds.current = await res.json();
      loadMoreJobs(true);
    };
    fetchInitialData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "80%",
          maxWidth: "600px",
        }}
      >
        <div style={{ color: "orange", fontWeight: "bold", fontSize: "20px" }}>
          Hacker News Jobs Board
        </div>
        {jobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
        {currentIndex.current < jobIds.current.length && (
          <button
            style={{
              alignSelf: "flex-start",
              backgroundColor: "orange",
              color: "white",
              fontSize: "15px",
              padding: "8px 8px",
              border: "none",
              borderRadius: "5px",
            }}
            onClick={handleLoadMoreJobsClick}
          >
            {isLoading ? "Loading..." : "Load more jobs"}
          </button>
        )}
      </div>
    </div>
  );
}

const Job = ({ job }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid lightgrey",
        minHeight: "50px",
        padding: "10px",
        gap: "8px",
      }}
    >
      <a
        style={{
          fontWeight: "bold",
          color: "black",
          textDecoration: isHovered ? "underline" : "None",
        }}
        href={job.url}
        target="_blank"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {job.title}
      </a>
      <div style={{ display: "flex", gap: "5px" }}>
        <div>By {job.by} -</div>
        <div>{new Date(job.time).toLocaleString()}</div>
      </div>
    </div>
  );
};
