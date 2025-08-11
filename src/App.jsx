import React from "react";
import Navbar from "./components/Navbar";
import OfferBanner from "./components/OfferBanner";
import BackToSchool from "./components/BackToSchool";
import MacBookAirSection from "./components/MacBookAirSection";
import IPhoneSection from "./components/iPhoneSection"; 
import GridSection from "./components/GridSection";
import Videosection from "./components/Videosection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <OfferBanner />
        <BackToSchool />
        <div className="w-full h-2 bg-white" />
        <MacBookAirSection />
        <div className="w-full h-2 bg-white" />
       <IPhoneSection />
       <div className="mt-0">
     <GridSection />
     <Videosection />
     <Footer />
    </div>
     </div>
    </>
  );
}

export default App;