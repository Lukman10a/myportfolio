import Image from "next/image";
import React from "react";
import hero_image from "../public/hero_image.jpg";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex justify-center items-center text-white "
    >
      <div className="bg-yellow-950 opacity-40 absolute w-full h-full"></div>
      <div className="absolute flex flex-col justify-center items-center gap-4">
        <p className="text-3xl lg:text-7xl font-bold">My Portfolio</p>
        <p className="lg:text-2xl">
          Crafting Dynamic Web Experiences That Drive Results
        </p>
      </div>
      <Image src={hero_image} />
    </div>
  );
};

export default Hero;
