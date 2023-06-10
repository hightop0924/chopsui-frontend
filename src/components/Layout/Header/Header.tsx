import logoSvg from "@/assets/svgs/logo.svg";
import chopsuiSvg from "@/assets/svgs/chopsui.svg";
import arrowSvg from "@/assets/svgs/arrow.svg";
import { Button } from "@/components/Button";

export default function Header() {
  return (
    <>
      <div className="grid grid-flow-col  px-5 py-3 bg-primary-50 z-10 fixed top-0 right-0 left-0  place-items-between  text-white">
        <Button
          className="!px-2 flex md:place-items-center"
          aria-label="logobutton"
        >
          <img src={logoSvg} />
          <img src={chopsuiSvg} className="md:w w-20" />
        </Button>
        <div className=" md:flex hidden place-content-center text-white font-lemon  ">
          <Button>Features</Button>
          <Button>Litepaper</Button>
        </div>
        <div className="md:flex hidden gap-2 items-center place-items-end place-content-end ">
          <div className="bg-blue-50 pl-2 h-11 rounded-lg grid  justify-items-end">
            <div className="flex items-center justify-end bg-black-50 rounded-lg h-11 text-white px-2 rooun  gap-3">
              <img src={logoSvg} alt="logo" className="w-7 h-7" /> $ 0.683
            </div>
          </div>
          <Button
            variant="primary"
            className="text-secondary-50 flex  !font-[inter] 2xl:gap-20 xl:gap-15 py-5 gap-2 text-xl"
          >
            Enter App
            <img src={arrowSvg} alt="arrow" />
          </Button>
        </div>
      </div>
      {/* <div className="bg-blue-150 w-full h-[1px] md:block hidden"></div> */}
    </>
  );
}
