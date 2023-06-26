import React from "react";
import { AiFillFacebook, AiOutlineWhatsApp } from "react-icons/ai";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="flex items-center justify-around lg:justify-center bg-slate-500 p-6">
      <div className="space-y-4 ">
        <h2 className="font-bold text-white text-xl text-center">
          Reach out to us
        </h2>
        <div className="flex items-center justify-center gap-10 cursor-pointer text-slate-400 text-2xl">
          <AiFillFacebook />
          <BsInstagram />
          <BsTelegram />
          <AiOutlineWhatsApp />
          <BiLogoGmail />
        </div>
      </div>
    </div>
  );
};

export default Footer;
