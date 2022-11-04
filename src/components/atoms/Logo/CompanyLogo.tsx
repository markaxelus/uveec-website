import React from "react";
import Image from "next/image";
import classNames from "classnames";

type Size = "sm" | "lg" | "xl";

interface BaseLogoProps {
  size?: Size;
  className?: string;
}

export const CompanyLogo = ({ size = "sm", className }: BaseLogoProps) => {
  let sizeStyle = "w-16 h-16";

  if (size === "lg") sizeStyle = "w-24 h-24";
  if (size === "xl") sizeStyle = "w-32 h-32";

  return (
    <div className={classNames(className, sizeStyle, "relative")}>
      <Image layout="fill" src="/images/company-logo.png" />
    </div>
  );
};
