import AnimatedNumber from "../animatedNumber/AnimatedNumber";

type Props = {
  icon: React.ReactNode;
  number?: number;
  text: string;
  suffix?: string;
};

const CircleCard = ({ icon, number, text, suffix }: Props) => {
  return (
    <div className="rounded-full flex flex-col pb-4 gap-2 items-center justify-center text-white bg-[#2b2c2c] w-[200px] h-[200px]">
      {icon}
      <div className="flex flex-col items-center">
        {number && (
          <span className="flex items-center gap-0.5">
            <AnimatedNumber value={number} />
            <p className="font-semibold text-3xl text-[#f79f3f]">{suffix}</p>
          </span>
        )}
        <p className="text-center">{text}</p>
      </div>
    </div>
  );
};

export default CircleCard;
