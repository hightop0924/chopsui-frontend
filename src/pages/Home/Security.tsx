import security1Svg from "@/assets/svgs/security1.svg";
import security2Svg from "@/assets/svgs/security2.svg";
import security3Svg from "@/assets/svgs/security3.svg";
import { Button } from "@/components/Button";
import twitterSvg from "@/assets/svgs/twitter.svg";
import discordSvg from "@/assets/svgs/discord.svg";

export default function Security() {
  return (
    <div className="bg-gradient-to-t from-primary-50 to-primary-150 grid font-rubik  text-white p-20 ">
      <div className="place-self-center grid gap-5 text-center">
        <h1 className=" text-secondary-50 text-4xl font-bold">SECURITY</h1>
        <p className=" text-2xl font-bold">
          CHOPSUI is fully audited, has been tested rigorously, and continuously{" "}
          <br />
          monitored to ensure that your funds are always safe.
        </p>
      </div>
      <div className="flex mt-20 justify-center gap-10  ">
        <img src={security1Svg} alt="" />
        <img src={security2Svg} alt="" />
        <img src={security3Svg} alt="" />
      </div>
      <div className="bg-blue-100 w-full h-[1px] mt-10"></div>
      <div className="flex  text-secondary-50 mt-12 px-10 justify-between ">
        <div>
          <p>Stay tuned for our token launch</p>
          <h1 className="text-4xl font-bold mt-3">Join Community</h1>
        </div>
        <div className="bg-gradient-to-t from-blue-200 to-blue-300 rounded-xl flex px-7 py-5 gap-5">
          <Button className="bg-blue-50 !p-2">
            <img src={twitterSvg} className="w-5 h-5" />
          </Button>
          <Button className="bg-blue-50 !p-2">
            <img src={discordSvg} className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
