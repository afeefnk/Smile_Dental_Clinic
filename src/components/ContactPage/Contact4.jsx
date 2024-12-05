import React from 'react'
import dentistimg from "../../assets/contactpage/dentistimg.svg";
import illustration from "../../assets/contactpage/Illustration.svg"; // Uncomment if needed

const Contact4 = () => {
  return (
    <div className="relative max-w-8xl mx-12 max-h-96 bg-[#FFFAF5] sm:px-12 lg:px-16 rounded-xl my-12 py-24">
      {/* Background Grid */}
      <div
  className="absolute inset-0 w-full"
  style={{
    backgroundImage: `url(${illustration})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%", // Increase the size
    backgroundPosition: "center", // Adjust positioning if needed
  }}
></div>


      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl mx-auto">
        {/* Left Section: Text */}
        <div className="text-[#F58220]">
          <h1 className="text-3xl sm:text-4xl font-atyp leading-tight mb-6 -mt-28 w-2/3">
            Have a question or need assistance<span className="font-atyp font-bold">?</span>
          </h1>
          <p className="text-lg mb-8 leading-relaxed text-[#231F20]">
            Do not hesitate to ask any kind of information you may need.
          </p>
          <button className="bg-[#231F20] text-white py-3 px-8 rounded-lg font-atypr text-lg hover:bg-black transition-all duration-300">
          Let’s Talk
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src={dentistimg}
            alt="Doctor"
            className="lg:max-w-xl xl:max-w-2xl lg:translate-y-[-65px] w-full h-auto"
            style={{ zIndex: 2 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact4;
