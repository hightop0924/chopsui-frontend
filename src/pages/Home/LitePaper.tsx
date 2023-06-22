import litePaperSvg from "@/assets/svgs/litepaper.svg";

import { Link } from "react-router-dom";

export default function LitePaper() {
  return (
    <div className="bg-gradient-to-t from-primary-50 grid md:grid-cols-2 font-rubik  text-white to-primary-150 p-5 md:py-20  md:px-32">
      <div className="content-center grid gap-5">
        <h1 className=" text-secondary-50 text-3xl md:text-4xl font-bold">
          TOKEN SPECIFIACTION
        </h1>
        <p className="max-w-lg">
          ChopSui is a leveraged DeFi platform and dashboard in the SUI
          ecosystem. The team is vested and in it for the long-term success of
          our platform.
        </p>
        <Link
          to={"https://pdfhost.io/v/5rJBRKw492_ChopSui "}
          // to={"/chopsui-literpaper"}
          target="_blank"
          className="text-lg text-blue-50 underline underline-offset-4"
        >
          Litepaper
        </Link>
      </div>
      <img src={litePaperSvg} alt="literpaper" className="md:mt-0 mt-10" />
    </div>
  );
}
