import React from 'react'
import callicon from "../assets/homepage/call.svg";
import whatsappicon from "../assets/homepage/whatsapp.svg";

const SideContact = () => {
  return (
    <>
   {/* Contact Icons positioned vertically on the right */}
   <div className="fixed top-96 right-3 flex flex-col -space-y-14 mt-6 z-10">
    <a href="">
   <img
     src={callicon}
     alt="Call Icon"
     className="cursor-pointer hover:scale-105  duration-300"
   />
   </a>
   
   <a href="">
   <img
     src={whatsappicon}
     alt="WhatsApp Icon"
     className="cursor-pointer hover:scale-105  duration-300"
   />
   </a>
 </div>
 </>
  )
}

export default SideContact
