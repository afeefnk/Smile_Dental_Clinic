import service1 from "../../assets/homepage/service1.svg";
import service2 from "../../assets/homepage/service2.svg";
import service3 from "../../assets/homepage/service3.svg";
import service4 from "../../assets/homepage/service4.svg";
import service5 from "../../assets/homepage/service5.svg";
import service6 from "../../assets/homepage/service6.svg";
import service7 from "../../assets/homepage/service7.svg";
import service8 from "../../assets/homepage/service8.svg";
import service9 from "../../assets/homepage/service9.svg";

const services = [
  { name: "Orthodontics", icon: service1 },
  { name: "General Dentistry", icon: service2 },
  { name: "Cosmetic Dentistry", icon: service3 },
  { name: "Teeth Whitening", icon: service4 },
  { name: "Gum Treatment", icon: service5 },
  { name: "Root Canal Treatment", icon: service6 },
  { name: "Crowns and Bridges", icon: service7 },
  { name: "Jaw Joint Disorder", icon: service8 },
  { name: "Children's Dentistry", icon: service9 },
];

const Services = () => {
  return (
    <div className=" py-28 max-w-8xl mx-auto text-center px-16">
      <h2 className="text-5xl font-semibold mb-4 text-start font-atyp text-[#011016] w-2/3">
        Transform your smile with veneers, whitening, and implants.
      </h2>
      <p className="text-[#9E9E9E] mb-12 text-start font-outfit mt-5">
        Lorem ipsum available, but the majority have suffered alteration in some
        form,<br/> by injected humour, or randomised words which don't look even.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {services.map((service) => (
          <div
            key={service.name}
            className="bg-[#FFFAF5] p-6 rounded-md hover:shadow-lg transition font-outfit h-56 w-52 mb-3 cursor-pointer"
          >
            <img
              src={service.icon}
              alt={service.name}
              className="mx-auto w-24 h-24 mb-4"
            />
            <h3 className="text-xl font-semibold text-[#011016]">
              {service.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
