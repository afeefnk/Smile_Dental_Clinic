import React from "react";
import contactimg2 from "../../assets/contactpage/contactimg2.svg";
import uae from "../../assets/contactpage/uae.svg";

const Contact3 = () => {
  return (
    <div className="px-6 lg:px-12 mx-auto py-10 lg:py-32">
      {/* Title Section */}
      <h1 className="text-2xl font-bold text-[#011016] sm:text-5xl">
        Have a question? <br />
        Let’s get in touch with us.
      </h1>
      <p className="mt-4 text-[#9E9E9E] font-poppins">
        Fill up the form and our team will get back to you within 24 hrs.
      </p>

      {/* Main Content */}
      <div className="mt-10 flex flex-col lg:flex-row lg:space-x-8">
        {/* Image Section */}
        <div className="lg:w-2/5 w-full lg:h-auto">
          <img
            src={contactimg2}
            alt="Contact Illustration"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Form Section */}
        <div className="lg:w-3/5 w-full lg:h-auto flex items-stretch">
          <form className="w-full rounded-lg flex flex-col justify-between lg:h-full">
            {/* First Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-poppins text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-poppins text-gray-700 mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  required
                />
              </div>
            </div>

            {/* Subject & Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-poppins text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-poppins text-gray-700 mb-1">
                  Phone Number*
                </label>
                <div className="flex">
                <span className="inline-flex items-center px-3 border border-gray-300 rounded-l-md text-gray-600">
                    <img src={uae} alt="" />
                  </span>
                  <input
                    type="tel"
                    placeholder="+971"
                    className="flex-grow border border-gray-300 rounded-r-md p-3 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mt-4">
              <label className="block text-sm font-poppins text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                placeholder="Brief about your project..."
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-orange-500"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="w-1/6  primary-btn text-white rounded-md py-2 px-4 text-sm font-medium font-atypr"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact3;
