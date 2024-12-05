import React from "react";
import shield from "../../assets/aboutpage/shield.svg";
import hand from "../../assets/aboutpage/hand.png";
import treatment from "../../assets/aboutpage/treatment.svg";
import phone from "../../assets/aboutpage/phone.svg";
import building from "../../assets/aboutpage/building.svg";

const Service3 = () => {
  const facilities = [
    {
      icon: shield,
      title: "Fully Hygienic atmosphere",
      isImage: true,
    },
    {
      icon: hand,
      title: "A relaxed and sterilized environment",
      isImage: true,
      size: "w-16 h-16",
    },
    {
      icon: treatment,
      title: "Latest and sterilized equipment's",
      isImage: true,
      size: "w-16 h-16",
    },
    {
      icon: phone,
      title: "All Dental Supports",
      isImage: true,
    },
    {
      icon: building,
      title: "Eco Friendly Hospital Blocks",
      isImage: true,
    },
  ];

  return (
    <section className="py-24 bg-[#011016] rounded-lg mx-12 pb-18 my-28">
      <h2 className="text-5xl font-semibold text-center text-white mb-14 font-atyp">
        Our Facilities
      </h2>
      {/* Adjust the gap to reduce space between circles */}
      <div className="flex flex-wrap justify-center gap-6 lg:gap-24">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 w-48 text-center"
          >
            <div className="flex items-center justify-center w-24 h-24 bg-[#FFFAF5] rounded-full transform transition-transform duration-300 hover:scale-105">
              {facility.isImage ? (
                <img
                  src={facility.icon}
                  alt={facility.title}
                  className={`${
                    facility.size || "w-12 h-12"
                  }`} // Dynamically apply size
                />
              ) : (
                <span className="text-orange-500 text-4xl">{facility.icon}</span>
              )}
            </div>
            <p
              className="text-white font-atypr text-lg"
              style={{ fontWeight: "bold" }}
            >
              {facility.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service3;
