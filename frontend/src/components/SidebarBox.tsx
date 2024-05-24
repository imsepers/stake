import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SidebarItem {
  iconurl: string;
  title: string;
  url?: string;
}

interface SidebarProps {
  heading: string;
  items: SidebarItem[];
}

const SidebarBox: React.FC<SidebarProps> = ({ heading, items }) => {
  const handleItemClick = (url: string) => {
      navigate(url);
  };
  const navigate=useNavigate();
  return (
    <div className="border border-solid border-[rgb(60,117,175)] bg-gradient-to-r from-[rgb(17,26,50)] to-[rgb(35,55,89)] rounded-xl space-y-3 p-5 shadow-lg select-none">
      <div>
        <h2 className="text-[rgb(60,117,175)] text-lg font-semibold ps-3 pt-3">{heading}</h2>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li 
            key={index} 
            className="flex cursor-pointer items-center space-x-4 ps-3 hover:bg-[rgb(23,34,58)] p-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105" 
            onClick={() => handleItemClick(item.url)}
          >
            <img className="w-6 h-6" src={item.iconurl} alt={`${item.title} icon`} />
            <p className="text-white">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarBox;
