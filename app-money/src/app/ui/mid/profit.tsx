import React from 'react';
import MultiLineChart from "@/app/ui/graphique/gprofit";
import BenefitsChart from "@/app/ui/graphique/gprofitbas";
import Image from "next/image";

const Profit = () => {
    return (
        <div>
            <div className="bg-black rounded-3xl p-7">
                <div className="flex flex-col md:flex-row gap-20">
                    <div>
                        <h1 className="text-gray-400 text-2xl font-thin mb-5">Profit</h1>
                        <p className="text-white text-5xl">$4,737.99</p>
                        <p className="mt-3 text-green-400 text-1xl">▲ 12.3% <span className="text-gray-400">Year over year</span></p>
                    </div>
                    <div>
                        <h1 className="text-left text-gray-400 text-1xl font-thin mb-1">Shares</h1>
                        <p className="text-white text-2xl">$2,556.80</p>
                        <p className="mt-3 text-green-400 text-xs">▲ 8.5% <span className="text-gray-400">Year over year</span></p>
                        <div className="mt-4">
                            <MultiLineChart/>
                        </div>
                    </div>
                </div>
                <div className="flex gap-10 mt-10">
                    <div className=" bg-gray-600 rounded-3xl h-32 w-32 mt-5">
                        <Image  src="/icon9.png" alt="Your Icon" className="ml-2 h-14 w-14" />
                        <p className="text-gray-300 ml-2 text-sm">Bitcoin</p>
                        <p className="text-white text-1xl ml-2 font-bold">$2,467.30</p>
                    </div>
                    <div className=" bg-gray-600 rounded-3xl h-32 w-32 mt-5">
                        <Image  src="/icon10.png" alt="Your Icon" className="ml-2 h-14 w-14" />
                        <p className="text-gray-300 ml-2 text-sm">Etherium</p>
                        <p className="text-white text-1xl ml-2 font-bold">$1,1990.01</p>
                    </div>
                    <div className=" bg-gray-600 rounded-3xl h-32 w-32 mt-5">
                        <Image  src="/icon11.png" alt="Your Icon" className="ml-2 h-14 w-14" />
                        <p className="text-gray-300 ml-2 text-sm">Dash</p>
                        <p className="text-white text-1xl ml-2 font-bold">$1,445.10</p>
                    </div>
                    <div className=" bg-gray-600 rounded-3xl h-32 w-32 mt-5">
                        <Image  src="/icon12.png" alt="Your Icon" className="ml-2 h-14 w-14" />
                        <p className="text-gray-300 ml-2 text-sm">Edo</p>
                        <p className="text-white text-1xl ml-2 font-bold">$988.O7</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl w-10/12 h-80 ml-14 mt-4">
                <BenefitsChart/>
            </div>
        </div>
    );
};

export default Profit;
