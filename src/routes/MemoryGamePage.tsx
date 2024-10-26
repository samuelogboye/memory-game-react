import ImageGrid from 'components/MemoryGame/ImageGrid';
import Images from 'data/image';

const MemoryGamePage = () => {
  return (
    <div className="mb-10">
      <div className="text-center font-bold text-gray-800">
        <h1 className="text-2xl md:text-4xl">Memory Game</h1>
        <p className="text-sm">Click on the cards to match them</p>
      </div>
      <div className="flex justify-center">
        <ImageGrid images={Images} />
      </div>
    </div>
  );
};

export default MemoryGamePage;
