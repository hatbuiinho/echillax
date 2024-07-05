import Image, { StaticImageData } from "next/image";
import React from "react";
import {
  Swiper,
  SwiperSlide,
  SwiperProps,
  SwiperSlideProps,
} from "swiper/react";

const SwiperCarousel = (
  props: SwiperProps & {
    items?: StaticImageData[];
    itemRender?: (
      item: StaticImageData,
      Slide: React.FunctionComponent<SwiperSlideProps>,
    ) => React.ReactNode;
  },
) => {
  const { children, items, itemRender } = props;
  return (
    <Swiper {...props}>
      {children ?? items?.map((image) => itemRender?.(image, SwiperSlide))}
    </Swiper>
  );
};

export default SwiperCarousel;
