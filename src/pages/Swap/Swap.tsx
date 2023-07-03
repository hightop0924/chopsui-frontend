import swapBackSvg from "@/assets/svgs/swapback.svg";
import TradeHistroy from "./TradeHistory";
import SwapAction from "./SwapAction";

export default function Swap() {
  return (
    <div className="bg-primary-50">
      <div
        className="min-h-screen py-32 md:px-16 px-4 grid md:grid-cols-2 xl:grid-cols-3 gap-10 place-content-center"
        style={{
          backgroundImage: `url(${swapBackSvg})`,
        }}
      >
        <TradeHistroy className="md:block hidden w-full self-center xl:col-span-2" />
        <SwapAction className="w-full" />
      </div>
    </div>
  );
}
