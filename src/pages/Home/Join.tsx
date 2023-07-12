import twitterSvg from "@/assets/svgs/twitter.svg";
import discordSvg from "@/assets/svgs/discord.svg";
import { Link } from "react-router-dom";

export default function Join() {
  return (
    <div className="bg-primary-300 md:flex flex-col place-items-center gap-5 py-10 font-rubik hidden">
      <h1 className="text-secondary-150 font-bold text-4xl ">
        Join Our Community
      </h1>
      <p className="text-blue-10">
        Connect with fellow DeFi farmers and cultivate collective growth in a
        harmonious ecosystem.
      </p>
      <div className="flex gap-16">
        <Link
          to="https://discord.gg/FbK47VPjBv"
          target="_blank"
          rel="noopener noreferrer"
          className="group hover:opacity-90  active:opacity-75 font-bold bg-secondary-150 gap-4 font-rubik rounded-md py-3 tracking-widest px-5 flex place-items-center "
        >
          Discord
          <img
            src={discordSvg}
            alt="discord"
            className="w-7 h-7 group-hover:animate-bounce"
          />
        </Link>
        <Link
          to="https://twitter.com/OfficialChopSui"
          target="_blank"
          rel="noopener noreferrer"
          className="group hover:opacity-90  active:opacity-75 font-bold bg-secondary-150 gap-4 font-rubik rounded-md py-3 tracking-widest px-5 flex place-items-center "
        >
          Twitter
          <img
            src={twitterSvg}
            alt="twitter"
            className="w-7 h-7 group-hover:animate-bounce"
          />
        </Link>
      </div>
    </div>
  );
}
