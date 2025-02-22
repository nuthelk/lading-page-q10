import { useEffect, useState } from "react";
import ImgMenu from "../../assets/img-elemento3.webp";
import { IoMdHome } from "react-icons/io";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import { FaUsers, FaInfoCircle } from "react-icons/fa";

const icons = [
  { id: "first", Icon: IoMdHome, title: "Home" },
  { id: "second", Icon: HiMiniArrowTrendingUp, title: "Ventajas" },
  { id: "third", Icon: FaUsers, title: "Quienes" },
  { id: "opinion", Icon: FaStar, title: "Opiniones" },
  { id: "footer", Icon: FaInfoCircle, title: "Contáctanos" },
];

const Menu = () => {
  const [hover, setHover] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Observa en que pagina el viewport esta ubicado
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        threshold: 0.4, // Reducimos el threshold para que detecte antes
        rootMargin: "0px 0px -20% 0px", // Evita problemas con la barra de navegación en móviles
      }
    );

    icons.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
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

      {/* Contenedor de íconos  */}
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`fixed bottom-4 mx-auto max-w-min items-center justify-center left-0 right-0 flex gap-10 z-20 transition-all duration-300 ${
          hover || isMobile
            ? "opacity-100 scale-100 -translate-y-0"
            : "opacity-0 scale-90 translate-y-8"
        }`}
      >
        {icons.map(({ id, Icon, title }) => {
          const isActive = activeSection === id;
          return (
            <a key={id} href={`#${id}`} className="flex flex-col items-center">
              <Icon
                className={`${isActive ? "text-[#f79f3f]" : "text-white"} ${
                  !isMobile ? "text-4xl" : "text-2xl"
                } drop-shadow-md cursor-pointer transition-transform duration-200 hover:scale-110`}
              />
              {!isMobile && (
                <p
                  className={`text-sm font-semibold ${
                    isActive ? "text-[#f79f3f]" : "text-white"
                  }`}
                >
                  {title}
                </p>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
