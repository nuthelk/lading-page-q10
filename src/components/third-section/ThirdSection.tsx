import imgElement4 from "../../assets/img-elemento4.webp";
import { dataCards } from "../../constants/third-section-const/dataCards";
import { useModalStore } from "../../store/modal.store";
import Card from "./components/card/Card";
import "./thirdSection.css";

const ThirdSection = () => {
  const { setOpenModal } = useModalStore();

  return (
    <div
      id="third"
      className="h-auto main pb-20 space-y-40 flex flex-col justify-center px-3 md:px-10 xl:px-48 pt-40 w-full text-[#2b2c2c] overflow-hidden"
    >
      <div className="flex flex-col items-center lg:flex-row gap-20 justify-center w-full">
        <img
          src={imgElement4}
          alt=""
          className="xl:w-[500px] md:w-[350px]  auto"
        />
        <div className="flex flex-col gap-12">
          <h1 className="font-bold text-6xl">¿Quién puede ser Partner Q10?</h1>
          <div className="space-y-4">
            <div className="bg-white rounded-xl space-y-2 p-4 border-r-10 border-r-[#f79f3f]">
              <h3 className="font-bold text-xl">Empresas de Tecnología</h3>
              <p>
                TI, Desarrollo, Hardware, Software y Soluciones Tecnológicas.
                Consultores Independientes De Tecnología y/o Educación.
              </p>
            </div>
            <div className="bg-white rounded-xl space-y-2 p-4 border-r-10 border-r-[#f79f3f]">
              <h3 className="font-bold text-xl">Consultores Independientes</h3>
              <p>De Tecnología y/o Educación.</p>
            </div>
          </div>
        </div>
      </div>

      {/* tres simples pasos */}

      <div className="flex flex-col gap-10 w-full justify-center items-center">
        <h2 className="font-semibold text-4xl text-center">
          Conviértete en Partner Q10 en solo 3 simples pasos.
        </h2>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          {dataCards.map((data, index) => (
            <Card
              index={index + 1}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
        <button
          onClick={() => setOpenModal(true)}
          className="button-secondary text-2xl"
        >
          ¡Únete Ahora!
        </button>
      </div>
    </div>
  );
};

export default ThirdSection;
