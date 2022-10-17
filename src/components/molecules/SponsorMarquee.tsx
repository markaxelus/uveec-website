import React from "react";
import Marquee from "react-fast-marquee";
import { SponsorLogo } from "../atoms/SponsorLogo";

export const SponsorMarquee = () => {
  return (
    <Marquee direction="right" speed={50} gradient={false} className="p-4">
      <SponsorLogo src="logo-bluerobotics.png" />
      <SponsorLogo src="logo-altium.png" />
      <SponsorLogo src="logo-pcbway.png" />
      <SponsorLogo src="logo-rainhouse.png" />
      <SponsorLogo src="logo-digikey.png" />
      <SponsorLogo src="logo-maximumprototyping.png" />
      <SponsorLogo src="logo-rapidharness.png" />
      <SponsorLogo src="logo-fibertek.png" />
      <SponsorLogo src="logo-altech.png" />
      <SponsorLogo src="logo-teck.png" />
      <SponsorLogo src="logo-uvic.png" />
    </Marquee>
  );
};
