import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard'; 
import Scoreboard from './ScoreBoard';
import GameCompletedModal from './GameCompletedModal';

function ImageGrid({ Images }) {
  const [GridImages, setImages] = useState(Images);
  const [clickCount, setClickCount] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const [gameCompleted, setGameCompleted] = useState(false);

  useEffect(() => {
    const shuffledImages = shuffleArray([...Images]);
    setImages(shuffledImages);
  }, [Images]);

  useEffect(() => {
    if (gameCompleted) {
      setBestScore();
    }
  }, [clickCount, gameCompleted]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleCardClick = (clickedImage) => {
    if (flippedCards.length === 2 || clickedImage.isFlipped) return;

    setClickCount(clickCount + 1);
    const updatedImages = GridImages.map((image) =>
      image.id === clickedImage.id ? { ...image, isFlipped: true } : image
    );
    setImages(updatedImages);

    const newFlippedCards = [...flippedCards, clickedImage];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setTimeout(() => checkForMatch(newFlippedCards), 1000);
    }

    checkIfGameCompleted(updatedImages);
  };

  const checkForMatch = (flippedCards) => {
    const [firstCard, secondCard] = flippedCards;
    let updatedImages = [...GridImages];

    if (firstCard.url === secondCard.url) {
      setFlippedCards([]);
    } else {
      updatedImages = updatedImages.map((image) =>
        image.id === firstCard.id || image.id === secondCard.id
          ? { ...image, isFlipped: false }
          : image
      );
      setImages(updatedImages);
      setFlippedCards([]);
    }
  };

  const checkIfGameCompleted = (images) => {
    const allFlipped = images.every((image) => image.isFlipped);
    if (allFlipped) {
      setGameCompleted(true);
    }
  };

  const handleReset = () => {
    const resetImages = GridImages.map((image) => ({ ...image, isFlipped: false }));
    const shuffledImages = shuffleArray([...resetImages]);
    setImages(shuffledImages);
    setClickCount(0);
    setFlippedCards([]);
    setGameCompleted(false);
  };

  const getBestScore = () => {
    const bestScore = localStorage.getItem('bestScore');
    return bestScore ? parseInt(bestScore, 10) : 0;
  };

  const setBestScore = () => {
    if (clickCount > 0 && (getBestScore() === 0 || clickCount < getBestScore())) {
      localStorage.setItem('bestScore', clickCount);
    }
  };

  const resetAllScores = () => {
    localStorage.removeItem('bestScore');
    handleReset();
  };

  return (
    <div>
      {/* Scoreboard */}
      <Scoreboard
        clickCount={clickCount}
        bestScore={getBestScore()}
        handleReset={handleReset}
        resetAllScores={resetAllScores}
      />

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {GridImages.map((image, index) => (
          <ImageCard key={index} image={image} handleCardClick={handleCardClick} />
        ))}
      </div>

      {/* Game Completed Modal */}
      {gameCompleted && (
        <GameCompletedModal
          clickCount={clickCount}
          bestScore={getBestScore()}
          handleReset={handleReset}
        />
      )}
    </div>
  );
}

export default ImageGrid;
