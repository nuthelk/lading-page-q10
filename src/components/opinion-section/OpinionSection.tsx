import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "./opinionSection.css";
import CardOpinion from "./card-opinion/CardOpinion";
import { dataOpinionSection } from "../../constants/opinion-section-const/dataOpinionSection";

const OpinionSection: React.FC = () => {
  return (
    <div
      id="opinion"
      className="pt-20 pb-10 bg-[#fcf7f5] min-h-screen w-full flex flex-col gap-20 overflow-hidden"
    >
      <div>
        <h1 className="text-center text-3xl lg:text-4xl font-bold text-[#2b2c2c]">
          🌟 Testimonios de Nuestros Partners 🌟
        </h1>
        <p className="text-center mt-2 text-[#636363]">
          “Historias de éxito y crecimiento con Q10”
        </p>
      </div>
      <div className="w-full px-10 flex items-center justify-center  overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full max-w-full h-auto"
        >
          {dataOpinionSection.map((data, index) => (
            <SwiperSlide key={index} className="lg:pb-20 pb-10">
              <CardOpinion
                autor={data.autor}
                date={data.date}
                opinion={data.opinion}
                rating={data.rating}
                title={data.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OpinionSection;
