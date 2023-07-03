import logoSvg from "@/assets/svgs/logo.svg";
import chopsuiSvg from "@/assets/svgs/chopsui.svg";
import arrowSvg from "@/assets/svgs/arrow.svg";
import { Button } from "@/components/Button";
import chopsui from "@/assets/chopsui.pdf";
import { useCallback, useEffect, useState } from "react";

export default function HomeHeader() {
  const [flag, setFlag] = useState(false);
  const handleNavigation = (e: Event) => {
    if (window.scrollY === 0) setFlag(false);
    else setFlag(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, [window.scrollY]);

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
          <Button>Whitepaper</Button>
          <a
            className="hover:opacity-90 active:opacity-75 font-bold rounded-lg py-1 tracking-widest px-5 flex place-items-center "
            href={chopsui}
            target="_blank"
            type="application/pdf"
            rel="alternate"
            media="print"
          >
            Tokenomics
          </a>
        </div>
        <div className="flex gap-2 items-center place-items-end place-content-end ">
          <div className="bg-blue-50 hidden pl-2 rounded-lg lg:grid h-14 justify-items-end">
            <div className="flex items-center justify-end bg-black-50 rounded-lg  text-white px-2 rooun  gap-3">
              <img src={logoSvg} alt="logo" className="w-7 h-7" /> $ 0.683
            </div>
          </div>
          <Button
            variant="primary"
            className=" flex h-14 2xl:gap-10 xl:gap-7 md:!px-5 !px-2 py-2 gap-1 text-xl"
          >
            Enter App
            <img src={arrowSvg} alt="arrow" />
          </Button>
        </div>
      </div>
      {flag ? (
        <div className="bg-blue-100/50 w-full h-[2px] lg:block hidden"></div>
      ) : null}
    </div>
  );
}
