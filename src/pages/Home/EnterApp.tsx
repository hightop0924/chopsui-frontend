import chartSvg from "@/assets/svgs/chart.svg";
import { Button } from "@/components/Button";
import logoSvg from "@/assets/svgs/logo.svg";
import logoShadowSvg from "@/assets/svgs/logoshadow.svg";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { useCallback } from "react";

export default function EnterApp() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <div className="bg-gradient-to-t from-primary-400 to-primary-500 -z-10">
      <Particles
        className=""
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        height="100vh"
        width="100vw"
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "light",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            number: {
              value: 6,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#002358",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#09101f",
              },
              polygon: {
                nb_sides: 6,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.3,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 200,
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 40,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 200,
              color: "#09101f",
              opacity: 1,
              width: 2,
            },
            move: {
              enable: true,
              speed: 4,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },

          detectRetina: true,
        }}
      />
      <div
        className="flex justify-around bg-cover bg-top bg-no-repeat  bg-origin-border pt-10 md:py-56  px-5 py-5  md:px-32"
        // style={{
        //   backgroundImage: `url(${enterAppSvg})`,
        // }}
      >
        <div className="relative">
          <h1 className="font-rubik md:text-6xl md:max-w-2xl text-lg text-blue-10 md:font-bold mt-5 md:mt-20">
            Fast and robust yield strategy platform
          </h1>
          <p className="font-rubik text-blue-10 mt-5">
            Embrace the future of finance? Step into the decentralized world of
            Chopsui
          </p>
          <Button
            variant="secondary"
            className=" mt-5 h-14  !px-16 md:py-5  text-xl md:mt-10"
          >
            Enter App
          </Button>
        </div>
        <div className="relative ">
          <img
            src={chartSvg}
            className="  w-full "
            width={700}
            height={600}
            alt="chart"
          />
          <img
            src={logoShadowSvg}
            width={124}
            className=" absolute w-12 md:w-16 xl:w-20 2xl:w-24 2xl:left-32 xl:left-28 md:left-24 md:top-20 lg:top-28 xl:top-36 2xl:top-44 animate-pulse "
            height={81}
            alt="shadow"
          />
          <img
            src={logoSvg}
            alt="logo"
            width={151}
            height={115}
            className=" absolute w-16 md:w-24 xl:w-28 2xl:w-36  2xl:left-32 xl:left-28 md:left-24 2xl:top-28 xl:top-28 lg:top-28 top-24 md:top-20 animate-bounce "
          />
        </div>
      </div>
    </div>
  );
}
