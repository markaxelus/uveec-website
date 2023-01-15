import React, { useState } from "react";
import { CarouselMap } from "../../constants";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import classNames from "classnames";
import Image from "next/image";

export const Carousel = ({ slides }: any) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="relative flex justify-center item-center">
      <FaAngleLeft
        className={classNames("left-arrow", "opacity-40")}
        onClick={prevSlide}
      />
      <FaAngleRight
        className={classNames("right-arrow", "opacity-40")}
        onClick={nextSlide}
      />
      {CarouselMap.map((slide, i) => {
        return (
          <div className={i === current ? "slide active" : "slide"} key={i}>
            {i === current && (
              <div className="relative h-96 w-96">
                <Image
                  src={slide.src}
                  alt=""
                  layout="fill"
                  className="object-cover rounded-xl"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
