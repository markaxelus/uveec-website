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
      </div>
    </Marquee>
  );
};
