// import React from 'react'
import "./gallery2.css";


import gallery1 from "../../assets/gallerypage/gallery1.svg";
import gallery2 from "../../assets/gallerypage/gallery2.svg";
import gallery3 from "../../assets/gallerypage/gallery3.svg";
import gallery4 from "../../assets/gallerypage/gallery4.svg";
import gallery5 from "../../assets/gallerypage/gallery5.svg";
import gallery6 from "../../assets/gallerypage/gallery6.svg";

const Gallery2 = () => {
    
      return (
        <div className="container py-16 ">
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className='space-y-6'>
                <div>
                <img src={gallery1} alt="" width='auto' height='287px' className='rounded-lg hover:scale-105 transition duration-300'/>
                <h2>Gum Treatement</h2>
                </div>
                <div>
               <img src={gallery2} alt="" width='auto' height='287px' className='rounded-lg hover:scale-105 transition duration-300'/>
               <h2>Gum Treatement</h2>
               </div>
            </div>

            <div className='space-y-6'>
                <div>
                <img src={gallery3} alt="" width='auto' height='287px' className='rounded-lg hover:scale-105 transition duration-300'/>
                <h2>Gum Treatement</h2>
                </div>
                <div>
               <img src={gallery4} alt="" width='auto' height='287px' className='rounded-lg hover:scale-105 transition duration-300'/>
               <h2>Gum Treatement</h2>
               </div>
            </div>

            <div className='space-y-6'>
                <div>
                <img src={gallery5} alt="" width='auto' height='287px' className='rounded-lg hover:scale-105 transition duration-300'/>
                <h2>Gum Treatement</h2>
                </div>
                <div>
               <img src={gallery6} alt="" width='auto' height='287px' className='rounded-lg hover:scale-105 transition duration-300'/>
               <h2>Gum Treatement</h2>
               </div>
            </div>
          </div>
          {/* View All Button */}
          <div className="flex justify-center mt-6">
            <button className="primary-btn text-white px-6 py-2 rounded-md ">
              View All
            </button>
          </div>
        </div>
      );
    };

export default Gallery2
