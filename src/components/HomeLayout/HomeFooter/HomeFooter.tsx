import twitterSvg from "@/assets/svgs/twitter.svg";
import discordSvg from "@/assets/svgs/discord.svg";
import { Button } from "@/components/Button";
import { LinkData } from "@/types";
import { Link } from "react-router-dom";
import earthSvg from "@/assets/svgs/earth.svg";

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

export default function HomeFooter() {
  return (
    <div className="grid font-rubik py-10 bg-primary-300 md:px-24   px-5  place-items-center">
      <div className="flex md:flex-row flex-col md:gap-0 gap-10  place-items-center place-content-around text-blue-10 w-full">
        <div className="grid gap-3  md:mt-0 mt-10 ">
          <h1 className="font-rubik text-secondary-150 text-2xl md:text-3xl max-w-xl font-bold uppercase">
            Dashboard, Yield Strategy and Analytics
          </h1>
          <p className=" text-base md:text-xl tracking-wide md:max-w-md font-medium">
            Our community is building an expansive decentralized trading
            platform for the future of finance. Join us!
          </p>
          <div className="flex gap-3 font-rubik">
            <Link
              to="https://twitter.com/OfficialChopSui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-secondary-150 relative !px-6 !py-4 group"
                aria-label="twitter"
              >
                <img
                  src={twitterSvg}
                  alt="twitter"
                  className="w-7 h-7 group-hover:animate-ping  absolute inline-flex"
                />
                <img
                  src={twitterSvg}
                  alt="twitter"
                  className="w-7 h-7 relative inline-flex "
                />
              </Button>
            </Link>
            <Link
              to="https://discord.gg/FbK47VPjBv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-secondary-150 relative !px-6 !py-4 group"
                aria-label="discord"
              >
                <img
                  src={discordSvg}
                  alt="discord"
                  className="w-7 absolute inline-flex  h-7 group-hover:animate-ping"
                />
                <img
                  src={discordSvg}
                  alt="discord"
                  className=" relative inline-flex  rounded-full w-7 h-7 "
                />
              </Button>
            </Link>
          </div>
        </div>
        {/* <div className="grid grid-cols-2 gap-16 md:gap-10 md:col-span-3 md:my-0 my-5 "> */}
        {/* {links.map((link, index) => (
            <div key={index} className="grid gap-1 content-start">
              <h1 className="text-xl text-secondary-50 font-bold">
                {link.title}
              </h1>
              {link.sublinks?.map((sublink, index) => (
                <p key={index}>{sublink.title}</p>
              ))}
            </div>
          ))} */}
        <img src={earthSvg} alt="earth" />
        {/* </div> */}
      </div>
      <div className="md:text-xl text-base text-white text-center ">
        Copyright © 2023 CHOPSUI.
        <br className="md:hidden block" /> All rights reserved
      </div>
    </div>
  );
}
