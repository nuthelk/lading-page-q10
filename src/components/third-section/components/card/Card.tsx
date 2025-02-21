type Props = {
  index: number;
  title: string;
  description: string;
};

const Card = ({ index, title, description }: Props) => {
  return (
    <div className="text-[#2b2c2c] max-w-[250px]">
      <div className="flex flex-col justify-center gap-1">
        <p className="font-bold text-center text-6xl text-[#f79f3f]">{index}</p>
        <p className="font-medium text-center text-xl">{title}</p>
      </div>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default Card;
