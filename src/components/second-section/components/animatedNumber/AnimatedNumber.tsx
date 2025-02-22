import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); // Solo se activa una vez
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return; // Evita reejecutar la animación
    let start = 0;
    const increment = Math.ceil(value / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-semibold text-2xl sm:text-4xl text-[#f79f3f]"
    >
      {new Intl.NumberFormat("es-ES", {
        minimumFractionDigits: 0, // Mínimo 2 decimales
      }).format(count)}
    </motion.span>
  );
};

export default AnimatedNumber;
