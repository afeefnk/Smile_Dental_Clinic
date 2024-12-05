import React from "react";
import banner from "../../assets/promotionpage/banner.svg";

const PromotionCard = ({ title, img, price }) => {

  return (
    <div className="bg-white border-1 border-[#E8E8E8] p-3 rounded-lg overflow-hidden hover:shadow-lg  mt-10 transform hover:scale-105 transition duration-300">
  <div className="relative">
    {/* Main Image */}
    <img src={img} alt={title} className="w-full object-cover rounded-lg" />
    
    {/* Banner Image */}
    <div className="relative">
    <img
      src={banner}
      alt=""
      className="absolute bottom-2 -right-2  w-44 h-24"
      />
      <p className="absolute bottom-0 -right-7 -rotate-6  w-44 h-24 text-white font-atypr text-lg pt-2">Starting From</p>
      <p className="absolute -bottom-10 -right-4 text-center -rotate-6  w-44 h-24 text-[#F58220] font-atyp text-xl pt-2">AED {price}</p>
    </div>
  </div>
  <div className="py-4">
    <h3 className="text-lg font-atypr text-[#011016] text-center font-semibold">{title}</h3>
    <a href="">
    <button className="mt-4 -mb-4 w-full border-2 border-[#F58220]  text-[#231F20] py-2 rounded-lg hover:bg-[#F58220] transition duration-300 font-atypr hover:text-white font-semibold">
      Get Offer
    </button>
    </a>
  </div>
</div>

  );
};

export default PromotionCard;
