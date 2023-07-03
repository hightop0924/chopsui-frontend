import { TokenDataType } from "@/types";
import DropDownSvg from "@/assets/svgs/dropdown.svg";
import BusdSvg from "@/assets/svgs/tokens/busd.svg";

const sampleToken: TokenDataType = {
  name: "Binance USD",
  symbol: "BUSD",
  image: BusdSvg,
};

export default function Token({
  token = sampleToken,
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => any;
  token?: TokenDataType;
}) {
  return (
    <button
      className={"flex gap-4 text-white items-center " + className}
      onClick={onClick}
    >
      <img src={token.image} alt={token.name} />
      <h1>{token.symbol}</h1>
      <img src={DropDownSvg} alt="dropdown" />
      <div className="w-[2px] h-8 bg-blue-100"></div>
    </button>
  );
}
