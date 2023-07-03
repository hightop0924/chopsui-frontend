import logoSvg from "@/assets/svgs/logo.svg";
import chopsuiSvg from "@/assets/svgs/chopsui.svg";
import { Button } from "@/components/Button";
import { useEffect, useState } from "react";
import { ConnectButton } from "@/components/ConnectButton";
import { LinkData } from "@/types";
import { Link, useLocation } from "react-router-dom";

const links: LinkData[] = [
  { title: "Dashboard", link: "#" },
  { title: "Swap", link: "swap" },
  { title: "Earn", link: "#" },
  { title: "Analytics Coming Soon", link: "#" },
  { title: "Yield Strategy", link: "#" },
];

export default function Header() {
  const [flag, setFlag] = useState(false);
  const handleNavigation = (e: Event) => {
    if (window.scrollY === 0) setFlag(false);
    else setFlag(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, [window.scrollY]);

  const location = useLocation();

  useEffect(() => {
    console.log("Location changed");
  }, [location]);

  return (
    <div className="fixed top-0 right-0 left-0 z-50">
      <div
        className={
          flag
            ? "grid grid-flow-col  px-5 py-3  place-items-between  bg-primary-50 text-white "
            : "grid grid-flow-col  px-5 py-3  place-items-between   text-white "
        }
      >
        <Button
          className="!px-2 flex lg:place-items-center"
          aria-label="logobutton"
        >
          <img src={logoSvg} alt="logo" className="w-16 md:block hidden " />
          <img src={chopsuiSvg} alt="chopsui" className="md:w-40 w-32" />
        </Button>
        <div className=" lg:flex hidden place-content-center text-white  font-rubik ">
          {links.map((link: LinkData, index) => {
            return link.link === location.pathname.split("/")[1] ? (
              <Link
                key={index}
                to={link.link}
                className="bg-[url('@/assets/svgs/linkback.svg')] bg-contain bg-no-repeat bg-center bg-local hover:opacity-90 active:opacity-75 font-bold  py-1 tracking-widest px-5 flex place-items-center text-secondary-50 "
              >
                {link.title}
              </Link>
            ) : (
              <Link
                key={index}
                to={link.link}
                className="hover:opacity-70 active:opacity-75 font-bold  hover:text-secondary-50 rounded-lg py-1 tracking-widest px-5 flex place-items-center"
              >
                {link.title}
              </Link>
            );
          })}
        </div>
        <div className="flex gap-2 items-center place-items-end place-content-end ">
          <ConnectButton
            walletColor="yellow"
            className="bg-blue-50 p-3"
          ></ConnectButton>
        </div>
      </div>
      {flag ? (
        <div className="bg-blue-100/50 w-full h-[2px] lg:block hidden"></div>
      ) : null}
    </div>
  );
}
