 import React from "react";
import macbookAirImage from "../assets/macbookAir.jpg";

const MacBookAirSection = () => {
    return (
        <section className="w-full  bg-gradient-to-b from-[#DBEDF7] to-[#E8F1F5] text-black text-center py-16 px-4">
         <h2 className="text-4xl sm:text-5xl font-bold mb-2">MacBook Air </h2>
            <p className="text-xl sm:text-xl font-semibold mb-1">Sky blue color.</p>
            <p className="text-xl sm:text-xl font-semibold mb-1">Sky high Performance with M4.</p>

            <div className="flex justify-center gap-4 mb-6 flex-wrap mt-3">
                <button className="border border-[#0071e3] bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 hover:text-white transition mt-3">
                    Learn more
                </button>
                <button className="bg-white font-semibold text-[#0071e3] border border-[#0071e3]  hover:bg-[#0071e3] hover:text-white .transition px-6 py-2 rounded-full hover:opacity-90 transition mt-3">
                    Buy
                </button>
            </div>

            <div className="flex justify-center">
                <img
                    src={macbookAirImage}
                    alt="MacBook Air"
                    className="w-full max-w-[700px] h-auto" />
            </div>

            <p className="text-xl mt-3  font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 ">
                Built for Apple Intelligence
            </p>
            
        </section>
    );
};

export default MacBookAirSection;