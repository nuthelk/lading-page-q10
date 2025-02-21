import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";

const linkWpp =
  "https://api.whatsapp.com/send?phone=573137181411&text=Saludos,%20estoy%20interesado%20en%20saber%20m%c3%a1s%20acerca%20de%20Q10";

const Header = () => {
  const [hoverWpp, setHoverWpp] = useState(false);
  return (
    <header className="absolute z-40 flex items-center gap-3 top-10 right-4 md:right-6">
      <button className="button-login hidden md:block">Iniciar sesión</button>
      <div className=" p-2 md:hidden flex items-center justify-center bg-[#2b2c2c] rounded-full">
        <CiLogin className="text-white mr-1" size={25} />
      </div>
      <div
        onMouseEnter={() => setHoverWpp(true)}
        onMouseLeave={() => setHoverWpp(false)}
        className="items-center gap-0 cursor-pointer hidden md:flex"
        onClick={() => window.open(linkWpp, "_blank")}
      >
        <p
          className={`text-[#2b2c2c] font-light ${
            hoverWpp ? "text-white" : ""
          }  transition-all duration-300`}
        >
          WhatsApp
        </p>
        <GoArrowUpRight
          className={`mt-1 ${
            hoverWpp ? "text-white" : ""
          } transition-all duration-300`}
        />
      </div>
      <FaWhatsapp
        onClick={() => window.open(linkWpp, "_blank")}
        className="md:hidden flex text-white"
        size={30}
      />
    </header>
  );
};

export default Header;
