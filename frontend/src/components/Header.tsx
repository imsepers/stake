import { useState } from 'react';

const Header = () => {
    const [balance] = useState(0.00); // Default wallet balance
    const [showRecharge, setShowRecharge] = useState(false);

    // Function to handle wallet recharge
    const handleRecharge = () => {
        // Here you can implement the logic to handle wallet recharge
        console.log("Recharging wallet...");
    };

    return (
        <nav className="bg-[#1A2C38] w-full fixed top-0 z-50 select-none">
            <div className="max-w-8xl mx-auto sm:px-6 lg:px-12 flex justify-between items-center h-16">
                <div className='cursor-pointer'>
                    <h1 className="text-white sm:text-xl font-bold lg:text-3xl">Bet <span className="text-yellow-400 sm:text-2xl lg:text-5xl">X</span></h1>
                </div>
                {/* Wallet balance */}
                <div className="bg-[rgb(-15-33-46)] text-white text-sm font-medium relative border-1 solid w-52 h-12 flex items-center rounded-md ">
    <button onClick={() => setShowRecharge(!showRecharge)} className="text-white hover:bg-blue-600 bg-blue-500 w-20 h-full flex items-center justify-center rounded-l-md">Wallet</button>
    {showRecharge && (
        <div className="absolute top-10 right-0 bg-white p-4 shadow-md rounded-md">
            {/* Recharge form */}
            <input type="text" className="border-gray-300 border rounded-md px-2 py-1 mb-2" placeholder="Enter amount" />
            <button onClick={handleRecharge} className="bg-blue-500 text-white px-3 py-1 rounded-md">Recharge</button>
        </div>
    )}
    <div className="text-white flex items-center ml-2 ">
        <span>₹</span>
        <span className="px-1">{balance.toFixed(2)}</span>
    </div>
</div>



                {/* Profile  */}
                   <div>
                       <div> 
                           <p>Profile</p>
                       </div>
                   </div>
            </div>
        </nav>
    );
}

export default Header;
