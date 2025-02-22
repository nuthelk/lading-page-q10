import { IoStarSharp, IoStarOutline } from "react-icons/io5";

type Props = {
  title: string;
  opinion: string;
  autor: string;
  date: string;
  rating: number;
};

const CardOpinion = ({ title, opinion, autor, date, rating }: Props) => {
  return (
    <div className="bg-white flex flex-col justify-between py-8 px-4 h-[480px] shadow-lg rounded-lg lg:p-16 text-center text-lg font-semibold">
      <div>
        <div className="flex items-center justify-between mb-[30px]">
          {/* Estrellas */}
          <div className="flex">
            {[...Array(5)].map((_, index) =>
              index < rating ? (
                <IoStarSharp key={index} className="text-[#f79f3f] text-xl" />
              ) : (
                <IoStarOutline key={index} className="text-gray-300 text-xl" />
              )
            )}
          </div>
          <p className="text-sm text-gray-400">{date}</p>
        </div>
        <h1 className="text-[24px] font-medium mb-4">{title}</h1>
        <p className="font-normal text-[14px]">{opinion}</p>
      </div>
      <div>
        <p className="text-sm">{autor}</p>
      </div>
    </div>
  );
};

export default CardOpinion;
