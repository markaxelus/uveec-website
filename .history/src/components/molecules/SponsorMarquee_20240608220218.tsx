import Marquee from "react-fast-marquee";
import { Logo } from "../atoms";
import { SponsorMap } from "../../constants";

export const SponsorMarquee = () => {
  return (
    <Marquee direction="right" speed={80} gradient={false}>
      <div className="flex flex-row items-center justify-evenly space-x-24 space-y-4 mr-24">
        {SponsorMap.map((card, i) => (
          <Logo
            src={card.img}
            className="h-12 w-56 dark:hidden"
            classNameImage="object-contain"
          />
        ))}
        {/*<Logo
          src="bluerobotics.png"
          className="h-12 w-56 dark:hidden"
          classNameImage="object-contain"
        />
        <Logo
          src="altium.png"
          className="h-10 w-48 dark:hidden"
          classNameImage="object-contain"
        />
        <Logo
          src="pcbway.png"
          className="h-10 w-48 dark:hidden"
          classNameImage="object-contain"
        />
        <Logo
          src="rainhouse.png"
          className="h-12 w-52 dark:hidden"
          classNameImage="object-contain"
        />
        <Logo
          src="digikey.png"
          className="h-14 w-28 dark:hidden"
          classNameImage="object-contain"
        />
        <Logo
          src="maximumprototyping.png"
          className="h-12 w-52 dark:hidden"
          classNameImage="object-contain"
        />
        <Logo
          src="rapidharness.png"
          className="h-12 w-52 dark:hidden"
          classNameImage="object-contain"
        />
        <Logo
          src="fibertek.png"
          className="h-12 w-52 dark:hidden"
          classNameImage="object-contain"
        />
        <Logo
          src="altech.png"
          className="h-12 w-52 dark:hidden"
          classNameImage="object-contain"
        />
        <Logo
          src="teck.png"
          className="h-10 w-36 dark:hidden"
          classNameImage="object-contain"
        />
        <Logo
          src="uvic.png"
          className="h-10 w-36 dark:hidden"
          classNameImage="object-contain"
        />
        <Logo
          src="ess.png"
          className="h-16 w-16 dark:hidden"
          classNameImage="object-contain"
        />
        <Logo
          src="pointhope.png"
          className="h-24 w-52 dark:hidden"
          classNameImage="object-contain"
        />
        <Logo
          src="seaspan.png"
          className="h-16 w-56 dark:hidden"
          classNameImage="object-contain"
        />
        <Logo
          src="solidworks.png"
          className="h-14 w-52 dark:hidden"
          classNameImage="object-contain"
        />
        <Logo
          src="bluerobotics-dark.png"
          className="h-12 w-56 hidden dark:flex"
          classNameImage="object-contain"
        />
        <Logo
          src="altium-dark.png"
          className="h-10 w-48 hidden dark:flex"
          classNameImage="object-contain"
        />
        <Logo
          src="pcbway-dark.png"
          className="h-10 w-48 hidden dark:flex"
          classNameImage="object-contain"
        />
        <Logo
          src="rainhouse-dark.png"
          className="h-12 w-52 hidden dark:flex"
          classNameImage="object-contain"
        />
        <Logo
          src="digikey_logo_white.webp"
          className="h-14 w-28 hidden dark:flex"
          classNameImage="object-contain"
        />
        <Logo
          src="maximumprototyping-dark.png"
          className="h-12 w-52 hidden dark-flex"
          classNameImage="object-contain"
        />
        <Logo
          src="rapidharness-dark.png"
          className="h-12 w-52 hidden dark:flex"
          classNameImage="object-contain"
        />
        <Logo
          src="fibertek-dark.png"
          className="h-12 w-52 hidden dark:flex"
          classNameImage="object-contain"
        />
        <Logo
          src="altech-dark.png"
          className="h-12 w-52 hidden dark:flex"
          classNameImage="object-contain"
        />
        <Logo
          src="teck-dark.png"
          className="h-10 w-36 hidden dark:flex"
          classNameImage="object-contain"
        />
        <Logo
          src="uvic-dark.png"
          className="h-10 w-36 hidden dark:flex"
          classNameImage="object-contain"
        />
        <Logo
          src="ess-dark.png"
          className="h-16 w-16 hidden dark:flex"
          classNameImage="object-contain"
        />
        <Logo
          src="pointhope-dark.png"
          className="h-24 w-52 hidden dark:flex"
          classNameImage="object-contain"
        />
        <Logo
          src="seaspan-dark.png"
          className="h-16 w-56 hidden dark:flex"
          classNameImage="object-contain"
        />
        <Logo
          src="solidworks-dark.png"
          className="h-16 w-56 hidden dark:flex"
          classNameImage="object-contain"
        />*/}
      </div>
    </Marquee>
  );
};
