import Image from "next/image";
import react from "../public/react.png";
import e_commerce from "../public/ecommerce.jpg";
import blog from "../public/blog.png";
import app from "../public/app.png";

const Services = () => {
  const serviceDetails = SERVICE_DETAILLS.map((service) => {
    return (
      <div className="p-7 space-y-4 border-2 rounded-md">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold py-2">{service.title}</h1>
          <Image src={service.img} width={70} />
        </div>
        <p>{service.subtitle}</p>
      </div>
    );
  });

  return (
    <>
      <h1 className="text-center text-4xl font-semibold mb-4">My Services</h1>
      <div className="grid lg:grid-cols-3 gap-7 sm:grid-cols-2 p-10">
        {serviceDetails}
      </div>
    </>
  );
};

export default Services;

const SERVICE_DETAILLS = [
  {
    title: "Web Development",
    subtitle:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet, deserunt magni odio commodi perferendis molestias molestiae,neque vero blanditiis unde iste ut repudiandae corrupti minima ipsumearum excepturi architecto.",
  },
  {
    title: "Frontend Developer",
    subtitle:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet, deserunt magni odio commodi perferendis molestias molestiae,neque vero blanditiis unde iste ut repudiandae corrupti minima ipsumearum excepturi architecto.",
  },
  {
    title: "React Developer",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet, deserunt magni odio commodi perferendis molestias molestiae,neque vero blanditiis unde iste ut repudiandae corrupti minima ipsumearum excepturi architecto.",
    img: react,
  },
  {
    title: "Mobile Development",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet, deserunt magni odio commodi perferendis molestias molestiae,neque vero blanditiis unde iste ut repudiandae corrupti minima ipsumearum excepturi architecto.",
    img: app,
  },
  {
    title: "Blog Creation",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet, deserunt magni odio commodi perferendis molestias molestiae,neque vero blanditiis unde iste ut repudiandae corrupti minima ipsumearum excepturi architecto.",
    img: blog,
  },
  {
    title: "E-Commerce Web",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet, deserunt magni odio commodi perferendis molestias molestiae,neque vero blanditiis unde iste ut repudiandae corrupti minima ipsumearum excepturi architecto.",
    img: e_commerce,
  },
];
