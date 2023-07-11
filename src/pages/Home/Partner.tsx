import growthSvg from "@/assets/svgs/partners/growth.svg";

export default function Partner() {
  return (
    <div className="bg-primary-300 font-rubik  md:p-20 p-5">
      <h1 className="text-secondary-150 uppercase text-4xl font-bold text-center ">
        Partners
      </h1>
      <div className="flex justify-center md:mt-16 mt-4 gap-5">
        <img src={growthSvg} alt="growth" />
        <img src={growthSvg} alt="growth" />
        <img src={growthSvg} alt="growth" />
        <img src={growthSvg} alt="growth" />
      </div>
    </div>
  );
}
