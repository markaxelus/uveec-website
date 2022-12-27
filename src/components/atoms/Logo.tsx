import Image from "next/image";
import classNames from "classnames";

interface BaseLogoProps {
  src: string;
  className?: string;
}

export const Logo = ({ src, className }: BaseLogoProps) => {
  return (
    <div className={classNames(className, "relative")}>
      <Image
        layout="fill"
        src={`/images/${src}`}
        alt={""}
        decoding="async"
        priority
      />
    </div>
  );
};
