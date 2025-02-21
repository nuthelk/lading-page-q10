import { motion } from "framer-motion";
import mainBanner from "../../assets/img-banner-first-secion.jpg";
import imgElemento2 from "../../assets/img-elemento2.webp";
import logo from "../../assets/logo-q10-partners.png";
import { description } from "../../constants/first-section-const/description";
import Header from "./components/Header";
import { useModalStore } from "../../store/modal.store";

const FirstSection = () => {
  const { setOpenModal } = useModalStore();

  return (
    <div
      id="first"
      className="h-[900px] z-0 w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${mainBanner})` }}
    >
      <Header />

      {/* Imagen decorativa */}
      <motion.img
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        src={imgElemento2}
        alt=""
        className="absolute z-20 h-[100px] lg:h-[150px]"
      />

      {/* Logo */}
      <motion.img
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        src={logo}
        alt=""
        className="absolute left-8 lg:left-20 top-3 lg:top-7 z-20 h-[80px] lg:h-[100px]"
      />

      {/* Capa de fondo con opacidad */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
        className="absolute w-full z-10 blur-xs h-[900px] bg-[#ff8600]"
      />

      <section className="px-3 absolute z-30 h-full w-full mx-auto">
        <div className="flex flex-col items-center justify-center h-full">
          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white mb-8 text-[32px] md:text-[40px] xl:text-[60px] font-bold text-center"
          >
            Programa Partners Q10
          </motion.h1>

          {description.map((desc, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2 * index,
              }}
              className="text-white text-[18px] xl:text-[22px] mt-4 text-center max-w-[90%]"
            >
              {desc}
            </motion.p>
          ))}

          <motion.button
            onClick={() => setOpenModal(true)}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="button-primary text-[18px] md:text-[20px] mt-16"
          >
            ¡Únete ahora y marca la diferencia!
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default FirstSection;
