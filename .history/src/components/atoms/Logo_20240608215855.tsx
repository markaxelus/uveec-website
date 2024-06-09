import Image from "next/image";
import classNames from "classnames";

interface BaseLogoProps {
  src: string;
  className?: string;
  classNameImage?: string;
}

// Logo is used for building Marquee.
// className is to style div container of image.
// classNameImage is to style image itself. object-contain is used for SponsorMarquee. object-cover is used for IndexMarquee.

export const Logo = ({ src, className, classNameImage }: BaseLogoProps) => {
  return (
    <div className={classNames(className, "relative")}>
      <Image
        layout="fill"
        src={`${src}`}
        alt={""}
        decoding="async"
        className={classNameImage}
        priority
      />
    </div>
  );
};
