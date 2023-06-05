import enterAppSvg from "@/assets/svgs/enterback.svg";
import chopsuiSvg from "@/assets/svgs/chopsui.svg";
import arrowSvg from "@/assets/svgs/arrow.svg";
import arrowWhiteSvg from "@/assets/svgs/arrowwhite.svg";
import moonSvg from "@/assets/svgs/moon.svg";
import twitterSvg from "@/assets/svgs/twitter.svg";
import discordSvg from "@/assets/svgs/discord.svg";
import { Button } from "@/components/Button";

export default function EnterApp() {
  return (
    <div className="bg-gradient-to-t from-primary-150 to-primary-50">
      <img src={moonSvg} className="right-0 top-0 absolute "></img>
      <div
        className="bg-gradient-to-t from-primary-50 to-primary-150 py-32 px-32"
        style={{
          backgroundImage: `url(${enterAppSvg})`,
        }}
      >
        <img src={chopsuiSvg} width="510px" className="mt-20" />
        <h1 className="font-rubik text-4xl text-white font-bold mt-7">
          A robust yield strategy platform.
        </h1>
        <Button
          variant="primary"
          className="text-secondary-50 mt-7 w-96 col-span-2  !font-[inter] justify-between !px-7 py-5 gap-20 text-xl"
        >
          Enter App
          <img src={arrowSvg} />
        </Button>
        <div className="flex mt-7">
          <Button className="font-lemon text-white text-lg flex ">
            Join us on <img src={arrowWhiteSvg} />
          </Button>
          <div className="flex gap-3 font-rubik">
            <Button className="bg-blue-50 !p-2">
              <img src={twitterSvg} className="w-5 h-5" />
            </Button>
            <Button className="bg-blue-50 !p-2">
              <img src={discordSvg} className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
