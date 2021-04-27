import React from "react";
import { minutesToDuration } from "../utils/duration";

const Time = (props) => {
  const { labelText, duration, handleDecrease, handleIncrease, isSessionActive } = props;
  const lower = labelText.toLowerCase();
  const length = `duration-${lower}`;
  const increase= `increase-${lower}`;
  const decrease = `decrease-${lower}`;

  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid={length}>
        {/* TODO: Update this text to display the current focus session duration */}
        {labelText} Duration: {minutesToDuration(duration)}
      </span>
      <div className="input-group-append">
        {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid={decrease}
          onClick={handleDecrease}
          disabled={isSessionActive}
        >
          <span className="oi oi-minus" />
        </button>
        {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid={increase}
          onClick={handleIncrease}
          disabled={isSessionActive}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
};

export default Time;