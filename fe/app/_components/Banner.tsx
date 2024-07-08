"use client";

import banner1 from "@/assets/image/banner/Banner 1.jpg";
import banner2 from "@/assets/image/banner/Banner 2.jpg";
import banner3 from "@/assets/image/banner/Banner 3.jpg";
import banner4 from "@/assets/image/banner/Banner 4.jpg";
import banner5 from "@/assets/image/banner/Banner 5.jpg";

import Image from "next/image";
import { EmblaCarousel, Slide } from "@/components/ui/carousel/EmblaCarousel";

const Banner = () => {
  const items: Slide[] = [
    { code: "1", image: banner1 },
    { code: "2", image: banner2 },
    { code: "3", image: banner3 },
    { code: "4", image: banner4 },
    { code: "5", image: banner5 },
  ];

  return (
    <EmblaCarousel
      slides={items}
      loop
      itemRender={(slides) => (
        <div className="shrink-0 grow-0 basis-full">
          {slides.map((slide) => (
            <Image
              key={slide.code}
              src={slide.image}
              className="w-full"
              alt="banner"
            />
          ))}
        </div>
      )}
    ></EmblaCarousel>
  );
};

export default Banner;
