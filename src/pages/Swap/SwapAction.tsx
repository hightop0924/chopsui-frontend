import { Button } from "@/components/Button";
import TokenSelect from "./components/TokenSelect";
import ExchangeSvg from "@/assets/svgs/exchange.svg";
import SettingSvg from "@/assets/svgs/setting.svg";
import { ConnectButton } from "@/components/ConnectButton";
import { DataType } from "@/types";

export default function SwapAction({ className }: { className?: string }) {
  const data: DataType[] = [
    {
      item: "Rate",
      value: "--",
    },
    {
      item: "Expected Output",
      value: "--",
    },
    {
      item: "Price Impact",
      value: "--%",
    },
    {
      item: "Minimum recie",
      value: "--",
    },
    {
      item: "LP Fee",
      value: "",
    },
    {
      item: "Route",
      value: "",
    },
  ];
  return (
    <div className={className}>
      <div className="  gap-5 rounded-3xl bg-blue-50 flex flex-col items-center px-4 place-content-between  py-5">
        <div className=" flex content-evenly place-content-between w-full">
          <h1 className="text-xl ml-7 text-white text-center ">Swap</h1>
          <Button className="!px-1">
            <img src={SettingSvg} alt="setting" />
          </Button>
        </div>
        <TokenSelect title="From" className="w-full" />
        <div className="bg-blue-800 rounded-full w-10 h-10 flex items-center justify-center">
          <img src={ExchangeSvg} alt="exchange" />
        </div>
        <TokenSelect title="To03" className="w-full" />
        <ConnectButton className="bg-secondary-50 px-7 py-3">
          Swap
        </ConnectButton>
        <div className="w-full rounded-xl  bg-blue-800 px-5 text-white font-rubik flex flex-col gap-2 py-3    ">
          {data.map((item, index) =>
            item.item !== "Minimum recie" ? (
              <div className="flex place-content-between  " key={index}>
                <h1>{item.item}</h1>
                <h1>{item.value}</h1>
              </div>
            ) : (
              <div className="flex place-content-between  " key={index}>
                <div>
                  <h1>{item.item}</h1>
                  <p className="text-grey-50">after spilliage(0.05%)</p>
                </div>
                <h1>{item.value}</h1>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
