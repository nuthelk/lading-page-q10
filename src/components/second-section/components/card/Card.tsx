type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Card = ({ icon, title, description }: Props) => {
  return (
    <div className="bg-white text-[#2b2c2c] p-4 flex items-center flex-col gap-4 justify-center w-[250px] h-[350px] hover:scale-105 transition-all duration-300 rounded-lg shadow-xl m-4">
      <div className="rounded-full border-7 border-[#f79f3f]">{icon}</div>
      <div>
        <h4 className="font-bold text-center text-xl">{title}</h4>
        <p className="font-normal text-center text-18">{description}</p>
      </div>
    </div>
  );
};

export default Card;
