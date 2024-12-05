import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/homepage/logo.svg";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About Us", path: "/aboutpage" },
  { id: 3, title: "Services", path: "/servicepage" },
  { id: 4, title: "Gallery", path: "/gallerypage" },
  { id: 5, title: "Promotions", path: "/promotionpage" },
  { id: 6, title: "Blogs", path: "/blogspage" },
  { id: 7, title: "Contact Us", path: "/contactpage" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e) => {
    // Scroll to top of the page when a menu item is clicked
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 py-3 flex justify-between items-center"
        >
          {/* Logo section */}
          <div className="w-20 sm:w-28 md:w-36 lg:w-40">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <ul className="flex items-center space-x-2 xl:space-x-4">
              {NavbarMenu.map((menu, index) => (
                <li
                  key={menu.id}
                  className={`flex items-center group relative ${
                    location.pathname === menu.path
                      ? "font-medium text-[#F58220]"
                      : ""
                  }`}
                >
                  <Link
                    to={menu.path}
                    onClick={handleLinkClick} // Scroll to top when clicked
                    className={`text-sm xl:text-base px-2 xl:px-4 py-2 transition duration-300 ease-in-out ${
                      location.pathname === menu.path
                        ? "text-[#F58220]"
                        : "text-[#011016] hover:text-[#F58220]"
                    }`}
                  >
                    {menu.title}
                  </Link>
                  {/* Separator dot */}
                  {index < NavbarMenu.length - 1 && (
                    <span className="w-1.5 h-1.5 bg-[#011016] rounded-full mx-2"></span>
                  )}
                </li>
              ))}
              <Link
                to="/appointment"
                className="ml-4 px-4 py-2 primary-btn font-normal text-white 
                  rounded-md text-sm xl:text-base"
              >
                Appointment
              </Link>
            </ul>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-2xl sm:text-3xl text-gray-700 
                focus:outline-none focus:ring-2 focus:ring-[#F58220]/50"
            >
              {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg"
          >
            <ul className="flex flex-col items-center divide-y divide-gray-100">
              {NavbarMenu.map((menu) => (
                <li
                  key={menu.id}
                  className={`w-full text-center ${
                    location.pathname === menu.path
                      ? "bg-gray-100 text-[#F58220]"
                      : ""
                  }`}
                >
                  <Link
                    to={menu.path}
                    onClick={handleLinkClick} // Scroll to top when clicked
                    className="block py-3 px-4 text-gray-700 
                      hover:bg-gray-50 hover:text-[#F58220] 
                      transition duration-300 ease-in-out"
                    onClick={toggleMobileMenu}
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
              <li className="w-1/2 py-4">
                <Link
                  to="/"
                  onClick={handleLinkClick} // Scroll to top when clicked
                  className="mx-4 block text-center px-6 py-3 
                    bg-[#F58220] text-white rounded-md
                    hover:bg-opacity-90 transition duration-300"
                  onClick={toggleMobileMenu}
                >
                  Appointment
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>

      {/* Content below the fixed navbar */}
      <div className="pt-20 sm:pt-24 lg:pt-28">
        {/* Page content */}
      </div>
    </>
  );
};

export default Navbar;
