import Marquee from "react-fast-marquee";
import { Logo } from "../atoms";

export const IndexMarquee = () => {
  return (
    <Marquee direction="right" speed={40} gradient={false}>
      <div className="flex flex-row items-center justify-evenly space-x-14 mr-14">
        <Logo src="homepage/1.png" className="h-96 w-96" classNameImage="object-cover"/>
        <Logo src="homepage/2.png" className="h-96 w-96" classNameImage="object-cover"/>
        <Logo src="homepage/3.png" className="h-96 w-96" classNameImage="object-cover"/>
        <Logo src="homepage/4.png" className="h-96 w-96" classNameImage="object-cover"/>
        <Logo src="homepage/5.png" className="h-96 w-96" classNameImage="object-cover"/>
        <Logo src="homepage/6.png" className="h-96 w-96" classNameImage="object-cover"/>
        <Logo src="homepage/7.png" className="h-96 w-96" classNameImage="object-cover"/>

      </div>
    </Marquee>
  );
};
