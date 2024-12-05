import offer1 from "../../assets/homepage/offer1.svg";
import offer2 from "../../assets/homepage/offer2.svg";
import offer3 from "../../assets/homepage/offer3.svg";
import offerfooter from "../../assets/homepage/offer-footer.svg";

const Offer = () => {
  return (
    <>
    <div className="min-h-screen p-6 mt-14 max-w-8xl mx-auto px-16">
      {" "}
      {/* Adjust spacing here */}
      {/* Header */}
      <header className=" mb-16 flex ">
        <h1 className="text-5xl font-bold mb-2 font-atyp text-[#011016]">
          Exclusive <br />
          Monthly Dental Offers
        </h1>
        <p className="text-[#9E9E9E] flex ml-48 font-poppins">
          Unlock your smile’s potential with our exclusive <br />
          dental offers for this month
        </p>
      </header>
      {/* Offers Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        {/* Offer 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition duration-300">
          <img
            src={offer1}
            alt="Offer 1"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl mb-4 font-atyp text-[#011016]">
            Cleaning Polishing, Teeth Whitening <br /> and Comprehensive
            Consultation
          </h2>
          <p className="text-[#F58220] text-4xl font-semibold mb-4 font-atyp">
            599 AED
          </p>
          <ul className="text-[#9E9E9E] space-y-2 mb-6">
            <li className="border-t border-b border-[#E8E8E8] py-2">
              Flash Tooth Whitening System for 1 Hour
            </li>
            <li className="py-1">Deep Cleaning and Polishing</li>
            <li className="border-t border-b border-[#E8E8E8] py-2">
              Full Mouth Treatment Plan Included
            </li>
          </ul>
          <button className=" bg-[#231F20] text-white py-2 px-2 rounded-md mt-4 font-atypr hover:bg-black transition duration-200">
            MAKE AN APPOINTMENT
          </button>
        </div>

        {/* Offer 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition duration-300">
          <img
            src={offer2}
            alt="Offer 2"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl  mb-5 font-atyp">Orthodontic Braces</h2>
          <p className="text-[#F58220] text-4xl font-semibold mb-4 font-atyp">2499 AED</p>
          <ul className="text-[#9E9E9E] space-y-2 mb-6">
            <li className="border-t border-b border-[#E8E8E8] py-2">American Association of Orthodontist Member</li>
            <li className="py-1">Align Your Complete Teeth in 6-12 Months</li>
            <li className="border-t border-b border-[#E8E8E8] py-2">Complimentary Teeth Cleaning During<br/>Orthodontic Treatment</li>
          </ul>
          <button className=" bg-[#231F20] text-white py-2 px-2 rounded-md font-atypr hover:bg-black transition duration-200">
            MAKE AN APPOINTMENT
          </button>
        </div>

        {/* Offer 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition duration-300">
          <img
            src={offer3}
            alt="Offer 3"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl mb-4 font-atyp">
            Premium Quality Hollywood<br/>Smile 20 Teeth
          </h2>
          <p className="text-[#F58220] text-4xl mb-4 font-atyp">14000 AED</p>
          <ul className="text-[#9E9E9E] space-y-2 mb-6">
            <li className="border-t border-b border-[#E8E8E8] py-2">German Quality Super Thin Veneers</li>
            <li className="py-1">Painless and Delivered in 5 Days in 2 Sessions</li>
            <li className="border-t border-b border-[#E8E8E8] py-2">
              German Trained Cosmetic Dentist Who<br/> Delivered More than 2000
              Smiles
            </li>
          </ul>
          <button className="bg-[#231F20] text-white py-2 px-2 rounded-md font-atypr hover:bg-black transition duration-200">
            MAKE AN APPOINTMENT
          </button>
        </div>
      </div>
    </div>
      {/* Footer */}
      <footer className="my-20">
        <img src={offerfooter} alt="" className="h-14"/>
      </footer>
      </>
  );
};

export default Offer;
