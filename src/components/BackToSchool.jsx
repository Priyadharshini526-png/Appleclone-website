import React from "react";
import macImage from "../assets/macImage.jpg";
import iPadImage from "../assets/iPad.jpg";

const BackToSchool = () => {
  return (
    <section className="w-full bg-blue-100 py-10 px-4 flex justify-center">
      <div className="flex flex-col items-center gap-4 max-w-[250px] w-full">

        {/* Main Message Bubble */}
        <div className="relative bg-[#0071e3] text-white rounded-[30px] px-6 pt-6 pb-6 w-full">
          {/* Mac & iPad in top-right corner of the box */}
          <div className="absolute -top-6 -right-6 z-10">
    <div className="relative">
    <img
      src={macImage}
      alt="Mac"
      className="w-10 sm:w-12 object-contain"
    />
    <img
      src={iPadImage}
      alt="iPad"
      className="w-6 sm:w-8 object-contain absolute top-[28px] right-[-8px]"
    />
  </div>
</div>
          <h2 className="text-4xl sm:text-3xl font-bold leading-tight relative z-0">
            Buy Mac <br /> or iPad <br /> for college
          </h2>
        </div>

        {/* Education Savings Bubble */}
        <div className="bg-[#0071e3] text-white rounded-full px-7 py-2 text-base sm:text-lg font-bold w-fit">
           with education savings
        </div>

        {/* AirPods Bubble */}
        <div className="relative bg-[#0071e3] text-white rounded-[30px] px-6 pt-6 pb-6 w-full">
          {/* Graduation icon in top-left corner (opposite side of Mac/iPad) */}
          <div className="absolute -top-4 -left-3 text-2xl z-10">
            🎓
          </div>
            
          <p className="text-4xl sm:text-3xl font-bold leading-tight relative z-0">
            Choose <br /> AirPods or <br /> an eligible accessory
          </p>
        </div>

        {/* Shop Button */}
        <div className="text-center mt-2">
          <button className="bg-white text-[#0071e3] text-sm font-medium py-2 px-6 rounded-full border border-[#0071e3] hover:bg-[#0071e3] hover:text-white transition">
            Shop
          </button>
        </div>
      </div>
    </section>
  );
};

export default BackToSchool;
