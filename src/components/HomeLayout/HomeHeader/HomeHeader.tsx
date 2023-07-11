import chopsuiSvg from "@/assets/svgs/chopsui.svg";
import menuSvg from "@/assets/svgs/menu.svg";
import { Button } from "@/components/Button";
import chopsui from "@/assets/chopsui.pdf";
import { Link } from "react-router-dom";

export default function HomeHeader() {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 ">
      <div className="grid grid-flow-col  md:px-32 py-3  place-items-between bg-primary-50/80 text-white ">
        <Button className="" aria-label="logobutton">
          <img src={chopsuiSvg} alt="chopsui" className="md:w-48 w-32" />
        </Button>
        <div className=" lg:flex hidden place-content-center justify-self-end text-white  font-rubik ">
          <Link
            className="hover:opacity-90 active:opacity-75 font-bold rounded-lg py-1 tracking-widest px-5 flex place-items-center "
            target="_blank"
            to="https://chopsui.gitbook.io/chopsui-whitepaper/"
          >
            Whitepaper
          </Link>
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

        <Button
          variant="secondary"
          className=" lg:flex hidden justify-self-end h-12   py-2 gap-1 text-xl"
        >
          Enter App
        </Button>
        <Button className="justify-self-end">
          <img src={menuSvg} alt="menu" />
        </Button>
      </div>
    </div>
  );
}
