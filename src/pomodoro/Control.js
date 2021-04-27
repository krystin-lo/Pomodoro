import React from "react";
import classNames from "../utils/class-names";

const Control = (props) => {
  const { handlePlay, isTimerRunning, handleStop, isSessionActive } = props;

  return (
    <div className="btn-group btn-group-lg mb-2" role="group" aria-label="Timer controls">
      <button 
        type="button"
        className="btn btn-primary"
        data-testid="play-pause"
        title="Play or pause timer"
        onClick={handlePlay}
      >
        <span
          className={classNames({
            oi: true,
            "oi-media-play": !isTimerRunning,
            "oi-media-pause": isTimerRunning,
          })}
        />
      </button>
      {/* TODO: Implement stopping the current focus or break session and disable when there is no active session */}
      <button
        type="button"
        className="btn btn-secondary"
        title="Stop the timer"
        onClick={handleStop}
        disabled={!isSessionActive}
      >
        <span className="oi oi-media-stop" />
      </button>
    </div>
  );
};

export default Control;