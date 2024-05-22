import React, { useEffect } from 'react';

interface LoadingScreenProps {
    onEnd: () =>void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onEnd }) => {
      console.log(onEnd);
    useEffect(() => {
        const timer = setTimeout(onEnd, 10000); // Show for 1 seconds
        return () => clearTimeout(timer); // Cleanup the timer
    }, [onEnd]);

    return (
        <div className="flex justify-center items-center h-screen bg-[#1A2C38]">
            <div className="text-center">
                <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-md animate-pulse">
                    Bet <span className="text-yellow-400">X</span>
                </h2>
                <p className="mt-4 text-white text-lg">Loading...</p>
            </div>
        </div>
    );
}

export default LoadingScreen;
