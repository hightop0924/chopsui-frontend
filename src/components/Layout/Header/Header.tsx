import logoSvg from "@/assets/svgs/logo.svg";
import chopsuiSvg from "@/assets/svgs/chopsui.svg";
import arrowSvg from "@/assets/svgs/arrow.svg";
import { Button } from "@/components/Button";

export default function Header() {
  return (
    <>
      <div className="grid md:grid-cols-11 px-5 py-3 bg-primary-50 z-10 fixed top-0 right-0 left-0  md:place-items-center  text-white">
        <Button className="!px-2 flex md:col-span-1 place-items-center">
          <img src={logoSvg} />
          <img src={chopsuiSvg} className="md:w w-20" />
        </Button>
        <div className="col-span-7 md:flex hidden place-content-center text-white font-lemon  ">
          <Button>Features</Button>
          <Button>Litepaper</Button>
        </div>
        <div className="bg-blue-50 pl-2 rounded-lg col-span-1 md:grid hidden justify-items-end">
          <div className="flex items-center justify-end bg-black-50 rounded-lg h-11 text-white px-2 rooun  gap-3">
            <img src={logoSvg} className="w-7 h-7" /> $ 0.683
          </div>
        </div>
        <Button
          variant="primary"
          className="text-secondary-50 md:flex hidden col-span-2 !font-[inter] py-5 gap-20 text-xl"
        >
          Enter App
          <img src={arrowSvg} />
        </Button>
      </div>
      <div className="bg-blue-150 w-full h-[1px] md:block hidden"></div>
    </>
  );
}
