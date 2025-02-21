import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import "./modalPartner.css";
import { useModalStore } from "../../store/modal.store";

const ModalPartner = () => {
  const { openModal, setOpenModal } = useModalStore();

  if (!openModal) return null;
  console.log("first");
  return (
    <div className="fixed  inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="bg-white max-h-[90%] overflow-auto rounded-lg shadow-lg w-full max-w-lg p-6 relative"
      >
        <button
          onClick={() => setOpenModal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <IoClose size={24} />
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Sé un <span className="text-orange-500 font-bold">Partner Q10</span>
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Lidera el cambio en la educación de Latinoamérica y{" "}
          <span className="font-semibold">monetiza</span>.
        </p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label>Nombres y Apellidos</label>
              <input type="text" placeholder="" className="input-text" />
            </div>
            <div className="flex flex-col gap-2">
              <label>Pais</label>
              <input type="text" placeholder="" className="input-text" />
            </div>
            <div className="flex flex-col gap-2">
              <label>Correo</label>
              <input type="text" placeholder="" className="input-text" />
            </div>
            <div className="flex flex-col gap-2">
              <label>Celular</label>
              <input type="text" placeholder="" className="input-text" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>Nombre de la empresa</label>
            <input type="text" placeholder="" className="input-text" />
          </div>
          <div className="flex flex-col gap-2">
            <label>
              Resume brevemente los motivos por los que te interesa convertirte
              en partner.
            </label>
            <textarea className="input-text"></textarea>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" id="terms" className="w-4 h-4" />
            <label htmlFor="terms">
              Acepto los{" "}
              <span className="text-orange-500 font-semibold">
                términos y condiciones de uso
              </span>{" "}
              y autorizo el tratamiento de mis datos personales.
            </label>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setOpenModal(false);
            }}
            className="w-full bg-orange-500 cursor-pointer text-white py-2 rounded-lg hover:bg-orange-600 transition-all"
          >
            ENVIAR
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ModalPartner;
