import logoSvg from "@/assets/svgs/logo.svg";
import chopsuiSvg from "@/assets/svgs/chopsui.svg";
import arrowSvg from "@/assets/svgs/arrow.svg";
import { Button } from "@/components/Button";

export default function Header() {
  return (
    <>
      <div className="grid grid-cols-11 px-5 py-3 bg-primary-50 fixed top-0 right-0 left-0  place-items-center  text-white">
        <Button className="!px-2 flex col-span-1  place-items-center">
          <img src={logoSvg} />
          <img src={chopsuiSvg} />
        </Button>
        <div className="col-span-7 flex place-content-center font-bullina text-blue-50 ">
          <Button>Features</Button>
          <Button>Litepaper</Button>
        </div>
        <div className="bg-blue-50 pl-2 rounded-lg col-span-1 grid justify-items-end">
          <div className="flex items-center justify-end bg-black-50 rounded-lg h-11 text-white px-2 rooun  gap-3">
            <img src={logoSvg} className="w-7 h-7" /> $ 0.683
          </div>
        </div>
        <Button
          variant="primary"
          className="text-secondary-50 col-span-2 !font-[inter] py-5 gap-20 text-xl"
        >
          Enter App
          <img src={arrowSvg} />
        </Button>
      </div>
      <div className="bg-blue-150 w-full h-[1px]"></div>
    </>
  );
}
