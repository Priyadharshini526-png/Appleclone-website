import React, { useEffect, useState } from "react";
import p2 from "../assets/p2.jpg";
import p1 from "../assets/p1.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";

const slides = [
  {
    image: p2,
    title: "Slow Horses",
    subtitle: "New Season Now Streaming",
    buttonText: "Stream Now",
  },
  {
    image: p1,
    title: "Foundation of youth",
    subtitle: "A Sci-Fi Epic Returns",
    buttonText: "Watch Season 2",
  },
  {
    image: p3,
    title: "Ted Lasso",
    subtitle: "Believe Again",
    buttonText: "Stream Every Episode",
  },
  {
    image: p4,
    title: "Severance",
    subtitle: "Split Your Mind",
    buttonText: "Watch Now",
  },
  {
    image: p5,
    title: "Shrinking",
    subtitle: "Therapy Gets Real",
    buttonText: "Start Watching",
  },
  {
    image: p6,
    title: "Silo",
    subtitle: "The Truth Lies Deep",
    buttonText: "Stream Now",
  },
  {
    image: p7,
    title: "The Morning Show",
    subtitle: "News Never Sleeps",
    buttonText: "Watch on Apple TV+",
  },
];

const Videosection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full min-h-[80vh] relative z-0">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="min-w-full relative h-[80vh]">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div> {/* Optional: dark overlay for better text visibility */}
            <div className="absolute bottom-10 left-10 text-white space-y-2 z-10">
              <h2 className="text-3xl md:text-4xl font-semibold">{slide.title}</h2>
              <p className="text-lg">{slide.subtitle}</p>
              <button className="mt-2 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Videosection;
