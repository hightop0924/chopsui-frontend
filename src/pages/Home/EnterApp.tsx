import enterAppSvg from "@/assets/svgs/enterback.svg";
import chopsuiSvg from "@/assets/svgs/chopsui.svg";
import arrowSvg from "@/assets/svgs/arrow.svg";
import arrowWhiteSvg from "@/assets/svgs/arrowwhite.svg";
import moonSvg from "@/assets/svgs/moon.svg";
import twitterSvg from "@/assets/svgs/twitter.svg";
import discordSvg from "@/assets/svgs/discord.svg";
import { Button } from "@/components/Button";
import { Link } from "react-router-dom";

export default function EnterApp() {
  return (
    <div className="bg-gradient-to-t from-primary-150 to-primary-50">
      <img
        src={moonSvg}
        className="right-0 top-0 md:block hidden  absolute z-0  "
      ></img>
      <div
        className="bg-gradient-to-t from-primary-50 to-primary-150 pt-20 md:pt-32  px-5  md:px-32"
        style={{
          backgroundImage: `url(${enterAppSvg})`,
        }}
      >
        <img src={chopsuiSvg} className="mt-20 md:w-[501px] w-48" />
        <h1 className="font-rubik md:text-4xl text-lg text-white md:font-bold mt-7">
          A robust yield strategy platform.
        </h1>
        <Button
          variant="primary"
          className="text-secondary-50 mt-7 md:w-96 col-span-2  !font-[inter] justify-between md:!px-7 py-3 md:py-5 gap-20 text-base md:text-xl"
        >
          Enter App
          <img src={arrowSvg} />
        </Button>
        <div className="flex mt-7">
          <Button className="font-lemon text-white text-base font-thin md:text-lg flex ">
            Join us on <img src={arrowWhiteSvg} />
          </Button>
          <div className="flex gap-3 font-rubik">
            <Link
              to="https://twitter.com/OfficialChopSui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-50 !p-2">
                <img src={twitterSvg} className="w-5 h-5" />
              </Button>
            </Link>
            <Link
              to="https://discord.gg/FbK47VPjBv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-50 !p-2">
                <img src={discordSvg} className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
