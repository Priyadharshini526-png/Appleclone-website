import osImage from "../assets/os.jpg"; 
import macstudent from "../assets/mac-student.jpg";
import ipadAir from "../assets/ipad-2.jpg";
import macbookPro from "../assets/macbook-pro.jpg";
import airpods from "../assets/airpods.jpg";
import tradeIn from "../assets/tradein.jpg";

const Card = ({
  image,
  title,
  subtitle,
  buttons,
  textPosition,
  titleColor = "text-white",
  subtitleColor = "text-white",
  footerText,
  customBg = "",
}) => (
  <div className={`w-full md:w-[99%] h-[500px] overflow-hidden relative ${customBg}`}>
    <div
  className={`w-full h-full flex flex-col ${
    textPosition === "top" ? "justify-start" : "justify-end"
  } items-center p-4`}
  style={{
    backgroundImage: `url(${image})`,
    backgroundSize: 
       title === "MacBook Pro" ? "contain" : "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
>
      {title && (
        <h3
          className={`text-2xl sm:text-3xl font-semibold mb-1 drop-shadow-md ${titleColor}`}
        >
          {title}
        </h3>
      )}

      {Array.isArray(subtitle) ? (
        subtitle.map((line, i) => (
          <p
            key={i}
            className={`text-lg font-sans sm:text-lg drop-shadow-md ${subtitleColor}`}
          >
            {line}
          </p>
        ))
      ) : (
        subtitle && (
          <p
            className={`text-lg font-normal sm:text-lg drop-shadow-md ${subtitleColor}`}
          >
            {subtitle}
          </p>
        )
      )}

      <div className="flex gap-2 flex-wrap justify-center mt-2">
        {buttons.map((btn, idx) => (
          <a
            key={idx}
            href={btn.href || "#"}
            className={`text-sm font-normal px-3 py-1 rounded-full transition ${btn.className}`}
            style={btn.style}
          >
            {btn.label}
          </a>
        ))}
      </div>

      {footerText && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 px-2 text-center w-full">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-base sm:text-lg font-semibold leading-snug break-words">
            {footerText}
          </p>
        </div>
      )}
    </div>
  </div>
);

const GridSection = () => {
  const cards = [
    {
      image: osImage,
      title: "Preview OS",
      subtitle: ["Introducing exciting new feature", "across platforms"],
      textPosition: "bottom",
      titleColor: "text-black",
      subtitleColor: "text-black",
      buttons: [
        {
          label: "Explore",
          className:
            "border border-blue-600 bg-blue-600 text-white hover:bg-blue-600 hover:text-white",
        },
      ],
    },
    {
      image: macstudent,
      textPosition: "bottom",
      titleColor: "text-cyan-200",
      subtitleColor: "text-cyan-100",
      buttons: [
        {
          label: "Learn more",
          className:
            "border border-black bg-white text-black hover:bg-white hover:text-black",
        },
      ],
    },
    {
      image: ipadAir,
      title: "iPad Air",
      subtitle: "Now supercharged by M3 chip.",
      textPosition: "top",
      titleColor: "text-black",
      subtitleColor: "text-black",
      buttons: [
        {
          label: "Learn more",
          className: "border border-blue-600 text-white bg-blue-600",
        },
        {
          label: "Buy",
          className:
            "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
        },
      ],
      footerText: "Built for Apple Intelligence",
    },
    {
      image: macbookPro,
      title: "MacBook Pro",
      subtitle: "A work of smart.",
      textPosition: "top",
      titleColor: "text-white",
      subtitleColor: "text-white",
      customBg: "bg-black",
      buttons: [
        {
          label: "Learn more",
          className: "border border-blue-600 text-white bg-blue-600",
        },
        {
          label: "Buy",
          className:
            "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
        },
      ],
      footerText: "Built for Apple Intelligence",
    },
    {
      image: airpods,
      title: "AirPods",
      subtitle: [
        "Iconic. Now supersonic.",
        "Available with Noise Cancellation.",
      ],
      textPosition: "bottom",
      titleColor: "text-pink-200",
      subtitleColor: "text-pink-100",
      buttons: [
        {
          label: "Learn more",
          className: "border border-blue-600 text-white bg-blue-600",
        },
        {
          label: "Buy",
          className:
            "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
        },
      ],
    },
    {
      image: tradeIn,
      title: "Apple Trade In",
      subtitle: "Upgrade and save. It's that easy",
      textPosition: "top",
      titleColor: "text-black",
      subtitleColor: "text-black",
      customBg: "bg-white border-[1px] border-gray-300",
      buttons: [
        {
          label: "Get your estimate",
          className: "border border-blue-600 text-white bg-blue-600",
        },
      ],
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-2 px-2 py-4">
      {cards.map((c, i) => (
        <Card key={i} {...c} />
      ))}
    </section>
  );
};

export default GridSection;
