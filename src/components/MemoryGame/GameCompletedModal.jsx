import React from 'react';

const GameCompletedModal = ({ clickCount, bestScore, handleReset }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="flex w-full max-w-xs flex-col items-center rounded bg-white p-6 shadow-lg sm:max-w-md sm:p-8">
        <h2 className="mb-4 text-center text-xl font-bold sm:text-2xl">
          Congratulations! You found all the cards in {clickCount} flips.
        </h2>
        <p className="mb-4 text-center sm:text-lg">Best Score: {bestScore}</p>
        <button
          onClick={handleReset}
          className="animate-bounce rounded bg-gray-800 p-2 text-white hover:bg-gray-700 sm:w-auto"
        >
          Reset to Play Again
        </button>
      </div>
    </div>
  );
};

export default GameCompletedModal;
