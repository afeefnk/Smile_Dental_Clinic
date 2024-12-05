import BlogCard from "./BlogCard.jsx";
import blog1 from "../../assets/homepage/blog1.svg";
import blog2 from "../../assets/homepage/blog2.svg";
import blog3 from "../../assets/homepage/blog3.svg";
import blog4 from "../../assets/homepage/blog4.svg";

const blogs = [
  {
    image: blog1,
    title: 'Lorem Ipsum available, but the majority have suffered',
    description:
      'Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even.',
  },
  {
    image: blog2,
    title: 'Lorem Ipsum available, but the majority have suffered',
    description:
      'Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even.',
  },
  {
    image: blog3,
    title: 'Lorem Ipsum available, but the majority have suffered',
    description:
      'Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even.',
  },
  {
    image: blog4,
    title: 'Lorem Ipsum available, but the majority have suffered',
    description:
      'Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even.',
  },
];

const BlogSection = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#FFFAF5] to-white pt-20 pb-20 px-4">
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-5xl font-bold text-gray-900 font-atyp mb-5 mt-5">
              See Our Latest Blogs!
            </h2>
            <button className="primary-btn text-white px-4 py-2 rounded-lg mb-5 font-atypr font-normal mt-5">
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {blogs.map((blog, index) => (
              <BlogCard
                key={index}
                image={blog.image}
                title={blog.title}
                description={blog.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
