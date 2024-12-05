import React from "react";
import about1 from "../../assets/aboutpage/about1.svg";
import about2 from "../../assets/aboutpage/about2.svg";
import about3 from "../../assets/aboutpage/about3.svg";
import check from "../../assets/aboutpage/check.svg";
import "./about1.css";

const About1 = () => {
  return (
    <>
      <div className="bg-white">
        <div className=" px-12 mx-auto py-8">
          <div className="text-start">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#011016] pb-10 pt-6 font-atyp font-extrabold animate-slideInFromLeft w-1/2">
              Experienced dentists providing
              quality care always nearby
            </h1>
          </div>
          <div className="mt-6 relative">
            <img
              src={about1} // Replace with actual image URL
              alt="Dentist"
              className="w-full h-96 object-cover rounded-lg animate-slideInFromDown"
            />
            {/* Floating buttons */}
          </div>
        </div>
        <div className="bg-[#021A23] py-20 lg:py-40 -my-36">
          <div className="max-w-8xl mx-auto px-12 pt-40 pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
              {/* Left Section */}
              <div className="flex flex-col justify-between mt-44">
                <div>
                  <h1 className="text-4xl lg:text-5xl leading-tight text-white font-atyp pb-10 animate-slideInFromLeft">
                    Building Trust, <br /> One Smile at a Time
                  </h1>

                  <div className="mt-10 flex flex-wrap gap-20">
                    <div className="group">
                      <h2 className="text-2xl font-semibold text-[#F58220] font-kumbh transform transition-transform duration-300 hover:scale-105">
                        5-Star
                      </h2>
                      <p className="text-[#C5C5C5] para1">
                        Ratings Across All <br />
                        Platforms
                      </p>
                    </div>
                    <div className="group">
                      <h2 className="text-2xl font-semibold text-[#F58220] font-kumbh transform transition-transform duration-300 hover:scale-105">
                        20 Yrs+
                      </h2>
                      <p className="text-[#C5C5C5] para1">
                        Years of Combined Dental <br />
                        Expertise
                      </p>
                    </div>
                    <div className="group">
                      <h2 className="text-2xl font-semibold text-[#F58220] font-kumbh transform transition-transform duration-300 hover:scale-105">
                        22K +
                      </h2>
                      <p className="text-[#C5C5C5] para1">
                        Happy Patients and <br />
                        Growing
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-start gap-14">
                  <div className="lg:w-2/3">
                    <h3 className="text-lg font-semibold mb-4 text-white">
                      About Smile Dental
                    </h3>
                    <p className="text-[#C5C5C5] para1">
                      The new leading dental healthcare in Karama, Dubai. From
                      the years of experience{" "}
                      <span className="text-[#F58220]">
                        Dr. Shajahan Fazaludeen
                      </span>{" "}
                      starts Smile Essentials Dental clinic with the most modern
                      Technologies. The team of professionals assures fresh and
                      clean, patient-oriented treatments with the best quality.
                      With the latest technologies, many dental procedures in
                      Smile Essentials can more effectively reduce treatment and
                      recovery time and achieve ultimate results.
                    </p>
                  </div>
                  <div className="w-2/3">
                    <img
                      src={about2}
                      alt="Happy patient"
                      className="rounded-lg w-full h-[350px] object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex flex-col justify-between">
                <div>
                  <img
                    src={about3}
                    alt="Dentist patient"
                    className="rounded-lg w-full h-auto lg:h-96 object-cover"
                  />
                </div>

                <div className="mt-8 grid grid-cols-2 gap-6 text-[#FFF] space-x-14">
                  <ul className="space-y-8 para1">
                    <li className="flex items-center">
                      <span className="w-6 h-6 bg-[#0734459d] mr-3">
                        <img src={check} alt="" className="w-8 h-auto" />
                      </span>
                      <p className="transform transition-transform duration-300 hover:scale-105">
                        Orthodontics
                      </p>
                    </li>
                    <li className="flex items-center ">
                      <span className="w-6 h-6 bg-[#0734459d] mr-3">
                        <img src={check} alt="" className="w-8 h-auto" />
                      </span>
                      <p className="transform transition-transform duration-300 hover:scale-105">
                        Cosmetic Dentistry
                      </p>
                    </li>
                    <li className="flex items-center ">
                      <span className="w-6 h-6 bg-[#0734459d] mr-3">
                        <img src={check} alt="" className="w-8 h-auto" />
                      </span>
                      <p className="transform transition-transform duration-300 hover:scale-105">
                        Gum Treatment
                      </p>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 bg-[#0734459d] mr-3">
                        <img src={check} alt="" className="w-8 h-auto" />
                      </span>
                      <p className="transform transition-transform duration-300 hover:scale-105">
                        Crowns and Bridges
                      </p>
                    </li>
                  </ul>
                  <ul className="space-y-8 para1">
                    <li className="flex items-center">
                      <span className="w-6 h-6 bg-[#0734459d] mr-3">
                        <img src={check} alt="" className="w-8 h-auto" />
                      </span>
                      <p className="transform transition-transform duration-300 hover:scale-105">
                        General Dentistry
                      </p>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 bg-[#0734459d] mr-3">
                        <img src={check} alt="" className="w-8 h-auto" />
                      </span>
                      <p className="transform transition-transform duration-300 hover:scale-105">
                        Teeth Whitening
                      </p>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 bg-[#0734459d] mr-3">
                        <img src={check} alt="" className="w-8 h-auto" />
                      </span>
                      <p className="transform transition-transform duration-300 hover:scale-105">
                        Root Canal Treatment
                      </p>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 bg-[#0734459d] mr-3">
                        <img src={check} alt="" className="w-8 h-auto" />
                      </span>
                      <p className="transform transition-transform duration-300 hover:scale-105">
                        Jaw Joint Disorder
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About1;
