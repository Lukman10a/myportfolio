import React from "react";

const Footer = () => {
  return (
    <div className="grid lg:grid-cols-5 grid-rows-2 gap-10 bg-slate-500 p-6">
      <div className="space-y-4">
        <h2 className="font-bold text-white text-xl">About us</h2>
        <p className="text-slate-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, rem
          libero quibusdam, distinctio incidunt commodi ea temporibus non
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="font-bold text-white text-xl">Quick Links</h2>
        <ul className="space-y-2 cursor-pointer text-slate-400">
          <li>About</li>
          <li>Testimonials</li>
          <li>Services</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="space-y-4 ">
        <h2 className="font-bold text-white text-xl">Reach out to us</h2>
        <ul className="space-y-2 cursor-pointer text-slate-400">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Telegram</li>
          <li>WhatsApp</li>
        </ul>
      </div>
      <div className="space-y-4 col-span-2">
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
      </div>
      <div>
        <p className="">
          Copyright ©2023 All rights reserved | This portfolio was designed by
          Lukman
        </p>
      </div>
    </div>
  );
};

export default Footer;
