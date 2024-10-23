import React from 'react';

const Scoreboard = ({ clickCount, bestScore, handleReset, resetAllScores }) => {
  return (
    <div className="mb-4">
      <p>Best Score: {bestScore}</p>
      <p>Click Count: {clickCount}</p>
      <button onClick={handleReset} className="bg-gray-800 text-white p-2 rounded">
        Reset Game
      </button>
      <button onClick={resetAllScores} className="bg-gray-800 text-white p-2 rounded">
        Reset All Scores
      </button>
    </div>
  );
};

export default Scoreboard;
