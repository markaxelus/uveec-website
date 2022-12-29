import Marquee from "react-fast-marquee";
import { Logo } from "../atoms";

export const SponsorMarquee = () => {
  return (
    <Marquee direction="right" speed={80} gradient={false}>
      <div className="flex flex-row items-center justify-evenly space-x-28">
        <Logo src="bluerobotics.png" className="h-12 w-56 dark:hidden" />
        <Logo src="altium.png" className="h-10 w-48 dark:hidden" />
        <Logo src="pcbway.png" className="h-10 w-48 dark:hidden" />
        <Logo src="rainhouse.png" className="h-12 w-52 dark:hidden" />
        <Logo src="digikey.png" className="h-14 w-28 dark:hidden" />
        <Logo src="maximumprototyping.png" className="h-12 w-52 dark:hidden" />
        <Logo src="rapidharness.png" className="h-12 w-52 dark:hidden" />
        <Logo src="fibertek.png" className="h-12 w-52 dark:hidden" />
        <Logo src="altech.png" className="h-12 w-52 dark:hidden" />
        <Logo src="teck.png" className="h-10 w-36 dark:hidden" />
        <Logo src="uvic.png" className="h-10 w-36 dark:hidden" />
        <Logo src="ess.png" className="h-16 w-16 dark:hidden" />
        <Logo src="pointhope.png" className="h-24 w-52 dark:hidden" />
        <Logo src="seaspan.png" className="h-16 w-56 dark:hidden" />

        <Logo
          src="bluerobotics-dark.png"
          className="h-12 w-56 hidden dark:flex"
        />
        <Logo src="altium-dark.png" className="h-10 w-48 hidden dark:flex" />
        <Logo src="pcbway-dark.png" className="h-10 w-48 hidden dark:flex" />
        <Logo src="rainhouse-dark.png" className="h-12 w-52 hidden dark:flex" />
        <Logo
          src="digikey_logo_white.webp"
          className="h-14 w-28 hidden dark:flex"
        />
        <Logo
          src="maximumprototyping-dark.png"
          className="h-12 w-52 hidden dark-flex"
        />
        <Logo
          src="rapidharness-dark.png"
          className="h-12 w-52 hidden dark:flex"
        />
        <Logo src="fibertek-dark.png" className="h-12 w-52 hidden dark:flex" />
        <Logo src="altech-dark.png" className="h-12 w-52 hidden dark:flex" />
        <Logo src="teck-dark.png" className="h-10 w-36 hidden dark:flex" />
        <Logo src="uvic-dark.png" className="h-10 w-36 hidden dark:flex" />
        <Logo src="ess-dark.png" className="h-16 w-16 hidden dark:flex" />
        <Logo src="pointhope-dark.png" className="h-24 w-52 hidden dark:flex" />
        <Logo src="seaspan-dark.png" className="h-16 w-56 hidden dark:flex" />
      </div>
    </Marquee>
  );
};
