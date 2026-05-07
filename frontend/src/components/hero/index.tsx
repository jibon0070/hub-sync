import blur from "../../assets/blur-2.png";
import arrow from "../../assets/arrow.png";
import HeroImage from "./hero-image";
import misc from "../../assets/misc.png";
import Header from "./header";

export default function Hero() {
  return (
    <section className="relative">
      <Header />
      <img src={blur} alt="blur" className="absolute right-0 top-0 h-full" />
      <div className="container mx-auto py-20 z-20">
        <div className="flex-1 flex items-center gap-18">
          <div className="flex-2 space-y-12 relative">
            <img src={misc} alt="misc" className="absolute top-0 right-0" />
            <img
              src={misc}
              alt="misc"
              className="absolute size-3 -bottom-10 right-30"
            />
            <div>
              <p className="text-[20px] leading-[30px]">
                Hi, WE ARE HUBSYNC TECHNOLOGY COMPANY
              </p>
              <h1 className="grid text-[96px] leading-[110px]">
                <span className="font-bold">CREATE</span>
                <span className="font-light">CONNECT &amp;</span>
                <span className="font-extrabold">TRANSFORM</span>
              </h1>
            </div>
            <div className="flex">
              <img src={arrow} alt="arrow" className="mt-10" />
              <div className="flex justify-center flex-1">
                <p className="w-[450px] text-[20px] leading-medium">
                  Digital interactions reimagined—building intuitive experiences
                  that resonate and drive results.
                </p>
              </div>
            </div>
          </div>
          <HeroImage className="flex-1" />
        </div>
      </div>
    </section>
  );
}
