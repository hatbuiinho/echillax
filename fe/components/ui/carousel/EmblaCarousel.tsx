import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import { usePrevNextButtons } from "../../../hooks/usePreNextButton";
import "./carousel.scss";

import arrowLeft from "@/assets/image/misc/arrow-left.png";
import arrowRight from "@/assets/image/misc/arrow-right.png";

import { useDotButton } from "@/hooks/useDotButtons";
import { useCarouselState } from "@/stores/useCarouselState";
import AutoPlay from "embla-carousel-autoplay";

type Props = {
  slides: any[];
  itemRender?: (slide: any[]) => React.ReactNode;
  prevButton?: () => React.ReactNode;
  nextButton?: () => React.ReactNode;
  loop?: boolean;
  slidesToScroll?: number | "auto";
  containerClass?: string;
  numberOfItemInSlide?: number;
  hasArrows?: boolean;
  autoPlay?: boolean;
  delay?: number;
  carouselKey: string;
  initSlideIndex?: number;
};

export type Slide = {
  image?: string | StaticImageData;
  code?: any;
  index?: number;
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
  carouselKey,
  initSlideIndex = 0,
}: Props) {
  const [finalSlides, setFinalSlides] = useState<any[][]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop,
      slidesToScroll,
    },
    [
      AutoPlay({
        playOnInit: autoPlay,
        delay: delay ?? 5000,
        active: true,
      }),
    ],
  );

  const {
    onNextButtonClick,
    onPrevButtonClick,
    nextBtnDisabled,
    prevBtnDisabled,
  } = usePrevNextButtons(emblaApi);

  const { selectSlide, setSlides, [carouselKey]: state } = useCarouselState();

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  useEffect(() => {
    selectSlide(carouselKey, selectedIndex);
  }, [selectedIndex]);

  useEffect(() => {
    if (slides?.length) {
      setSlides(carouselKey, slides);
    }
  }, [slides]);

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

  useEffect(() => {
    emblaApi?.scrollTo(initSlideIndex, true);
  }, [initSlideIndex]);

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
