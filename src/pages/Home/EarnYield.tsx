import dashboardSvg from "@/assets/svgs/earn_yields/dashboard.png";
import stakeSvg from "@/assets/svgs/earn_yields/stake.svg";
import farmSvg from "@/assets/svgs/earn_yields/farm.svg";
import yieldSvg from "@/assets/svgs/earn_yields/yield.svg";

import { Button } from "@/components/Button";

export default function EarnYield() {
  return (
    <div className=" bg-gradient-to-b from-primary-400 to-primary-300 flex flex-col gap-10 p-5  font-rubik text-center place-content-center text-white md:p-20 md:px-32">
      <h1 className="text-4xl font-bold text-secondary-150">
        EARN EXTRA YIELD
      </h1>
      <div className="flex flex-wrap justify-around">
        <img src={dashboardSvg} alt="dashboard" />
        <img src={stakeSvg} alt="stake" />
        <img src={farmSvg} alt="farm" />
        <img src={yieldSvg} alt="yield" />
      </div>
    </div>
  );
}
