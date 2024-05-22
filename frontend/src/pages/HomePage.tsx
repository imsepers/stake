import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Header from '../components/Header';

const HomePage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000); // Show for 1 seconds
        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return (
        <div>
            {isLoading ? (
                <LoadingScreen onEnd={() => setIsLoading(false)} />
            ) : (
                <div>
                   <Header/>
                    <main className="mt-16">
                        {/* Your main content goes here */}
                        <p>Welcome to BetX! Explore our games and have fun.</p>
                    </main>
                </div>
            )}
        </div>
    );
}

export default HomePage;
