// import React from "react";
import logo from "../../assets/homepage/footerlogo.svg";
import facebook from "../../assets/homepage/_Facebook.svg";
import instagram from "../../assets/homepage/_Instagram.svg";
import linkedin from "../../assets/homepage/_Linkedin.svg";
import whatsapp from "../../assets/homepage/_WhatsApp.svg";
import calling from "../../assets/homepage/calling.svg";

const Footer = () => {
  return (
    <footer className="bg-[#011016] text-white py-10 mt-40 px-4 justify-between">
      <img src={logo} alt="" className="py-10 pb-20" />
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-40">
        {/* Get In Touch Section */}
        <div>
          <h3 className="text-2xl mb-4 font-atypr font-semibold">
            Get In Touch
          </h3>
          <p className="font-poppins">Contact Number</p>
          <p className="font-poppins">+971 4 2979464</p>
          <p className="font-poppins">+971 56 4848613</p>
          <p className="mt-4 font-poppins mb-3">Email</p>
          <p className="font-poppins hover:scale-105 transition duration-300">
            <a href="mailto:info@smiledentaldubai.com">
              info@smiledentaldubai.com
            </a>
          </p>
          <div className="flex space-x-4 pt-4 ">
            <a href="#">
              <img
                src={facebook}
                alt=""
                className="w-5 h-5 hover:scale-105 transition duration-300"
              />
            </a>
            <a href="#">
              <img
                src={instagram}
                alt=""
                className="w-5 h-5 hover:scale-105 transition duration-300"
              />
            </a>
            <a href="#">
              <img
                src={linkedin}
                alt=""
                className="w-5 h-5 hover:scale-105 transition duration-300"
              />
            </a>
            <a href="#">
              <img
                src={whatsapp}
                alt=""
                className="w-5 h-5 hover:scale-105 transition duration-300"
              />
            </a>
            <a href="#">
              <img
                src={calling}
                alt=""
                className="w-5 h-5 hover:scale-105 transition duration-300"
              />
            </a>
          </div>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 font-atypr">
            Our Address
          </h3>
          <p>Room No: 314 Al Attar Shopping Mall</p>
          <p>Next to Karama Center, Al Karama</p>
          <p>P.O. Box: 125706, Dubai, UAE</p>
          <h3 className="text-2xl font-normal my-10 font-outfit">
            Location Map
          </h3>
          <div className="my-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3608.746139724518!2d55.2998529!3d25.245474!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43278d22325f%3A0x8ac8539640a83c8e!2sSmile%20Essentials%20Dental%20Clinic%20L.L.C%2C%20Best%20in%20Karama%20Dubai!5e0!3m2!1sen!2sin!4v1733292375079!5m2!1sen!2sin"
              width="340"
              height="150"
              className="rounded-xl cursor-pointer"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Quick Links 1 */}

        <div>
          <h3 className="text-2xl font-semibold mb-4 font-atypr">
            Quick Links
          </h3>
          <ul className="font-poppins space-y-3">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/aboutpage">About Us</a>
            </li>
            <li>
              <a href="/servicepage">Services</a>
            </li>
            <li>
              <a href="/gallerypage">Gallery</a>
            </li>
            <li>
              <a href="/blogspage">Blogs</a>
            </li>
            <li>
              <a href="/contactpage">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Quick Links 2 */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 font-atypr">
            Quick Links
          </h3>
          <ul>
            <li>
              <a href="#">Children's Dentistry</a>
            </li>
            <li>
              <a href="#">General Dentistry</a>
            </li>
          </ul>
          <h3 className="text-2xl font-semibold mt-16 mb-4 font-atypr">
            Quick Links
          </h3>
          <p className="font-poppins">Open all 7 days</p>
          <p className="font-poppins">9:00 AM to 9:00 PM</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm  mt-8 border-t border-gray-600 pt-4 text-[#233E48]">
        @copyright all reserved by Smile Essentials - Powered by Hoztox
        Technologies
      </div>
    </footer>
  );
};

export default Footer;
