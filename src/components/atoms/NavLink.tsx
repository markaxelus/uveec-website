import classNames from "classnames";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

interface NavLinkProps {
  link: string;
  name: string;
}

export const NavLink = ({ link, name }: NavLinkProps) => {
  const { asPath } = useRouter();

  const isHighlighted = useMemo(() => {
    if (asPath === "/" && name === "Home") return true;
    return asPath.replace("/", "") === name.replace("/", "").toLowerCase();
  }, [asPath, name]);

  return (
    <a
      href={link}
      className={classNames(
        isHighlighted ? "text-orange" : "text-white",
        "text-lg"
      )}
    >
      {name}
    </a>
  );
};
