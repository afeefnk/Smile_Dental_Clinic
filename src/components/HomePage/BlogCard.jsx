

const BlogCard = ({ image, title, description }) => {
    return (
        <div className="bg-white rounded-lg hover:shadow-lg pb-4 hover:scale-105 transition duration-300">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl text-gray-900 mb-3 font-atyp px-1">{title}</h3>
          <p className="text-base text-[#8F9092] mb-4 font-atypr font-light px-1">{description}</p>
          <a href="#" className="text-[#010101] font-atypr underline underline-offset-8 hover:text-secondary ">
            READ MORE
          </a>
        </div>
      );
    };

export default BlogCard
