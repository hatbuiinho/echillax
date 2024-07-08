import React, { useEffect, useLayoutEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./carousel.scss";
import { StaticImageData } from "next/image";
import { usePrevNextButtons } from "./usePreNextButton";
import clsx from "clsx";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

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
}: Props) {
  const [finalSlides, setFinalSlides] = useState<Slide[][]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop,
    slidesToScroll,
  });

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
            <ChevronLeftIcon
              size={isMobile ? 30 : 50}
              className="text-primary"
            />
          )}
        </button>
      )}

      <div className="embla__viewport flex-shrink" ref={emblaRef}>
        <div className={clsx("embla__container", containerClass)}>
          {finalSlides.map((_slides) => (
            <>{itemRender?.(_slides)}</>
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
            <ChevronRightIcon
              size={isMobile ? 40 : 50}
              className="text-primary"
            />
          )}
        </button>
      )}
    </div>
  );
}
