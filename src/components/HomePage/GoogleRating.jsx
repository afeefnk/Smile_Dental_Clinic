import React, { useState } from "react";
import GoogleLogo from "../../assets/homepage/GoogleLogo.svg";
import stars from "../../assets/homepage/stars.svg";
const GoogleRating = ({ rating }) => {
  // Ensure the rating is within the range [0, 5]
  const [sanitizedRating, setsanitizedRating] = useState(4.8);

  return (
    <div className="flex bg-white shadow-lg rounded-lg p-3 my-6 w-64  items-center border-t-4 border-[#34A853] animate-slideInFromTop">
      {/* Google Logo */}
      <div className=" mb-2 mx-2">
        <img src={GoogleLogo} alt="" />
      </div>
      {/* Rating */}
      <div className="flex flex-col items-start ">
        <span className="text-sm font-medium text-[#6A6A6A]">
          Google Rating
        </span>
        <div className="flex">
          <span className="text-xl font-bold mr-2 text-[#FEA500]">
            {sanitizedRating}
          </span>
          <img src={stars} alt="" />
        </div>
        <a
          href="https://www.google.com/maps/place/Smile+Essentials+Dental+Clinic+L.L.C,+Best+in+Karama+Dubai/@25.245474,55.2998529,17z/data=!4m8!3m7!1s0x3e5f43278d22325f:0x8ac8539640a83c8e!8m2!3d25.2454692!4d55.3024278!9m1!1b1!16s%2Fg%2F11c4657m9k?authuser=0&entry=ttu&g_ep=EgoyMDI0MTIwMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-xs text-[#868686] transform hover:scale-105 transition duration-300">See all our reviews</p>
        </a>
      </div>
    </div>
  );
};

export default GoogleRating;
