import React from 'react'
import blogimg from "../../assets/blogspage/blogimg.svg";
import offerfooter from "../../assets/homepage/offer-footer.svg";

const Blog1 = () => {
  return (
    <>
    <div className="bg-white">
      <div className="px-12 mx-auto py-8">
        <div className="text-start">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#011016] pb-10 pt-6 font-atyp font-extrabold animate-slideInFromLeft w-2/3">
          Maintain healthy teeth with regular<br/> dental check-ups annually recommended.
          </h1>
        </div>
        <div className="mt-6 relative">
          <img
            src={blogimg}
            alt="service image"
            className="w-full h-96 object-cover rounded-lg animate-slideInFromDown"
          />
        </div>
      </div>
    </div>
    <footer className="my-14">
        <img src={offerfooter} alt="" className="h-14"/>
      </footer>
    </>
  )
}

export default Blog1
