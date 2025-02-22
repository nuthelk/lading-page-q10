import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Card from "./components/card/Card";
import WaveBackground from "./components/waveBackground/WaveBackground";
import CircleCard from "./components/circleCard/CircleCard";
import { dataCards } from "../../constants/second-section-const/dataCards";
import { dataCirleCards } from "../../constants/second-section-const/dataCircleCards";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const SecondSection = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        root: null,
        rootMargin: window.innerWidth < 768 ? "0px" : "-100px",
        threshold: 0.2, // Detecta cuando el 20% del elemento es visible
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="second"
      className="h-[1900px] md:h-auto pt-20 w-full overflow-hidden"
    >
      <div ref={ref} className="mb-10 md:mb-20 lg:mb-18">
        <h1 className="text-[32px] md:text-[45px] font-semibold text-center text-[#2b2c2c]">
          ¡Descubre las ventajas de ser un Partner Q10!
        </h1>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 w-full mt-8">
          {dataCards.map((data, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.15 }}
            >
              <Card
                icon={data.icon}
                title={data.title}
                description={data.description}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="lg:relative pb-10 lg:pb-0">
        <WaveBackground />

        <div className="lg:absolute bottom-5 flex flex-wrap gap-4 md:gap-8 lg:gap-10 items-center justify-center w-full">
          {dataCirleCards.map((data, index) => (
            <motion.div
              key={index}
              className={`${
                index % 2 !== 0 ? "lg:-translate-y-8" : "lg:translate-y-3"
              }`}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.15 }}
            >
              <CircleCard
                icon={data.icon}
                number={data?.number}
                text={data.text}
                suffix={data?.suffix}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
