import About from "./About";
import EarnYield from "./EarnYield";
import EnterApp from "./EnterApp";
import Join from "./Join";
import Partner from "./Partner";
import Question from "./Question";
import Feature from "./components/Feature";

export default function HomePage() {
  return (
    <>
      <div className="grid grid-cols-1 ">
        <EnterApp />
        <EarnYield />
        <About />
        <Partner />
        <Feature />
        <Question />
        <Join />
      </div>
    </>
  );
}
