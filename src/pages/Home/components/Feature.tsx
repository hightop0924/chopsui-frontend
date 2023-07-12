import chopsuiFeatureSvg from "@/assets/svgs/chopsuifeature.svg";
import chopsuiFeatureMobileSvg from "@/assets/svgs/chopsuifeaturemobile.svg";

export default function Feature() {
  return (
    <div className="flex flex-col text-center gap-10 justify-center font-rubik md:pt-20 items-center bg-primary-300 px-5 md:px-20">
      <h1 className="text-secondary-150 text-3xl md:text-4xl font-bold ">
        CHOPSUI FEATURES
      </h1>
      <p className="text-blue-10 text-xl max-w-3xl">
        Experience the capabilities of a robust platform designed to uncover
        lucrative opportunities that generate substantial yields, while
        providing seamless tracking of your earnings.
      </p>
      <img
        src={chopsuiFeatureSvg}
        width={"100%"}
        height={"100%"}
        alt="feature chopsui"
        className="md:block hidden"
      />
      <img
        src={chopsuiFeatureMobileSvg}
        width={"100%"}
        height={"100%"}
        alt="feature"
        className="md:hidden block"
      />
    </div>
  );
}
