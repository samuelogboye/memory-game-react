import React from 'react';

const GameCompletedModal = ({ clickCount, bestScore, handleReset }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-0">
      <div className="bg-white flex flex-col items-center p-6 sm:p-8 max-w-xs sm:max-w-md w-full rounded shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
          Congratulations! You found all the cards in {clickCount} flips.
        </h2>
        <p className="text-md sm:text-lg text-center mb-4">Best Score: {bestScore}</p>
        <button
          onClick={handleReset}
          className="bg-gray-800 text-white align-center p-2 rounded sm:w-auto animate-bounce hover:bg-gray-700"
        >
          Reset to Play Again
        </button>
      </div>
    </div>
  );
};

export default GameCompletedModal;
