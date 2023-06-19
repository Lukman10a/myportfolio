import Image from "next/image";
import React from "react";
import hero_image from "../public/hero_image.jpg";

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center text-white ">
      <div className="absolute flex flex-col justify-center items-center gap-4">
        <p className="text-7xl font-bold">My Portfolio</p>
        <p>Crafting Dynamic Web Experiences That Drive Results</p>
      </div>
      <Image src={hero_image} />
    </div>
  );
};

export default Hero;
