import { useState, useRef } from "react";

export default function Stopwatch() {
  const [counter, setCounter] = useState(0);
  const intervalId = useRef("");
  const [isStart, setIsStart] = useState(true);

  const increment = () => {
    intervalId.current = setInterval(() => setCounter((prev) => prev + 1), 10);
  };

  const handleStartStopButtonClick = () => {
    if (!isStart) {
      clearInterval(intervalId.current);
    } else {
      increment();
    }
    setIsStart(!isStart);
  };

  return (
    <div>
      <p>
        {Math.floor(counter / 100)}s {counter % 100}
      </p>
      <div>
        <button onClick={handleStartStopButtonClick}>
          {isStart ? "Start" : "Stop"}
        </button>{" "}
        <button
          onClick={() => {
            clearInterval(intervalId.current);
            setIsStart(true);
            setCounter(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
