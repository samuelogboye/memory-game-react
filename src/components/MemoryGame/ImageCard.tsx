import React from 'react';
import { ImageCardProps } from 'types';

const ImageCard = ({ image, handleCardClick }: ImageCardProps) => {
  return (
    <div
      className="relative size-60 rounded sm:size-48 lg:size-52"
      onClick={() => handleCardClick(image)}
    >
      <div className={`relative size-full`} style={{ perspective: '1000px' }}>
        <div
          className={`relative size-full transition-transform duration-700`}
          style={{
            transformStyle: 'preserve-3d',
            transform: image.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          {/* Front Side (Blue Background) */}
          <div
            className="absolute flex size-full cursor-pointer items-center justify-center bg-gray-800"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}
          >
            <h1 className="animate-bounce text-white sm:text-3xl lg:text-4xl">
              Hi, Click Me
            </h1>
          </div>

          {/* Back Side (Image) */}
          <div
            className="absolute size-full"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <img
              src={image.url}
              alt={`Back ${image.id}`}
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
