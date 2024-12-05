import React from "react";
import promotionimg from "../../assets/promotionpage/promotionimg.svg";
import offerfooter from "../../assets/homepage/offer-footer.svg";

const Promotion1 = () => {
  return (
    <>
    <div className="bg-white">
      <div className=" px-12 mx-auto py-8">
        <div className="text-start">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#011016] pb-10 pt-6 font-atyp font-extrabold animate-slideInFromLeft w-1/2">
            New patients receive free consultation and dental exam today.
          </h1>
        </div>
        <div className="mt-6 relative">
          <img
            src={promotionimg} // Replace with actual image URL
            alt="service image"
            className="w-full h-96 object-cover rounded-lg animate-slideInFromDown"
          />
          {/* Floating buttons */}
        </div>
      </div>
    </div>
    <footer className="my-14">
        <img src={offerfooter} alt="" className="h-14"/>
      </footer>
    </>
  );
};

export default Promotion1;
