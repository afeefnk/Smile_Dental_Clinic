import React from 'react'
import primg1 from "../../assets/promotionpage/pr-img1.svg";
import primg2 from "../../assets/promotionpage/pr-img2.svg";
import primg3 from "../../assets/promotionpage/pr-img3.svg";
import primg4 from "../../assets/promotionpage/pr-img4.svg";
import primg5 from "../../assets/promotionpage/pr-img5.svg"; 
import primg6 from "../../assets/promotionpage/pr-img6.svg"; 
import primg7 from "../../assets/promotionpage/pr-img-7.svg"; 
import primg8 from "../../assets/promotionpage/pr-img8.svg"; 

import PromotionCard from './PromotionCard';

const Promotion2 = () => {
    const promotion = [
        { title: "Orthodontics",img: primg1, price: 500 },
        { title: "General Dentistry", img: primg2, price: 2000 },
        { title: "Cosmetic Dentistry", img: primg3, price: 699 },
        { title: "Teeth Whitening", img: primg4, price: 199 },
        { title: "Gum Treatment", img: primg5, price: 500 },
        { title: "Root Canal Treatment", img: primg6, price: 2000 },
        { title: "Crowns and Bridges", img: primg7, price: 699 },
        { title: "Jaw Joint Disorder", img: primg8, price: 199 },
        { title: "Children's Dentistry", img: primg1, price: 500 },
      ];
  return (
    <div className="p-8  min-h-screen px-12">
    <header className="text-start mb-8">
    <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#011016] pb-10 pt-6 font-atyp font-extrabold animate-slideInFromLeft w-1/2">
    Unlock your smile’s potential with
    Our exclusive dental offers for this month
    </h1>
      <p className="text-[#9E9E9E] mt-2 w-1/2">
        Lorem ipsum available, but the majority have suffered alteration in
        some form, by injected humour, or randomised words which don't look
        even.
      </p>
    </header>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
      {promotion.map((offer, index) => (
        <PromotionCard
          key={index}
          title={offer.title}
          price={offer.price}
          img={offer.img}
        />
      ))}
    </div>
  </div>
  )
}

export default Promotion2
