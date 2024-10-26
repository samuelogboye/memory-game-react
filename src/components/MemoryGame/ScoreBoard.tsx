import React from 'react';
import { IoReloadCircleSharp } from 'react-icons/io5';
import { ScoreboardProps } from 'types';

const Scoreboard = ({
  clickCount,
  bestScore,
  handleReset,
  resetAllScores
}: ScoreboardProps) => {
  return (
    <div className="mb-2 flex items-center justify-between border-8">
      <div className="">
        <p>Best Score: {bestScore}</p>
        <p>Click Count: {clickCount}</p>
      </div>
      <div className="flex content-center gap-4">
        <div className="md:flex" onClick={handleReset}>
          <IoReloadCircleSharp
            size={40}
            className="cursor-pointer content-center"
          />
          <button className="hidden rounded p-2 text-sm md:block">
            Reset Game
          </button>
        </div>
        <div>
          <button
            className="hidden bg-red-500 p-2 text-sm text-white md:flex md:rounded"
            onClick={resetAllScores}
          >
            Reset Best Score
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
