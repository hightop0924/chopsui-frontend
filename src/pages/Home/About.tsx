import about1Svg from "@/assets/svgs/about1.svg";
import about2Svg from "@/assets/svgs/about2.svg";
import about3Svg from "@/assets/svgs/about3.svg";

function AboutImage({
  src,
  title,
  className,
}: {
  src: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={
        "w-[356px] h-[335px] py-5 shadow-inner shadow-blue-50 items-center rounded-lg bg-gradient-to-t  from-blue-300 to-blue-200 grid place-items-center text-center " +
        className
      }
    >
      <p className="font-rubik px-5 text-xl text-white">{title}</p>
      <img src={src} alt="about image" className="self-center" />
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-primary-200 grid font-rubik  text-white p-5 md:p-20 ">
      <div className="place-self-center grid gap-5 text-center">
        <h1 className=" text-secondary-50 text-4xl font-bold">WHY CHOPSUI</h1>
        <p className="text-xl md:text-2xl md:font-bold">
          Earn sustainable yields to compound your holdings
        </p>
      </div>
      <div className="flex flex-wrap gap-3 gap-y-10 min-h-[400px] md:mt-10 mt-10 justify-evenly  ">
        <AboutImage
          src={about1Svg}
          title="Earn on the crypto assets you already own"
        />
        <AboutImage
          src={about2Svg}
          className="self-end"
          title="Get a complete overview over all your plays in the
          Sui-Ecosystem."
        />
        <AboutImage
          src={about3Svg}
          title="Leverage your farms in order to earn even more yield!"
        />
      </div>
    </div>
  );
}
