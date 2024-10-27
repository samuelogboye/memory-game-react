const HomePage = () => {
  return (
    <div className="">
      <div className="my-48 text-center font-bold text-gray-800">
        <h1 className="my-4 text-2xl md:text-5xl lg:text-8xl">
          Welcome, Wanna play the Memory Game?
        </h1>
        <button className="my-4 animate-bounce lg:animate-none">
          <a href="/memory-game" className="rounded bg-gray-800 p-2 text-white">
            Click Here to Play Now
          </a>
        </button>
        {/* <img src="/memory-game.png" alt="" /> */}
      </div>
    </div>
  );
};

export default HomePage;
