import Image from "next/image";
import tailwind from "../public/tailwind.svg";
import javascript from "../public/javascript.svg";
import html from "../public/html.svg";
import css from "../public/css.svg";
import github from "../public/github.svg";
import git from "../public/git.svg";
import react from "../public/react.svg";
import vscode from "../public/vscode.svg";
import next from "../public/next.svg";
import firebase from "../public/firebase.svg";
import styled from "../public/styled.svg";
import mui from "../public/mui.svg";

const Tech = () => {
  return (
    <div id="tech-section" className="p-10">
      <div className="  text-center">
        <h1 className="text-center text-4xl font-semibold mb-4">Tech Stack</h1>
        <h2 className="text-center text-xl">
          Techmoogies I have used in my projects
        </h2>
      </div>
      {/* <div className="flex flex-wrap items-center justify-center gap-4"> */}
      <div className="grid grid-cols-6 gap-5 p-10">
        <Image src={tailwind} alt="" width={120} className=" " />
        <Image src={javascript} alt="" width={120} />
        <Image src={html} alt="" width={120} />
        <Image src={css} alt="" width={120} />
        <Image src={github} alt="" width={120} />
        <Image src={git} alt="" width={120} />
        <Image src={react} alt="" width={120} />
        <Image src={vscode} alt="" width={120} />
        <Image src={next} alt="" width={120} />
        <Image src={firebase} alt="" width={120} />
        <Image src={styled} alt="" width={120} />
        <Image src={mui} alt="" width={120} />
      </div>
    </div>
  );
};

export default Tech;
