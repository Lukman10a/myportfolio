import { BiLogoGmail } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact-section" className="p-10 border-b-2 space-y-4">
      <h1 className="text-center text-4xl font-semibold mb-4">Contact Me</h1>
      <div className="flex gap-4 justify-around items-center">
        <div className="space-y-2">
          <h3 className="text-center font-bold text-xl">Gmail</h3>
          <div className="flex justify-center items-center gap-2">
            <p>abdulrauflukman9@gmail.com</p>
            <BiLogoGmail />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-center font-bold text-xl">WhatsApp</h3>
          <div className="flex justify-center items-center gap-2">
            <p>+234 8089287065</p>
            <AiOutlineWhatsApp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
