import Image from "next/image";
import about_img from "../public/about_img.jpg";

const About = () => {
  return (
    <div className="m-4">
      <h1 className="text-center text-4xl font-semibold mb-4">About Me</h1>
      <div className="sm:grid-cols-2 grid grid-cols-1 gap-4">
        <Image src={about_img} width={600} />
        <div className="grid place-items-center">
          <p className="text-gray-700">
            I am an experienced React developer with over two years of expertise
            in writing clean code and strong knowledge of HTML5, CSS3, and
            JavaScript. I bring a wealth of experience and technical skills to
            any front-end development team. With a solid understanding of React
            Js, Next.js, JavaScript, and TypeScript, I am capable of creating
            efficient, scalable, and visually appealing web applications. My
            passion for front-end development is evident in my attention to
            detail, dedication to writing maintainable code, and commitment to
            staying up-to-date with the latest industry trends. I am a
            collaborative team player who thrives in an Agile environment, and I
            am eager to contribute my skills and expertise to create innovative
            and impactful user experiences.
          </p>
          <ul>
            <li>Over 2 years of experience in React development</li>
            <li>Strong knowledge of HTML5, CSS3, and JavaScript</li>
            <li>
              Solid understanding of React Js, Next.js, JavaScript, and
              TypeScript
            </li>
            <li>
              Ability to create efficient, scalable, and visually appealing web
              applications
            </li>
            <li>Attention to detail</li>
            <li>Dedication to writing maintainable code</li>
            <li>
              Commitment to staying up-to-date with the latest industry trends
            </li>
            <li>Collaborative team player</li>
            <li>Thrives in an Agile environment</li>
            <li>
              Eager to contribute skills and expertise to create innovative and
              impactful user experiences
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
