import QuestionTab from "./components/QeestionDrop";
import chopsui from "@/assets/chopsui.pdf";
import questionBackSvg from "@/assets/svgs/questionback.svg";
import questionBack1Svg from "@/assets/svgs/questionback1.svg";

export default function Question() {
  return (
    <div className="relative bg-primary-300 grid font-rubik text-white p-5 md:p-20 ">
      <img
        src={questionBackSvg}
        alt="back1"
        className="opacity-10 bg-blend-screen absolute left-0 top-0"
      />
      <img
        src={questionBack1Svg}
        alt="back1"
        className="opacity-10 bg-blend-screen absolute right-0 top-0"
      />
      <div className="place-self-center grid gap-5  text-center ">
        <h1 className=" text-secondary-150 text-4xl font-bold mb-5">
          Frequently asked questions
        </h1>
        <QuestionTab title="What is leveraged yield farming?">
          Leveraged yield farming involves borrowing additional funds against
          collateral to amplify potential returns on yield farming strategies.
          Users collateralize their assets, borrow funds, and participate in
          yield farming activities. This approach magnifies the potential
          profits, but it also carries increased risk. Users need to carefully
          manage their collateralization ratios and monitor market conditions.
        </QuestionTab>
        <QuestionTab title="Tokenomics">
          <h1>Initial supply: 18,569,885,765 $CHOP</h1>
          <h1>Total supply: 69,420,133,700 $CHOP</h1>
          <a
            href={chopsui}
            target="_blank"
            type="application/pdf"
            rel="alternate"
            media="print"
            className="text-lg text-secondary-150 underline underline-offset-4 font-bold"
          >
            For more information read our Tokenomics docs
          </a>
        </QuestionTab>
        <QuestionTab title="Can I use ChopSui from any location?">
          ChopSui is a decentralized protocol and is accessible from most
          locations globally. However, it's important to note that the
          regulatory environment for DeFi and digital assets may vary by
          jurisdiction. Users are responsible for understanding and complying
          with the laws and regulations of their respective countries.
        </QuestionTab>
      </div>
    </div>
  );
}
