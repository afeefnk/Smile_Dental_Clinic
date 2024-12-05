import React, { useState } from "react";
import blogimg4 from "../../assets/blogspage/blogimg4.svg";
import blogimg5 from "../../assets/blogspage/blogimg5.svg";
import blogimg6 from "../../assets/blogspage/blogimg6.svg";

const Blog3 = () => {
  const blogData = {
    "Treatment Planning": [
      {
        id: 1,
        title: "Long-Term Success and Satisfaction",
        description:
          "Numerous studies have demonstrated the high success rate and patient satisfaction associated with veneers. According to a survey conducted by the American Academy of Cosmetic Dentistry,",
        image: blogimg4,
      },
    ],
    "Whitening Method": [
      {
        id: 2,
        title: "Long-Term Success and Satisfaction",
        description:
          "Numerous studies have demonstrated the high success rate and patient satisfaction associated with veneers. According to a survey conducted by the American Academy of Cosmetic Dentistry,",
        image: blogimg4,
      },
      {
        id: 3,
        title: "Consultation with a Dental Professional",
        description:
          "The first step in determining whether veneers can straighten your crooked teeth is to schedule a consultation with a qualified dental professional. During this visit, your dentist will",
        image: blogimg5,
      },
      {
        id: 4,
        title: "Choosing the Whitening Method",
        description:
          "There are several whitening options available for veneer teeth, including professional in-office treatments and at-home whitening kits prescribed by your dentist. Professional in-office",
        image: blogimg6,
      },
      {
        id: 5,
        title: "Long-Term Success and Satisfaction",
        description:
          "Numerous studies have demonstrated the high success rate and patient satisfaction associated with veneers. According to a survey conducted by the American Academy of Cosmetic Dentistry,",
        image: blogimg4,
      },
      {
        id: 6,
        title: "Consultation with a Dental Professional",
        description:
          "The first step in determining whether veneers can straighten your crooked teeth is to schedule a consultation with a qualified dental professional. During this visit, your dentist will",
        image: blogimg5,
      },
      {
        id: 7,
        title: "Choosing the Whitening Method",
        description:
          "There are several whitening options available for veneer teeth, including professional in-office treatments and at-home whitening kits prescribed by your dentist. Professional in-office",
        image: blogimg6,
      },
    ],
    "Maintenance and Aftercare": [
      {
        id: 8,
        title: "Consultation with a Dental Professional",
        description:
          "The first step in determining whether veneers can straighten your crooked teeth is to schedule a consultation with a qualified dental professional. During this visit, your dentist will",
        image: blogimg5,
      },
    ],
    "At-Home Whitening Kits": [
      {
        id: 9,
        title: "Choosing the Whitening Method",
        description:
          "There are several whitening options available for veneer teeth, including professional in-office treatments and at-home whitening kits prescribed by your dentist. Professional in-office",
        image: blogimg6,
      },
    ],
  };

  // State for managing selected category
  const [selectedCategory, setSelectedCategory] = useState("Whitening Method");

  return (
    <div className="bg-white text-[#011016] pt-32 px-5">
      {/* Heading */}
      <div className="max-w-8xl mx-auto">
        <h2 className="text-5xl  text-start mb-6 font-atyp">Recent Blogs</h2>

        {/* Category Filters */}
        <div className="flex justify-start space-x-4 mb-8">
          {Object.keys(blogData).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 border rounded-full transition duration-300 ${
                selectedCategory === category
                  ? "bg-[#231F20] text-white"
                  : "text-[#C5C5C5] hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData[selectedCategory].map((blog) => (
            <div key={blog.id} className="bg-white overflow-hidden hover:shadow-lg hover:scale-105 transition duration-300 p-2">
              <img
                src={blog.image}
                alt={blog.title}
                className=" object-cover rounded-lg "
              />
              <div className="py-4">
                <p className="text-[#C5C5C5] text-lg flex items-center">
                  Daily outfit
                  <span className="w-1 h-1 bg-[#C5C5C5] mx-2"></span>2 min reads
                </p>    
                <h3 className="text-2xl font-atypr py-2 w-2/3">{blog.title}</h3>
                <p className="text-[#C5C5C5] mr-3">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 primary-btn font-normal text-white rounded-lg">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};
export default Blog3;
