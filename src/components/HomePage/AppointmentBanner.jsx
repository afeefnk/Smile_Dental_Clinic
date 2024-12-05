// import React from "react";
import doctorimg from "../../assets/homepage/doctorimg.svg";
import lines from "../../assets/homepage/lines.svg";

const AppointmentBanner = () => {
  return (
    <div className="relative max-w-8xl mx-20 max-h-96 bg-[#F58220] px-6 sm:px-12 lg:px-16 rounded-xl">
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${lines})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center", // Adjust this if needed
        }}
      ></div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl mx-auto ">
        {/* Left Section: Text */}
        <div className="text-white">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6 -mt-28 font-atyp">
            Book an Appointment With Your Doctor NOW!
          </h1>
          <p className="text-lg font-light mb-8 leading-relaxed">
            Conveniently pay for your dental treatments with your insurance.
            <br /> We accept major insurance providers.
          </p>
          <button className="bg-[#231F20] text-white py-3 px-8 rounded-lg font-outfit text-lg font-light hover:bg-black transition-all duration-300">
            Book Now
          </button>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <img
            src={doctorimg}
            alt="Doctor"
            className="w-[61%] lg:max-w-md lg:translate-y-[-102px]"
            // style={{ zIndex: 0 }}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
