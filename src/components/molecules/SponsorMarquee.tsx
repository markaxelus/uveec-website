import Marquee from "react-fast-marquee";
import { Logo } from "../atoms";

export const SponsorMarquee = () => {
  return (
    <Marquee direction="right" speed={50} gradient={false}>
      <div className="flex flex-row items-center justify-evenly space-x-5 mr-5">
        <Logo src="bluerobotics.png" className="h-12 w-56" />
        <Logo src="altium.png" className="h-10 w-48" />
        <Logo src="pcbway.png" className="h-10 w-48" />
        <Logo src="rainhouse.png" className="h-12 w-52" />
        <Logo src="digikey.png" className="h-14 w-28" />
        <Logo src="maximumprototyping.png" className="h-12 w-52" />
        <Logo src="rapidharness.png" className="h-12 w-52" />
        <Logo src="fibertek.png" className="h-12 w-52" />
        <Logo src="altech.png" className="h-12 w-52" />
        <Logo src="teck.png" className="h-10 w-36" />
        <Logo src="maximumprototyping.png" className="h-14 w-52" />
        <Logo src="uvic.png" className="h-10 w-36" />
        <Logo src="ess.png" className="h-16 w-16" />
        <Logo src="pointhope.png" className="h-24 w-52" />
        <Logo src="seaspan.png" className="h-16 w-56" />
      </div>
    </Marquee>
  );
};
