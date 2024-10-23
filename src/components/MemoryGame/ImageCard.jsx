import React from 'react';

const ImageCard = ({ image, handleCardClick }) => {
  return (
    <div
      className="relative w-40 h-60 sm:w-48 sm:h-64 lg:w-52 lg:h-80"
      onClick={() => handleCardClick(image)}
    >
      <div className={`relative w-full h-full`} style={{ perspective: '1000px' }}>
        <div
          className={`transform transition-transform duration-700 w-full h-full relative`}
          style={{
            transformStyle: 'preserve-3d',
            transform: image.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front Side (Blue Background) */}
          <div
            className="absolute w-full h-full bg-gray-800 backface-hidden flex justify-center items-center"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}
          >
            <h1 className="text-white text-bold">Hi, Click Me</h1>
          </div>

          {/* Back Side (Image) */}
          <div
            className="absolute w-full h-full backface-hidden"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <img
              src={image.url}
              alt={`Back ${image.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
