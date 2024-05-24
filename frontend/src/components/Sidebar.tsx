import React from 'react';
import SidebarBox from './SidebarBox';
import money from '../assets/moneyicon.svg';
import dice from '../assets/moneyicon.svg';  // Assume you have another icon

const Sidebar: React.FC = () => {
  const games = [
    { iconurl: money, title: 'Play Plinko'},
    { iconurl: dice, title: 'Roll Dice' },  // Example of additional game
    // Add more items as needed
  ];

  const profile=[
    { iconurl: money, title: 'Play Plinko' },
    { iconurl: money, title: 'Play Plinko' },
    { iconurl: money, title: 'Play Plinko' },
    { iconurl: money, title: 'Play Plinko' },
    { iconurl: money, title: 'Play Plinko' },
  ]

  return (
    <div className="bg-[rgb(3,12,32)] pt-24 w-64 h-full p-4 flex flex-col fixed space-y-6">
      <SidebarBox heading='Games' items={games} />
      <SidebarBox heading='Account' items={profile} />
    </div>
  );
}

export default Sidebar;
