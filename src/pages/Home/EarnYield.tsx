import listSvg from "@/assets/svgs/list.svg";
import farmSvg from "@/assets/svgs/farm.svg";
import factSvg from "@/assets/svgs/fact.svg";
import chartSvg from "@/assets/svgs/chart.svg";
import arrowSvg from "@/assets/svgs/arrow.svg";
import { Button } from "@/components/Button";

export default function EarnYield() {
  return (
    <div className="bg-gradient-to-t from-primary-50 grid grid-cols-2 font-rubik  text-white to-primary-150 p-20 px-32">
      <img src={listSvg} alt="" className="" />
      <div className=" content-start">
        <h1 className=" text-secondary-50 text-4xl font-bold">
          EARN EXTRA YIELD
        </h1>
        <div className="flex gap-5 mt-8">
          <img src={chartSvg} />
          <div className="grid  ">
            <h1 className="text-xl font-bold text-blue-50">
              Dashboard(coming soon)
            </h1>
            <p>Access protocol analytics (TVL, APY, etc.).</p>
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <img src={factSvg} />
          <div className="grid  ">
            <h1 className="text-xl font-bold text-blue-50">
              take $CHOP and other SUI-ecosystem tokens on our platform
            </h1>
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <img src={farmSvg} />
          <div className="grid  ">
            <h1 className="text-xl font-bold text-blue-50">Yield farms</h1>
            <p>
              Staking CHOP in a CHOP Earnings Pool rewards you with native
              tokens with the platform’s earnings.
            </p>
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <img src={farmSvg} />
          <div className="grid  ">
            <h1 className="text-xl font-bold text-blue-50">Yield strategy</h1>
            <p>
              Want even higher earnings? Try our leveraged yield farms for even
              higher %APY, for experienced farmers only!
            </p>
          </div>
        </div>
        <Button
          variant="primary"
          className="text-secondary-50 mt-8 w-96 col-span-2  !font-[inter] justify-between !px-7 py-5 gap-20 text-xl"
        >
          Start Earning
          <img src={arrowSvg} />
        </Button>
      </div>
    </div>
  );
}
