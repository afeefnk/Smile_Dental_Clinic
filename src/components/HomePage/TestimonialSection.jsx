import testomonialimg from "../../assets/homepage/testimonialimg.svg";
import mark from "../../assets/homepage/mark.svg";
import client1 from "../../assets/homepage/client1.svg";
import client2 from "../../assets/homepage/client2.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TestimonialSection  = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // hides next/prev buttons
    customPaging: (i) => (
      <div className="w-4 h-4 rounded-full bg-white my-8 "></div>
    ),
  };

    return (
        <div className="bg-[#F58220] text-white py-14">
          <div className="max-w-7xl  px-6 lg:px-8">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row items-center mb-12">
              <div className="lg:w-1/2 mb-6 lg:mb-0 mt-11">
                <img
                  src={testomonialimg}
                  alt="Happy Clients"
                  className="rounded-lg"
                />
              </div>
              <div className="lg:w-1/2 text-left lg:text-left">
                <h2 className="text-4xl lg:text-5xl font-semibold mb-4 font-atyp">
                  500+ Happy clients said<br/> to us they are satisfied
                </h2>
              </div>
            </div>
    
            {/* Testimonials Section */}
            <div className="relative ml-80 -mt-48 mx-96 mb-16">
            <Slider {...settings}>
              {/* Testimonial 1 */}
              <div className="bg-white text-black p-6 rounded-3xl ">
                <div>
                    <img src={mark} alt="" className="mb-4" />
                </div>
                <p className="text-sm mb-4 font-poppins font-normal text-[#838383] pb-3">
                  We value your feedback and are committed to providing exceptional service to all our clients. If you have any concerns or questions
                </p>
                <div className="border-t border-gray-200 py-2"></div>
                <div className="flex items-center mt-4">
                  <img
                    src={client1}
                    alt="Jang Wonyoung"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="font-poppins">
                    <h4 className="font-bold text-sm ">Jang Wonyoung</h4>
                    <p className="text-xs text-gray-500">Korea</p>
                  </div>
                </div>
              </div>
    
              {/* Testimonial 2 */}
              <div className="bg-white text-black p-6 rounded-3xl">
                <div>
                    <img src={mark} alt="" className="mb-4" />
                </div>
                <p className="text-sm mb-4 font-poppins font-normal text-[#838383] pb-3">
                Our priority, and we appreciate the opportunity to address any issues and ensure your complete satisfaction.
                </p>
                <div className="border-t border-gray-200 py-2"></div>
                <div className="flex items-center mt-4">
                  <img
                    src={client2}
                    alt="Jang Wonyoung"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="font-poppins">
                    <h4 className="font-bold text-sm ">Jennie Kim</h4>
                    <p className="text-xs text-gray-500">USA</p>
                  </div>
                </div>
              </div>
              </Slider>
            </div>
          </div>
            {/* Pagination Dots */}
            {/* <div className="flex justify-center mt-8">
              <img src={dot} alt="" className="cursor-pointer"/>
            </div> */}
        </div>
      );
    };

export default TestimonialSection 
