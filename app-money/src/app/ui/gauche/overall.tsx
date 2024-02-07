import React from 'react';

const Gauche = () => {
    return (
        <div>
            <div className="mt-4 ml-10 flex justify-between">
                <div>
                    <h1 className="text-2xl font-thin mb-8">Overall Balance</h1>
                    <p className="text-5xl font-bold mb-10">$ 11,121.22</p>
                    <div className="mt-4 flex justify-between space-x-3">
                        <button className="shadow-2xl bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-lg flex items-center">
                            <img src="/icon6.png" alt="Send" className="h-6 w-6 mr-2" />
                            Send
                        </button>
                        <button className="shadow-2xl bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-lg flex items-center">
                            <img src="/icon7.png" alt="Receive" className="h-6 w-6 mr-2" />
                            Receive
                        </button>
                        <button className="shadow-2xl bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-lg flex items-center">
                            ...
                        </button>
                    </div>
                    <div className="mt-20 flex">
                        <h1 className="text-2xl font-thin mb-8">Capabilities
                            <p className="text-gray-400 text-lg font-thin mb-8">Total Net Growth of 42%</p>
                        </h1>
                        <div>
                            <img src="/icon8.png" alt="Your Icon" className="h-16 w-16 ml-20" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gauche;
