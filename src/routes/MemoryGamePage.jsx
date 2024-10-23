import ImageGrid from 'components/MemoryGame/ImageGrid';
import Images from 'data/image';


const MemoryGamePage = () => {
  // console.log("images", Images);

  return (
    <div className='mb-10'>
      <div className='text-center  font-bold text-gray-800'>
        <h1 className='text-4xl'>Memory Game</h1>
        <p>Click on the cards to match them</p>
      </div>
      <div className='flex justify-center'>
        <ImageGrid Images={Images} />
      </div>
    </div>
  );
};

export default MemoryGamePage;
