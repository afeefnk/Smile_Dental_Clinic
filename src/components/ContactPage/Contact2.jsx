import React from "react";
import location from "../../assets/contactpage/location.svg";
import mail from "../../assets/contactpage/mail.svg";
import call from "../../assets/contactpage/call.svg";
import facebook from "../../assets/contactpage/Facebook.svg";
import instagram from "../../assets/contactpage/instagram.svg";
import linkedin from "../../assets/contactpage/Linkedin.svg";
import whatsapp from "../../assets/contactpage/WhatsApp.svg";
import calling from "../../assets/contactpage/calling.svg";

const Contact2 = () => {
  return (
    <div className="container mx-auto px-12 py-10 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Address Details Section */}
        <div>
          <h2 className="text-2xl sm:text-5xl font-atyp mb-6 text-[#0E0E0E]">Address</h2>

          {/* Contact Info */}
          <ul className="space-y-7">
            <li className="flex items-center border-b-2 pb-3 w-2/3">
              <div className="w-10 h-10 flex justify-center items-center bg-[#FFFAF5] border-2 border-[#F58220] rounded-full mr-4 hover:scale-105 transition duration-300">
                <img src={location} alt="" />
              </div>
              <span className="text-[#C5C5C5] font-poppins">
                Room No: 314 Al Attar Shopping Mall <br />
                Next to Karama Center, Al Karama, <br />
                P.O.Box: 125706, Dubai, UAE
              </span>
            </li>
            <li className="flex items-center border-b-2 pb-3 w-2/3">
              <div className="w-10 h-10 flex justify-center items-center bg-[#FFFAF5] border-2 border-[#F58220] rounded-full mr-4 hover:scale-105 transition duration-300">
                <img src={call} alt="" />
              </div>
              <span className="text-[#C5C5C5] font-poppins">
                Phone: +971 4 2979464 <br />
                Phone: +971 56 4848613
              </span>
            </li>
            <li className="flex items-center border-b-2 pb-3 w-2/3">
              <div className="w-10 h-10 flex justify-center items-center bg-[#FFFAF5] border-2 border-[#F58220] rounded-full mr-4 hover:scale-105 transition duration-300">
                <img src={mail} alt="" />
              </div>
              <span className="text-[#C5C5C5] font-poppins">
                Room No: 314 Al Attar Shopping Mall <br />
                Next to Karama Center, Al Karama, <br />
                P.O.Box: 125706, Dubai, UAE
              </span>
            </li>
          </ul>

          {/* Social Media Links */}
          <div className="mt-6">
            <h3 className="text-[#0E0E0E] font-semibold mb-3 font-atypr">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 flex justify-center items-center border-2 border-[#E8E8E8] text-gray-600 hover:bg-orange-100 hover:text-orange-500 rounded-md  transition"
              >
                <img src={facebook} alt="" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex justify-center items-center border-2 border-[#E8E8E8] text-gray-600 hover:bg-orange-100 hover:text-orange-500 rounded-md  transition"
              >
                <img src={instagram} alt="" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex justify-center items-center border-2 border-[#E8E8E8] text-gray-600 hover:bg-orange-100 hover:text-orange-500 rounded-md  transition"
              >
                <img src={linkedin} alt="" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex justify-center items-center border-2 border-[#E8E8E8] text-gray-600 hover:bg-orange-100 hover:text-orange-500 rounded-md  transition"
              >
                <img src={whatsapp} alt="" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex justify-center items-center border-2 border-[#E8E8E8] text-gray-600 hover:bg-orange-100 hover:text-orange-500 rounded-md  transition"
              >
                <img src={calling} alt="" />
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div>
          <iframe
            title="Google Map"
            className="w-full h-64 lg:h-full rounded-lg -ml-60" style={{width:'930px'}}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3608.746139724518!2d55.2998529!3d25.245474!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43278d22325f%3A0x8ac8539640a83c8e!2sSmile%20Essentials%20Dental%20Clinic%20L.L.C%2C%20Best%20in%20Karama%20Dubai!5e0!3m2!1sen!2sin!4v1733292375079!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
