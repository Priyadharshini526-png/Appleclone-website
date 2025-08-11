import React from "react";
import iphoneImage from "../assets/iphone15pro.jpg"; 

const iPhoneSection = () => {
  return (
    <section className="w-full bg-[#f9f9fd] text-black text-center py-16 px-4">
      <h2 className="text-4xl sm:text-5xl font-bold mb-2">iPhone</h2>

      <p className="text-xl sm:text-xl font-semibold mt-3 mb-1">
        Meet the iPhone next family
      </p>

      <p className="text-xl font-semibold mt-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 mb-4">
        Built for Apple Intelligence
      </p>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <button className="border border-[#0071e3] bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition mt-3">
          Learn more
        </button>
        <button className="bg-white font-semibold text-[#0071e3] border border-[#0071e3] hover:bg-[#0071e3] hover:text-white transition px-6 py-2 rounded-full mt-3">
          Shop iPhone
        </button>
      </div>

      <div className=" flex justify-center">
        <img
          src={iphoneImage}
          alt="iPhone 15 Pro"
          className="w-full max-w-[700px] h-[400px] "
        />
      </div>
    </section>
  );
};

export default iPhoneSection;