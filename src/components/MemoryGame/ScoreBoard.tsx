import React from 'react';
import { ScoreboardProps } from 'types';

const Scoreboard = ({
  clickCount,
  bestScore,
  handleReset,
  resetAllScores
}: ScoreboardProps) => {
  return (
    <div className="mb-4">
      <p>Best Score: {bestScore}</p>
      <p>Click Count: {clickCount}</p>
      <button
        onClick={handleReset}
        className="rounded bg-gray-800 p-2 text-white"
      >
        Reset Game
      </button>
      <button
        onClick={resetAllScores}
        className="rounded bg-gray-800 p-2 text-white"
      >
        Reset All Scores
      </button>
    </div>
  );
};

export default Scoreboard;
