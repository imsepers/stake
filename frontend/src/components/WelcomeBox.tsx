import React from 'react';

interface WelcomeProps {
  maincontent: string;
  offers: string;
  imageurl: string;
}

const WelcomeBox: React.FC<WelcomeProps> = ({ maincontent, offers, imageurl }) => {
  return (
    <div className="relative bg-[rgb(50,148,251)] ms-72 w-2/4 h-48 rounded-xl flex items-center overflow-visible shadow-lg select-none transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="w-2/4 p-6">
        <h2 className="text-white text-xl font-semibold">{maincontent}</h2>
        <p className="mt-4 text-2xl font-bold text-yellow-400">{offers}</p>
      </div>
      <div className="relative w-2/4 flex justify-center items-center overflow-visible">
        <img
          className="absolute w-60 transition-transform duration-500 hover:rotate-12 hover:scale-110"
          loading="lazy"
          src={imageurl}
          alt="Welcome Image"
          style={{
            transform: 'rotateY(25deg) rotateX(-25deg)',
            transition: 'transform 0.5s',
          }}
        />
      </div>
    </div>
  );
};

export default WelcomeBox;
