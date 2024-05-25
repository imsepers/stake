import React from 'react';
import plinkoimg from '../assets/plinko.jpg'
const gameData = {
    newGames: [
      { imageurl:plinkoimg , title:"plinko"},
    ],
    topGames: [
      { imageurl: "/path/to/image3.jpg", title: "Top Game 1" },
      { imageurl: "/path/to/image4.jpg", title: "Top Game 2" },
    ],
    mostPlayedGames: [
      { imageurl: "/path/to/image5.jpg", title: "Most Played Game 1" },
      { imageurl: "/path/to/image6.jpg", title: "Most Played Game 2" },
    ],
  };

interface CardProps {
  imageurl: string;
  title?: string;
}

interface GameCategoryProps {
  heading: string;
  games: CardProps[];
}

import { Link } from 'react-router-dom'; // Import Link from React Router

const GameCategory: React.FC<GameCategoryProps> = ({ heading, games }) => (
  <div className="mb-8 relative">
    <h2 className="text-2xl text-white font-bold mb-4 select-none">{heading}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {games.map((game, index) => (
        <div key={index} className="relative overflow-hidden rounded-md">
          {/* Wrap the game card with a Link component */}
          <Link to={`/play/${game.title}`}>
            <img className="w-44 h-60 object-fit" src={game.imageurl} alt={game.title} />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-black bg-opacity-10 rounded-xl">
              <h3 className="text-orange-600 text-2xl font-extrabold pt-52 ps-24 select-none">{game.title}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

  
const Games: React.FC = () => {
  // const [data, setData] = useState({
  //   newGames: [],
  //   topGames: [],
  //   mostPlayedGames: []
  // });

  // useEffect(() => {
  //   // Load data from the static file or an API
  //   // setData(gameData);
  // }, []);

  return (
    <div className="p-6 bg-[rgb(1,7,24)] min-h-screen">
      <GameCategory heading="New Games" games={gameData.newGames} />

    </div>
  );
}

export default Games;
