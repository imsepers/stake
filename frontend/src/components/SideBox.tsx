import React from "react";

interface SideProps {
  maincontent: string;
  content: string;
  imageurl: string;
}

const SideBox: React.FC<SideProps> = ({ maincontent, content, imageurl }) => {
  return (
    <div className="relative w-96 h-48 rounded-2xl p-5 flex select-none transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-blue-800 to-blue-600">
      <div className="flex flex-col justify-between">
        <h2 className="text-white text-xl font-semibold">{maincontent}</h2>
        <button className="text-white bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 py-2 px-4 mt-4 rounded-full shadow-md">
          {content}
        </button>
      </div>
      <div className="ml-3 mt-5 flex items-center justify-center">
        <img
          className="w-48 transition-transform duration-500 hover:rotate-6 hover:scale-110  mt-16 ms-12"
          src={imageurl}
          alt="Side-box image"
          style={{
            transform: 'rotateY(25deg) rotateX(-10deg)',
            transition: 'transform 0.5s',
          }}
        />
      </div>
    </div>
  );
};

export default SideBox;
