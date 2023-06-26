import Image from "next/image";
import blogimg from "../public/blogimg.jpg";
import { BsLink45Deg } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Projects = (props) => {
  console.log(props.id);
  const projectsData = PROJECTS_DATA.map((data) => {
    return (
      <div
        id="projects-section"
        className="border-none hover:overflow-hidden rounded-2xl space-y-3 shadow-lg hover:shadow-[0_0_20px_gray] transition-all duration-300  hover:rounded-3xl"
      >
        <div className="">
          <Image src={data.img} alt="" className="rounded-t-2xl" />
        </div>
        <div className="p-5 space-y-2">
          <h2 className="text-2xl font-bold">{data.title}</h2>
          <p className="text-gray-500">{data.subtitle}</p>
          <p>
            Techs: <span className="text-sm font-medium">{data.tech}</span>
          </p>
          <div className="flex justify-between">
            <div className="flex justify-between items-center cursor-pointer">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium">View Code</p>
                <Link href={`${data.gitlink}`}>
                  <AiFillGithub />
                </Link>
              </div>
            </div>
            <div className="flex justify-between items-center cursor-pointer">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium">Live Preview</p>
                <Link href={`${data.link}`}>
                  <BsLink45Deg />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <h1 className="text-center text-4xl font-semibold mb-4">My projects</h1>
      <h2 className="text-center text-xl">Projects I have built so far</h2>
      <div className="grid lg:grid-cols-3 gap-16 sm:grid-cols-2 p-10">
        {projectsData}
      </div>
    </>
  );
};

export default Projects;

const PROJECTS_DATA = [
  {
    img: blogimg,
    title: " Info Hive",
    subtitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt dolore repellendus fugiat et.  Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    tech: "ReactJs, netlify cms, taiwlwind css",
    link: "https://infohive.netlify.app/",
    gitlink: "https://github.com/Salafi-blog-project/info-hive",
  },
  {
    img: blogimg,
    title: "At-taasil",
    subtitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt dolore repellendus fugiat et.  Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    link: "https://ataasil.vercel.app/",
    gitlink: "",
  },
  {
    img: blogimg,
    title: "Zipo",
    subtitle:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt dolore repellendus fugiat et.  Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    link: "https://ataasil.vercel.app/",
    gitlink: "https://github.com/salafidevelopers/zipo-client",
  },
  {
    img: blogimg,
    title: "E-Commerce",
    subtitle:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt dolore repellendus fugiat et.  Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    tech: "Next, Tailwind, styled components, Redux",
    link: "",
    gitlink: "https://github.com/Lukman10a/salaficommerce",
  },
  {
    img: blogimg,
    title: "Muslim Space",
    subtitle:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt dolore repellendus fugiat et.  Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    tech: "Next, Tailwind, styled components",
    link: "",
    gitlink: "https://github.com/AOMuiz/muslim-space",
  },
  {
    img: blogimg,
    title: "Dasvboard",
    subtitle:
      " Lorem, ipum dolor sit amet consectetur adipisicing elit. Doloribus deserunt dolore repellendus fugiat et.  Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    tech: "Next, Tailwind",
    link: "https://mainstackdev.netlify.app/",
    gitlink: "https://github.com/Lukman10a/mainstack_dev",
  },
];
