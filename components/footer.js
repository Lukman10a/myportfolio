import React from "react";
import { AiFillFacebook, AiOutlineWhatsApp } from "react-icons/ai";
import { BsInstagram, BsTelegram } from "react-icons/bs";

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
        </div>
      </div>
      {/* <div className="space-y-4 col-span-2">
        <h2 className="font-bold text-white text-xl">
          Subscribe to our newsletter
        </h2>
        <form>
          <fieldset>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              required
              class="w-64 py-2 px-4 rounded-l-3xl border-t border-b border-l text-gray-700
        focus:outline-none focus:border-blue-500"
            />
            <button
              class="bg-blue-500 hover:bg-blue-600 text-white text-xl py-2 px-4 rounded-r-3xl
        transition duration-300 ease-in-out"
            >
              Subscribe
            </button>
          </fieldset>
        </form>
      </div> */}
    </div>
  );
};

export default Footer;
