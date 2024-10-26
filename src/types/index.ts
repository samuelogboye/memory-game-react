export interface ImagesProp {
  id: number;
  url: string;
  isFlipped: boolean;
}

export interface ImageGridProps {
  images: ImagesProp[];
}

export interface ImageCardProps {
  index: number;
  image: ImagesProp;
  handleCardClick: (clickedImage: ImagesProp) => void;
}

export interface GameCompletedModalProps {
  clickCount: number;
  bestScore: number;
  handleReset: () => void;
}

export interface ScoreboardProps extends GameCompletedModalProps {
  resetAllScores: () => void;
}
