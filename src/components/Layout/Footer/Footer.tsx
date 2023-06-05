import logoSvg from "@/assets/svgs/logo.svg";
import chopsuiSvg from "@/assets/svgs/chopsui.svg";
import twitterSvg from "@/assets/svgs/twitter.svg";
import discordSvg from "@/assets/svgs/discord.svg";
import { Button } from "@/components/Button";
import { LinkData } from "@/types";

export const links: LinkData[] = [
  {
    title: "Service",
    sublinks: [
      { title: "Trade", link: "#" },
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
    <div className="grid  font-rubik py-10 bg-gradient-to-t from-primary-50 to-primary-150 gap-10 place-items-center">
      <div className="grid grid-cols-10  px-5  place-content-between  text-white w-full">
        <div className="col-span-2 grid">
          <img src={logoSvg} className="w-32 place-self-center" />
          <img src={chopsuiSvg} className="w-40" />
        </div>
        <div className="grid gap-3 col-span-5 ">
          <h1 className="font-rubik text-secondary-50 text-xl font-bold uppercase">
            Dashboard, Yield Strategy and Analytics
          </h1>
          <p className="max-w-xs">
            Our community is building an expansive decentralized trading
            platform for the future finance. Join us!
          </p>
          <div className="flex gap-3 font-rubik">
            <Button className="bg-secondary-100 !p-2">
              <img src={twitterSvg} className="w-5 h-5" />
            </Button>
            <Button className="bg-secondary-100 !p-2">
              <img src={discordSvg} className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 col-span-3  ">
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
      <div className="text-xl text-white ">
        Copyright © 2023 CHOPSUI. All rights reserved
      </div>
    </div>
  );
}
