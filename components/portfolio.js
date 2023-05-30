import Image from "next/image";
import blogimg from "../public/blogimg.jpg";

const Portfolio = () => {
  return (
    <div>
      <div>
        <Image />
        <h2>My-Blog</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          deserunt dolore repellendus fugiat et.
        </p>
      </div>
    </div>
  );
};

export default Portfolio;

const PORTFOLIO_DATA = [
  {
    img: blogimg,
    name: "My Blog",
    subtitle:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt dolore repellendus fugiat et.",
  },
];
