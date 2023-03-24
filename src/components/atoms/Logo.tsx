import Image from "next/image";
import classNames from "classnames";

interface BaseLogoProps {
  src: string;
  className?: string;
  classNameImage?: string;
}

export const Logo = ({ src, className, classNameImage }: BaseLogoProps) => {
  return (
    <div className={classNames(className, "relative")}>
      <Image
        layout="fill"
        src={`/images/${src}`}
        alt={""}
        decoding="async"
        className={classNameImage}
        priority
      />
    </div>
  );
};
