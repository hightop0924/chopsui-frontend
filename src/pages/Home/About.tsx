import flatSvg from "@/assets/svgs/flat.svg";
import chopsui from "@/assets/chopsui.pdf";

export default function About() {
  return (
    <div className="">
      <div className=" bg-primary-300 bg-blend-lighten flex justify-around font-rubik bg-cover bg-no-repeat bg-center  text-white p-5 md:p-10 ">
        <div className="place-self-center grid gap-5 text-left max-w-xl ">
          <h1 className=" text-secondary-50 text-4xl font-bold">
            WHAT IS CHOPSUI?
          </h1>
          <p className="text-xl md:text-2xl md:font-medium ">
            ChopSui is a leveraged DeFi platform and dashboard in the SUI
            ecosystem. The team is vested and in it for the long-term success of
            our platform.
          </p>
          <a
            href={chopsui}
            target="_blank"
            type="application/pdf"
            rel="alternate"
            media="print"
            className="text-lg text-blue-50 underline underline-offset-4 font-bold"
          >
            Tokenomics
          </a>
        </div>
        <img src={flatSvg} alt="flat" />
      </div>
    </div>
  );
}
