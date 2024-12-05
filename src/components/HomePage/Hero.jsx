import { useRef } from "react";
import bgimg from "../../assets/homepage/bgimg.svg";
import larrow from "../../assets/homepage/leftarrow.svg";
import rarrow from "../../assets/homepage/rightarrow.svg";
import people from "../../assets/homepage/People.svg";
import teeth from "../../assets/homepage/teeth.svg";
import reviews from "../../assets/homepage/reviews.svg";
import patients from "../../assets/homepage/patients.svg";
import dentist from "../../assets/homepage/dentist.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import GoogleRating from "./GoogleRating";

const Hero = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,                
    arrows: false,
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="relative w-full overflow-hidden -mt-8">
      <Slider {...settings} ref={sliderRef}>
        {/* Slide 1 */}
        <div className="relative min-h-screen flex flex-col items-start justify-between px-4 md:px-14">
          <div className="absolute inset-0 -z-10">
            <img
              src={bgimg}
              alt="Background"
              style={{ width: "75%", objectFit: "cover" }}
              className="absolute -z-10 top-0 left-96 h-full"
            />
          </div>

          <div className="w-full max-w-4xl flex flex-col items-start px-5">
            <h1 className="text-4xl md:text-7xl font-medium mb-6 text-left font-atyp animate-slideInFromTop mt-20 text-[#011016]">
              Have a shining <br />
              smile with our <br />
              <span className="text-[#F58220]">modern methods!</span>
            </h1>
            
            <GoogleRating/>
          </div>

          <div className="absolute top-14 md:right-8 w-1/2 md:w-1/6 text-center bg-gray-200 p-3 rounded-lg shadow-md border-2 border-white animate-slideInFromTop  hover:scale-105  duration-300">
            <p className="text-orange-500 font-normal text-xl font-outfit text-start">
              <span className="font-bold text-2xl">15+ </span> Expert Doctors
            </p>
            <img src={people} alt="" className="mt-3 mx-auto" />
            <p className="text-gray-800 mt-3 text-sm text-left">
              We take meticulous care of <br /> your dental needs <br /> to
              ensure a healthy, lasting smile.
            </p>
          </div>
        </div>

        {/* Slide 2 (Identical structure to Slide 1) */}
        <div className="relative min-h-screen flex flex-col items-start justify-between px-4 md:px-14">
          <div className="absolute inset-0 -z-10">
            <img
              src={bgimg}
              alt="Background"
              style={{ width: "75%", objectFit: "cover" }}
              className="absolute -z-10 top-0 left-96 h-full"
            />
          </div>

          <div className="w-full max-w-4xl flex flex-col items-start px-5">
            <h1 className="text-4xl md:text-7xl mb-6 text-left font-atypr animate-slideInFromTop mt-20 text-black">
            Expert <br/>Care for the
            <br />
              <span className="text-[#F58220] font-atyp"> Beautiful Smiles</span>
            </h1>
            
            {/* <div className="bg-white shadow-lg rounded-lg p-3 w-56 flex flex-col items-center border-t-4 border-green-500 animate-slideInFromTop cursor-pointer mt-10 transform transition-transform duration-300 hover:scale-90">
             <a href="">
              <img src={googlereview} alt="Google Review" />
              </a>
            </div> */}
            <GoogleRating/>
          </div>

          <div className="absolute top-14 right-4 md:right-8 w-1/2 md:w-1/6 text-center bg-gray-200 p-3 rounded-lg shadow-md border-2 border-white animate-slideInFromTop hover:scale-105  duration-300">
            <p className="text-orange-500 font-normal text-xl font-outfit text-start">
              <span className="font-bold text-2xl">15+ </span> Expert Doctors
            </p>
            <img src={people} alt="" className="mt-3 mx-auto" />
            <p className="text-gray-800 mt-3 text-sm text-left">
              We take meticulous care of <br /> your dental needs <br /> to
              ensure a healthy, lasting smile.
            </p>
          </div>
        </div>
      </Slider>

      {/* Custom Arrows */}
      <div className="flex mt-16 ml-9 absolute top-1/2 w-full px-4">
        <img
          src={larrow}
          alt="Left Arrow"
          className="cursor-pointer transform transition-transform duration-300 hover:scale-110 rotate-6"
          onClick={handlePrev} // Slide to the previous slide
        />
        <img
          src={rarrow}
          alt="Right Arrow"
          className="cursor-pointer transform transition-transform duration-300 hover:scale-110"
          onClick={handleNext} // Slide to the next slide
        />
      </div>

      {/* Black Container with Stats */}
      <div className="relative w-full bg-[#011016] flex justify-center py-20">
        <div className="absolute bottom-[45%] left-0 w-full flex justify-center">
          <div className="w-full max-w-8xl mx-5 bg-white  px-4 md:p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-around items-center">
            {/* Stats */}
            <div className="flex items-center gap-x-4 mb-4 md:mb-0">
              <img
                src={teeth}
                alt=""
                className="hover:scale-105 transition duration-300"
              />
              <div className="text-left">
                <p className="text-3xl font-bold text-[#F58220] font-outfit">
                  20+ Yrs
                </p>
                <p className="text-[#5C5D61] text-sm">Dental Care</p>
              </div>
            </div>

            <div className="hidden md:block border-l-2 border-gray-200 h-12"></div>

            <div className="flex items-center gap-x-4 mb-4 md:mb-0">
              <img
                src={reviews}
                alt=""
                className="hover:scale-105 transition duration-300"
              />
              <div className="text-left">
                <p className="text-3xl font-bold text-[#F58220] font-outfit">
                  2200+
                </p>
                <p className="text-[#5C5D61] text-sm">Google Reviews</p>
              </div>
            </div>

            <div className="hidden md:block border-l-2 border-gray-200 h-12"></div>

            <div className="flex items-center gap-x-4 mb-4 md:mb-0">
              <img
                src={patients}
                alt=""
                className="hover:scale-105 transition duration-300"
              />
              <div className="text-left">
                <p className="text-3xl font-bold text-[#F58220] font-outfit">
                  50K+
                </p>
                <p className="text-[#5C5D61] text-sm">Happy Patients</p>
              </div>
            </div>

            <div className="hidden md:block border-l-2 border-gray-200 h-12"></div>

            <div className="flex items-center gap-x-4">
              <img
                src={dentist}
                alt=""
                className="hover:scale-105 transition duration-300"
              />
              <div className="text-left">
                <p className="text-3xl font-bold text-[#F58220] font-outfit">
                  15+
                </p>
                <p className="text-[#5C5D61] text-sm">Dentists</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;