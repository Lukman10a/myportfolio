import Image from "next/image";
import about_img from "../public/about_img.jpg";

const About = () => {
  return (
    <div className="p-10">
      <h1 className="text-center text-4xl font-semibold mb-4">About Me</h1>
      <div className="grid lg:grid-cols-2 space-y-3">
        <Image src={about_img} width={600} />
        <div className="grid grid-rows-2 place-items-center gap-4">
          <p className="text-gray-700">
            I am an experienced React developer with over two years of expertise
            in writing clean code and strong knowledge of HTML5, CSS3, and
            JavaScript. I bring a wealth of experience and technical skills to
            any front-end development team. With a solid understanding of React
            Js, Next.js, JavaScript, and TypeScript, I am capable of creating
            efficient, scalable, and visually appealing web applications. My
            passion for front-end development is evident in my attention to
            detail, dedication to writing maintainable code, and commitment to
            staying up-to-date with the latest industry trends.
          </p>
          <button class="bg-blue-500 hover:bg-blue-600 text-white text-xl py-2 px-4 rounded-r-3xl transition duration-300 ease-in-out">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
