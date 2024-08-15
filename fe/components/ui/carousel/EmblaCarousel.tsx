"use client";

import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";
import React, { Fragment, ReactNode, useEffect, useState } from "react";
import { usePrevNextButtons } from "@/hooks/usePreNextButton";
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
  className?: string;
  hasNavigation?: boolean;
  navigationButtonRender?: (
    index: number,
    onClick: (index: number) => void
  ) => ReactNode;
  navigationClass?: string;
  playOnInit?: boolean;
  onSlideChange?: (index: number) => void;
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
  className,
  navigationButtonRender,
  hasNavigation,
  navigationClass,
  playOnInit,
  onSlideChange,
}: Props) {
  const [finalSlides, setFinalSlides] = useState<any[][]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop,
      slidesToScroll,
    },
    [
      AutoPlay({
        playOnInit: playOnInit,
        delay: delay ?? 5000,
        active: autoPlay,
      }),
    ]
  );

  const {
    onNextButtonClick,
    onPrevButtonClick,
    nextBtnDisabled,
    prevBtnDisabled,
  } = usePrevNextButtons(emblaApi);

  const [navigations, setNavigations] = useState<any[]>([]);

  const { selectSlide, setSlides, setApi } = useCarouselState();

  const { selectedIndex, onDotButtonClick, scrollSnaps } =
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
    if (emblaApi) {
      setApi(carouselKey, emblaApi);
    }
  }, [emblaApi]);

  useEffect(() => {
    const formattedSlides = [];
    for (let i = 0; i < slides.length / numberOfItemInSlide; i++) {
      const slide = slides.slice(
        i * numberOfItemInSlide,
        i * numberOfItemInSlide + numberOfItemInSlide
      );
      formattedSlides.push(slide);
    }
    setFinalSlides(formattedSlides);
  }, [numberOfItemInSlide]);

  useEffect(() => {
    // emblaApi?.scrollTo(initSlideIndex, true);
    onSlideChange?.(initSlideIndex);
  }, [initSlideIndex]);

  useEffect(() => {
    const scrollSnapLength = scrollSnaps.length;
    const scrollSnapIndex = scrollSnaps.map((_, index) => index);

    if (scrollSnapLength > 4) {
      const segment1 = scrollSnapIndex.slice(0, 3);
      const scrollButtonSegments = [
        ...segment1,
        NaN,
        ...[scrollSnapIndex[scrollSnaps.length - 1]],
      ];
      setNavigations(scrollButtonSegments);
    } else {
      setNavigations(scrollSnapIndex);
    }
  }, [scrollSnaps.length]);
  return (
    <div>
      <div className={clsx("embla", className)}>
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
                <Image
                  className="h-auto w-full"
                  src={arrowLeft}
                  alt="previous"
                />
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
      {hasNavigation && (
        <div className={clsx("flex justify-center gap-2", navigationClass)}>
          {navigations.map((index) => {
            return navigationButtonRender ? (
              navigationButtonRender?.(index, onDotButtonClick)
            ) : (
              <button
                className={clsx("rounded-full  px-4 py-2 text-center", {
                  "bg-secondary-400": index === selectedIndex,
                  "bg-white": index != selectedIndex,
                })}
                key={index}
                onClick={
                  isNaN(index) ? () => {} : () => onDotButtonClick(index)
                }
              >
                {isNaN(index) ? "..." : +index + 1}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
