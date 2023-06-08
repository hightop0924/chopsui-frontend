import about1Svg from "@/assets/svgs/about1.svg";
import about2Svg from "@/assets/svgs/about2.svg";
import about3Svg from "@/assets/svgs/about3.svg";

export default function About() {
  return (
    <div className="bg-primary-200 grid font-rubik  text-white p-5 md:p-20 ">
      <div className="place-self-center grid gap-5 text-center">
        <h1 className=" text-secondary-50 text-4xl font-bold">WHY CHOPSUI</h1>
        <p className="text-xl md:text-2xl md:font-bold">
          Earn sustainable yields to compound your holdings
        </p>
      </div>
      <div className="flex flex-wrap gap-3 gap-y-10 min-h-[450px] md:mt-10 mt-10 justify-evenly  ">
        <img src={about1Svg} alt="" />
        <img src={about2Svg} alt="" className="self-end" />
        <img src={about3Svg} alt="" />
      </div>
    </div>
  );
}
