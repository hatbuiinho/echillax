import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";
import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import "./carousel.scss";
import { usePrevNextButtons } from "./usePreNextButton";

import arrowLeft from "@/assets/image/misc/arrow-left.png";
import arrowRight from "@/assets/image/misc/arrow-right.png";

import AutoPlay from "embla-carousel-autoplay";

type Props = {
  slides: Slide[];
  itemRender?: (slide: (Slide & any)[]) => React.ReactNode;
  prevButton?: () => React.ReactNode;
  nextButton?: () => React.ReactNode;
  loop?: boolean;
  slidesToScroll?: number | "auto";
  containerClass?: string;
  numberOfItemInSlide?: number;
  hasArrows?: boolean;
  autoPlay?: boolean;
  delay?: number;
};

export type Slide = {
  image?: string | StaticImageData;
  code?: any;
};

export function EmblaCarousel({
  slides,
  itemRender,
  prevButton,
  nextButton,
  loop,
  slidesToScroll = "auto",
  containerClass,
  numberOfItemInSlide = 1,
  hasArrows = false,
  autoPlay,
  delay,
}: Props) {
  const [finalSlides, setFinalSlides] = useState<Slide[][]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop,
      slidesToScroll,
    },
    [AutoPlay({ playOnInit: autoPlay, delay: delay ?? 5000 })],
  );

  useEffect(() => {
    const formattedSlides = [];
    for (let i = 0; i < slides.length / numberOfItemInSlide; i++) {
      const slide = slides.slice(
        i * numberOfItemInSlide,
        i * numberOfItemInSlide + numberOfItemInSlide,
      );
      formattedSlides.push(slide);
    }
    setFinalSlides(formattedSlides);
  }, [numberOfItemInSlide]);

  const [isMobile, setIsMobile] = useState(true);

  useLayoutEffect(() => {
    function updateSize() {
      if (window.matchMedia("only screen and (min-width: 480px)").matches) {
        setIsMobile(true);
      }
      if (window.matchMedia("only screen and (min-width: 992px)").matches) {
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const {
    onNextButtonClick,
    onPrevButtonClick,
    nextBtnDisabled,
    prevBtnDisabled,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla">
      {hasArrows && (
        <button
          disabled={prevBtnDisabled}
          className={clsx("embla__prev", { invisible: prevBtnDisabled })}
          onClick={onPrevButtonClick}
        >
          {prevButton ? (
            prevButton()
          ) : (
            // <ChevronLeftIcon
            //   size={isMobile ? 30 : 50}
            //   className="text-primary"
            // />
            <div className="w-16 p-2">
              <Image className="h-auto w-full" src={arrowLeft} alt="previous" />
            </div>
          )}
        </button>
      )}

      <div className="embla__viewport flex-shrink" ref={emblaRef}>
        <div className={clsx("embla__container", containerClass)}>
          {finalSlides.map((_slides, index) => (
            <Fragment key={index}>{itemRender?.(_slides)}</Fragment>
          ))}
        </div>
      </div>

      {hasArrows && (
        <button
          disabled={nextBtnDisabled}
          className={clsx("embla__next", { invisible: nextBtnDisabled })}
          onClick={onNextButtonClick}
        >
          {nextButton ? (
            nextButton()
          ) : (
            // <ChevronRightIcon
            //   size={isMobile ? 40 : 50}
            //   className="text-primary"
            // />

            <div className="w-16 p-2">
              <Image
                className="h-auto w-full"
                src={arrowRight}
                alt="previous"
              />
            </div>
          )}
        </button>
      )}
    </div>
  );
}
