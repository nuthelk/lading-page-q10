import ImgMenu from "../../assets/img-elemento3.webp";
import { IoMdHome } from "react-icons/io";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { FaUsers, FaInfoCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

const icons = [
  { id: "first", Icon: IoMdHome, title: "Home" },
  { id: "second", Icon: HiMiniArrowTrendingUp, title: "Ventajas" },
  { id: "third", Icon: FaUsers, title: "Quienes" },
  { id: "footer", Icon: FaInfoCircle, title: "Contactanos" },
];

const Menu = () => {
  const [hover, setHover] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onMouseEnter = () => {
    if (!isMobile) setHover(true);
  };
  const onMouseLeave = () => {
    if (!isMobile) setHover(false);
  };

  return (
    <div className="bg-transparent w-full flex justify-center shadow-md relative">
      {/* Imagen de fondo */}
      <img
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        src={ImgMenu}
        alt="Menú"
        className={`w-[600px] fixed h-[200px] mx-auto left-0 right-0 -bottom-36 ${
          hover ? "-translate-y-16" : isMobile ? "-translate-y-8" : "-bottom-36"
        }  transition-all duration-500 z-10`}
      />

      {/* Contenedor de íconos con animación */}
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`fixed bottom-4 mx-auto max-w-min items-center justify-center left-0 right-0 flex gap-14 z-20 transition-all duration-300 ${
          hover || isMobile
            ? "opacity-100 scale-100 -translate-y-0"
            : "opacity-0 scale-90 translate-y-8"
        }`}
      >
        {icons.map(({ id, Icon, title }) => (
          <a href={`#${id}`} className="flex flex-col items-center">
            <Icon
              key={id}
              className={`text-white ${
                !isMobile ? "text-4xl" : "text-2xl"
              }  drop-shadow-md cursor-pointer transition-transform duration-200 hover:scale-110`}
            />
            {!isMobile && (
              <p className="text-sm text-white font-semibold">{title}</p>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Menu;
