import Image from "next/image";
import blogimg from "../public/blogimg.jpg";

const Portfolio = () => {
  const portfolioData = PORTFOLIO_DATA.map((data) => {
    return (
      <div className="border-2 space-y-3 ">
        <div className="object-fill	">
          <Image src={data.img} className="object-fill" />
        </div>
        <div className="p-5 space-y-2">
          <h2>{data.title}</h2>
          <p>{data.subtitle}</p>
          <button class="px-4 py-2 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700">
            View Details
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <h1 className="text-center text-4xl font-semibold mb-4">My Portfolio</h1>
      <div className="grid lg:grid-cols-3 gap-7 sm:grid-cols-2">
        {portfolioData}
      </div>
    </>
  );
};

export default Portfolio;

const PORTFOLIO_DATA = [
  {
    img: blogimg,
    title: "My Blog",
    subtitle:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt dolore repellendus fugiat et.",
  },
  {
    img: blogimg,
    title: "My Blog",
    subtitle:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt dolore repellendus fugiat et.",
  },
  {
    img: blogimg,
    title: "My Blog",
    subtitle:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt dolore repellendus fugiat et.",
  },
  {
    img: blogimg,
    title: "My Blog",
    subtitle:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt dolore repellendus fugiat et.",
  },
  {
    img: blogimg,
    title: "My Blog",
    subtitle:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt dolore repellendus fugiat et.",
  },
  {
    img: blogimg,
    title: "My Blog",
    subtitle:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt dolore repellendus fugiat et.",
  },
];
