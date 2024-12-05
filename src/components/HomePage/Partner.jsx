import partner from "../../assets/homepage/partner.svg";

const Partner = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 pb-0">
          <h2 className="text-5xl text-center mt-24 mb-10 font-atyp text-[#011016]">Our Insurance Partners</h2>
          <p className="text-center text-[#9E9E9E] mb-16 font-poppins">
            Conveniently pay for your dental treatments with your insurance.<br />
            We accept major insurance providers.
          </p>
          
              <div className="flex items-center justify-center mb-20">
                <img
                  src={partner}
                  alt="partners"
                />
              </div>
          </div>
    );
};

export default Partner;
