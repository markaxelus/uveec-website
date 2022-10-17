import React from "react";

interface SponsorLogoProps {
  src: string;
}

export const SponsorLogo = ({ src }: SponsorLogoProps) => {
  return <img className="h-16 p-4" src={`images/${src}`} />;
};
