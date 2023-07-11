import logoSvg from "@/assets/svgs/logo.svg";
import chopsuiSvg from "@/assets/svgs/chopsui.svg";
import twitterSvg from "@/assets/svgs/twitter.svg";
import discordSvg from "@/assets/svgs/discord.svg";
import { Button } from "@/components/Button";
import { LinkData } from "@/types";
import { Link } from "react-router-dom";

const links: LinkData[] = [
  {
    title: "Under development",
    sublinks: [
      { title: "Earn", link: "#" },
      { title: "Swap", link: "#" },
      { title: "Anaytics", link: "#" },
      { title: "Farm", link: "#" },
    ],
    link: "#",
  },
  {
    title: "Help",
    sublinks: [
      { title: "About us", link: "#" },
      { title: "Contact us", link: "#" },
    ],
    link: "#",
  },
];

export default function Footer() {
  return (
    <div className="grid font-rubik py-10 bg-gradient-to-t from-primary-50 2xl:px-32 xl:px-24 lg:px-10 md:px-5 px-5 to-primary-150 gap-10 place-items-center">
      <div className="grid md:grid-cols-10 grid-cols-1  px-5 place-items-start  md:place-content-between  text-white w-full">
        <div className="md:col-span-2 grid pr-2">
          <img src={logoSvg} alt="logo" className="w-32 place-self-center" />
          <img src={chopsuiSvg} alt="chopsui" className="w-40" />
        </div>
        <div className="grid gap-3 md:col-span-5 md:mt-0 mt-10 ">
          <h1 className="font-rubik text-secondary-50 text-xl font-bold uppercase">
            Dashboard, Yield Strategy and Analytics
          </h1>
          <p className="md:max-w-xs text-lg">
            Our community is building an expansive decentralized trading
            platform for the future finance. Join us!
          </p>
          <div className="flex gap-3 font-rubik">
            <Link
              to="https://twitter.com/OfficialChopSui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-secondary-100 !p-2" aria-label="twitter">
                <img src={twitterSvg} alt="twitter" className="w-5 h-5" />
              </Button>
            </Link>
            <Link
              to="https://discord.gg/FbK47VPjBv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-secondary-100 !p-2" aria-label="discord">
                <img src={discordSvg} alt="discord" className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-16 md:gap-10 md:col-span-3 md:my-0 my-5 ">
          {links.map((link, index) => (
            <div key={index} className="grid gap-1 content-start">
              <h1 className="text-xl text-secondary-50 font-bold">
                {link.title}
              </h1>
              {link.sublinks?.map((sublink, index) => (
                <p key={index}>{sublink.title}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="h-[1px] bg-blue-100 w-11/12"></div>
      <div className="md:text-xl text-base text-white ">
        Copyright © CHOPSUI. All rights reserved
      </div>
    </div>
  );
}
