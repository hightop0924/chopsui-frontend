import security1Svg from "@/assets/svgs/security1.svg";
import security2Svg from "@/assets/svgs/security2.svg";
import security3Svg from "@/assets/svgs/security3.svg";
import { Button } from "@/components/Button";
import twitterSvg from "@/assets/svgs/twitter.svg";
import discordSvg from "@/assets/svgs/discord.svg";

export default function Security() {
  return (
    <div className="bg-gradient-to-t from-primary-50 to-primary-150 grid font-rubik text-white p-5 md:p-20 ">
      <div className="place-self-center grid gap-5 text-center">
        <h1 className=" text-secondary-50 text-4xl font-bold">SECURITY</h1>
        <p className="text-lg md:text-2xl md:font-bold">
          CHOPSUI is fully audited, has been tested rigorously, and continuously{" "}
          <br className="md:block hidden" />
          monitored to ensure that your funds are always safe.
        </p>
      </div>
      <div className="md:flex grid md:mt-20 mt-5 justify-center gap-3 md:gap-10  ">
        <img src={security1Svg} alt="" />
        <img src={security2Svg} alt="" />
        <img src={security3Svg} alt="" />
      </div>
      <div className="bg-blue-100 w-full h-[1px] mt-10"></div>
      <div className="flex text-secondary-50 mt-12 md:px-10 justify-between ">
        <div>
          <p>Stay tuned for our token launch</p>
          <h1 className="md:text-4xl font-bold mt-2">Join Community</h1>
        </div>
        <div className="bg-gradient-to-t from-blue-200 to-blue-300 rounded-xl flex md:px-7 md:py-5 md:gap-5 p-3 gap-3">
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
