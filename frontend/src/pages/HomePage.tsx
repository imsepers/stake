import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Header from '../components/Header';
import WelcomeBox from '../components/WelcomeBox';
import jackpotimg from '../assets/jackpot.svg'
import SideBox from '../components/SideBox';
import box from '../assets/mysterybox.svg'
import Sidebar from '../components/Sidebar';
import Games from '../components/Games';

const HomePage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000); // Show for 1 seconds
        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return (
        <div className='bg-[rgb(1,7,24)] w-full h-screen'>
            {isLoading ? (
                <LoadingScreen onEnd={() => setIsLoading(false)} />
            ) : (
                <div>
                   <Header/>
                      {/* Side bar */}
                      <Sidebar/>
                    <main className="pt-24 flex space-x-12">
                        {/* Your main content goes here */}
                       <WelcomeBox maincontent='Welcome to BetX! Explore our games and have fun!' offers='50% 0ff ' imageurl={jackpotimg}/>
                       <SideBox maincontent='Play games and win exciting prizes' content='Play Now!' imageurl={box}/>
                    </main>
                          {/* Games body */}
                    <div className='mt-8 ps-72 w-full bg-[rgb(1,7,24)]'>
                          <Games/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomePage;
