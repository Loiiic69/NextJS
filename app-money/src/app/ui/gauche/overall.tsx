import React from 'react';
import PieChart from "@/app/ui/graphique/camembert";
import Donut from "@/app/ui/graphique/camembert";
import Image from "next/image";

const Gauche = () => {
    return (
        <div className="mt-4 ml-10 flex justify-start items-start">
            <div>
                <h1 className="text-2xl font-thin mb-8">Overall Balance</h1>
                <p className="text-5xl font-bold mb-10">$ 11,121.22</p>
                <div className="mt-4 flex gap-5">
                    <button className="shadow-2xl bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-lg flex items-center">
                        <Image  src="/icon6.png" alt="Send" className="h-6 w-6 mr-2" />
                        Send
                    </button>
                    <button className="shadow-2xl bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-lg flex items-center">
                        <Image  src="/icon7.png" alt="Receive" className="h-6 w-6 mr-2" />
                        Receive
                    </button>
                    <button className="shadow-2xl bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-lg flex items-center">
                        ...
                    </button>
                </div>
                <div className="mt-20 flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-thin ">Capabilities</h1>
                        <p className="flex text-gray-400 text-lg font-thin mb-2">Total Net Growth of 42%</p>
                    </div>
                    <Image src="/icon8.png" alt="Your Icon" className="h-20 w-20 ml-48 " />
                </div>
                <div className="ml-10"> {/* Ajout de la classe ml-10 pour la marge à gauche */}
                    <Donut />
                </div>
            </div>

        </div>
    );
};

export default Gauche;
