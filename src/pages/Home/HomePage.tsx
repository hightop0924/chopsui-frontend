import About from "./About";
import EarnYield from "./EarnYield";
import EnterApp from "./EnterApp";
import LitePaper from "./LitePaper";
import Security from "./Security";

export default function HomePage() {
  return (
    <>
      <div className="grid grid-cols-1   ">
        <EnterApp />
        <EarnYield />
        <LitePaper />
        <About />
        <Security />
      </div>
    </>
  );
}
