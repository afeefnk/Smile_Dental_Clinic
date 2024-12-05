import React from "react";
import blogimg1 from "../../assets/blogspage/blogimg1.svg";
import blogimg2 from "../../assets/blogspage/blogimg2.svg";
import blogimg3 from "../../assets/blogspage/blogimg3.svg";

const Blog2 = () => {
  return (
    <>
      
        <div className="bg-[#011016] text-white pt-20 pb-48 px-4">
          {/* Main Card */}
          <div className="lg:flex lg:space-x-8">
            {/* Main Article */}
            <div className="lg:w-2/3">
              <div className="mt-3 px-4 -space-y-3 mb-3">
                <p className="text-[#C5C5C5] text-lg flex items-center">
                  Daily outfit
                  <span className="w-1 h-1 bg-[#C5C5C5] mx-2"></span>2 min reads
                </p>

                <h2 className="text-2xl lg:text-3xl mb-3 font-atypr">
                  Veneers Damage Natural Teeth
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex px-12 mx-auto py-8 -space-x-4">
          <div className="w-1/2 mb-32">
            <img
              src={blogimg1}
              alt="Main Article"
              className="rounded-lg -mt-60"
            />
            <p className="text-[#C5C5C5] mt-3 w-2/3">
              One of the most common misconceptions about veneers is that they
              ruin natural teeth. However, when performed by a skilled dentist,
              veneer placement should not harm healthy teeth...
            </p>
          </div>
          {/* Side Articles */}
          <div className="lg:w-1/2 space-y-8 -mt-60">
            {/* Article 1 */}
            <div className="flex space-x-4">
              <img
                src={blogimg2} // Replace with your image
                alt="Article 1"
                className="rounded-lg  object-cover"
              />
              <div className="text-white space-y-4">
                <p className="text-[#C5C5C5] text-sm flex items-center">
                  Daily outfit
                  <span className="w-1 h-1 bg-[#C5C5C5] mx-2"></span>2 min reads
                </p>

                <h3 className="text-2xl font-atypr mb-1 w-2/3">
                  Preservation of Tooth Structure
                </h3>
                <p className="text-white mt-3 w-2/3">
                  Studies have shown that properly placed veneers can preserve
                  more of the natural tooth structure compared
                </p>
              </div>
            </div>

            {/* Article 2 */}
            <div className="flex space-x-4">
              <img
                src={blogimg3} // Replace with your image
                alt="Article 2"
                className="rounded-lg object-cover"
              />
              <div>
              <p className="text-[#C5C5C5] text-sm flex items-center">
                  Daily outfit
                  <span className="w-1 h-1 bg-[#C5C5C5] mx-2"></span>2 min reads
                </p>
                <h3 className="text-2xl font-atypr mb-1 w-2/3">
                  Veneers Cause Tooth Sensitivity
                </h3>
                <p className="text-[#C5C5C5] mt-3 w-3/4">
                  Another concern patients often express is whether veneers will
                  lead to increased tooth sensitivity. While it’s true that some
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-[#E8E8E8] mx-5"/>
    </>
  );
};

export default Blog2;
