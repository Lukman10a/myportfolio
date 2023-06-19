import Image from "next/image";
import aboutimg from "../public/about-img.jpg";

const About = () => {
  return (
    <div className="p-10">
      <h1 className="text-center text-4xl font-semibold mb-4">About Me</h1>
      <div className="grid lg:grid-cols-2 md:place-items-center space-y-3 gap-2">
        <Image src={aboutimg} width={600} />
        <div className="flex justify-between items-center gap-5">
          <div className="grid md:place-items-center gap-2 lg:gap-2">
            <p className="text-gray-700">
              I am an experienced React developer with over two years of
              expertise in writing clean code and strong knowledge of HTML5,
              CSS3, and JavaScript. I bring a wealth of experience and technical
              skills to any front-end development team. With a solid
              understanding of React Js, Next.js, JavaScript, and TypeScript, I
              am capable of creating efficient, scalable, and visually appealing
              web applications. My passion for front-end development is evident
              in my attention to detail, dedication to writing maintainable
              code, and commitment to staying up-to-date with the latest
              industry trends.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-xl p-2 px-6 rounded-2xl transition duration-300 ease-in-out">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
