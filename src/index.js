import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./styles.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

const options = [10, 20, 30, 40, 50];

const SetlectReset = ({ timeRef, onClickReset }) => {
  return (
    <div style={{ display: "flex" }}>
      <select ref={timeRef}>
        {options.map((opt) => (
          <option value={opt} key={opt}>
            {opt + " sec"}
          </option>
        ))}
      </select>
      <button onClick={onClickReset}>Reset</button>
    </div>
  );
};

function App() {
  const timeRef = useRef(null);
  const [key, setKey] = useState(0);
  const [value, setValue] = useState(10);
  const onClickReset = () => {
    setKey((prevKey) => prevKey + 1);
    setValue(parseInt(timeRef.current.value, 10));
  };

  return (
    <div className="App">
      <h1>
        <a
          href="https://www.reactlabs.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Labs
        </a>
        <br />
        ReactJS Assignment
      </h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          key={key}
          isPlaying
          duration={value}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [true, 10000]}
        >
          {renderTime}
        </CountdownCircleTimer>
        <SetlectReset timeRef={timeRef} onClickReset={onClickReset} />
        <h3>Can you get this reset button to work?</h3>
        <h4>
          The reset button should reset as per the time selected in the dropdown
        </h4>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
