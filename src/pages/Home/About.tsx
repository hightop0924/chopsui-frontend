import about1Svg from "@/assets/svgs/about1.svg";
import about2Svg from "@/assets/svgs/about2.svg";
import about3Svg from "@/assets/svgs/about3.svg";

export default function About() {
  return (
    <div className="bg-primary-200 grid font-rubik  text-white p-5 md:p-20 ">
      <div className="place-self-center grid gap-5 text-center">
        <h1 className=" text-secondary-50 text-4xl font-bold">WHY CHIOPSUI</h1>
        <p className="text-xl md:text-2xl md:font-bold">
          Earn sustainable yields to compound your holdings
        </p>
      </div>
      <div className="md:flex grid gap-3 md:mt-28 mt-10 justify-evenly  ">
        <img src={about1Svg} alt="" className="md:mb-32" />
        <img src={about2Svg} alt="" className="" />
        <img src={about3Svg} alt="" className="md:mb-32" />
      </div>
    </div>
  );
}
