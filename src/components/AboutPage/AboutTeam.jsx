import React from 'react'
import dr1 from "../../assets/homepage/dr1.svg";
import dr2 from "../../assets/homepage/dr2.svg";
import dr3 from "../../assets/homepage/dr3.svg";
import dr4 from "../../assets/homepage/dr4.svg";
import offerfooter from "../../assets/homepage/offer-footer.svg";

const AboutTeam = () => {
    const teamMembers = [
        { name: "Dr. Jhon Paul", role: "General Dentist", image: dr1 },
        {
          name: "Dr. Khaled Abul",
          role: "Children's Dentist",
          image: dr2,
        },
        {
          name: "Dr. Marwan Serhal",
          role: "Children's Dentist",
          image: dr3,
        },
        {
          name: "Dr. Chinchu Mathew",
          role: "Children's Dentist",
          image: dr4,
        },
      ];
    
      return (
        <>
        <div className="px-10 pt-14">
          <div className="flex max-w-8xl mx-auto text-start relative">
            {/* Heading Section */}
            <h1 className="text-5xl font-medium  mb-4 font-atyp text-[#011016] pr-24">Meet Our Team</h1>
            <p className="text-[#9E9E9E] font-poppins font-light">
              Lorem Ipsum available, but the majority have suffered alteration in
              some form,<br/> by injected humour, or randomised words which don't look
              even.
            </p>
          </div>
    
          {/* Team Grid */}
          <div className="relative mt-5">
            <div className="absolute inset-0 bg-[#011016] h-[-50%]">
              <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="relative bg-white rounded-md  overflow-hidden transform hover:scale-105 transition duration-300"
                  >
                    {/* Image Section */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-[370px] object-cover rounded-md"
                    />
                    {/* Text Section Below Frame */}
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 mt-4 font-outfit">
                        {member.name}
                      </h3>
                      <p className="text-gray-400 font-outfit font-light">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
    
              {/* View All Button */}
              <div className="relative flex justify-center">
                <button className="primary-btn text-white px-7 py-3 rounded-lg my-12 font-normal">
                  View All Team
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-white pt-20 pb-96 px-4">
        </div>
        <footer className="my-44">
        <img src={offerfooter} alt="" className="h-14"/>
      </footer>
        </>
      );
    };
    

export default AboutTeam
