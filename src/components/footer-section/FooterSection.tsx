import { dataFooter } from "../../constants/footer-section-const/DataFooter";

const inputFields = [
  { type: "text", placeholder: "Nombres" },
  { type: "text", placeholder: "Institución - Ciudad" },
  { type: "text", placeholder: "Teléfono celular" },
  { type: "email", placeholder: "Correo" },
];

const FooterSection = () => {
  return (
    <footer
      id="footer"
      className="min-h-[500px] pt-10 pb-30 xl:pb-10 px-5 md:px-20 bg-[#3a3b3b] w-full flex flex-col overflow-hidden"
    >
      <div className="flex flex-wrap justify-center sm:justify-between gap-4">
        {dataFooter.map((data, index) => (
          <div key={index} className="flex flex-col w-[200px] gap-2">
            <h5 className="text-[#f79f3f] font-bold text-xl">{data.title}</h5>
            {data.menu.map((item, i) => (
              <p key={i} className="text-white hover:underline cursor-pointer">
                {item}
              </p>
            ))}
          </div>
        ))}

        {/* Formulario de contacto */}
        <div className="flex flex-col w-[200px] text-white gap-2">
          <h5 className="text-[#f79f3f] font-bold text-xl">Contáctenos</h5>

          {inputFields.map((field, i) => (
            <input
              key={i}
              type={field.type}
              placeholder={field.placeholder}
              className="bg-white text-[#2b2c2c] text-sm py-1 px-2 border rounded-lg outline-none transition-all duration-300 focus:border-[#f79f3f]"
            />
          ))}

          <textarea
            className="bg-white text-[#2b2c2c] max-h-[200px] text-sm py-1 px-2 border rounded-lg outline-none transition-all duration-300 focus:border-[#f79f3f]"
            placeholder="Comentarios"
          />

          <button className="bg-[#f3b879] hover:bg-[#f79f3f] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">
            Enviar
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
