import React from "react";
import Image from 'next/image';

const Profil = () => {
    return (
        <div className=" items-center h-screen">
            <div className="text-center">
                <Image height={56} width={56} src="/profil.png" alt="Your Icon" className="rounded-full h-28 w-28 mx-auto" />
                <h1 className="text-lg mt-3">John</h1>
                <h1 className="text-lg">Doe</h1>

                <div className="flex flex-col justify-center mt-5 gap-5">
                    <button className="bg-white hover:bg-gray-200 text-black font-bold  px-6 rounded-lg flex flex-col items-center">
                        <Image height={56} width={56} src="/+.png" alt="Send" className="h-11 w-11" />
                        <span className="mt-2">Top up</span>
                    </button>
                    <button className="bg-white hover:bg-gray-200 text-black font-bold  px-6 rounded-lg flex flex-col items-center">
                        <Image height={56} width={56} src="/-%3E.png" alt="Send" className="h-11 w-11" />
                        <span className="mt-2">Transfer</span>
                    </button>
                    <button className="bg-white hover:bg-gray-200 text-black font-bold  px-6 rounded-lg flex flex-col items-center">
                        <Image height={56} width={56} src="/pourcent.png" alt="Send" className="h-11 w-11" />
                        <span className="mt-2">Taxes</span>
                    </button>
                    <button className="bg-white hover:bg-gray-200 text-black font-bold  px-6 rounded-lg flex flex-col items-center">
                        <Image height={56} width={56} src="/cado.png" alt="Send" className="h-11 w-11" />
                        <span className="mt-2">Gifts</span>
                    </button>
                    <button className="bg-white hover:bg-gray-200 text-black font-bold  px-6 rounded-lg flex flex-col items-center">
                        <Image height={56} width={56} src="/work.png" alt="Send" className="h-11 w-11" />
                        <span className="mt-2">Portfolio</span>
                    </button>
                    <button className="bg-white hover:bg-gray-200 text-black font-bold  px-6 rounded-lg flex flex-col items-center">
                        <Image height={56} width={56} src="/trois.png" alt="Send" className="h-11 w-11" />
                        <span className="mt-2">More</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profil;
