import { EmblaCarousel, Slide } from "@/components/ui/carousel/EmblaCarousel";
import NextImage from "@/components/ui/nextImage/NextImage";
import { featureProductConfig } from "@/config/featureProductConfig";
import { CarouselState, useCarouselState } from "@/stores/useCarouselState";
import clsx from "clsx";
import { useEffect, useState } from "react";

const brands = featureProductConfig.map((product) => ({
  image: product.logo,
  code: product.code,
  index: product.index,
}));

const details = featureProductConfig.map((product) => ({
  image: product.detailImageSrc,
  code: product.code,
  index: product.index,
}));

const featureDetailKey = "featureDetails";
const featureProductKey = "featureProduct";

const FeatureProducts = () => {
  const detailState = useCarouselState()[featureDetailKey] as CarouselState;
  const [productIndex, setProductIndex] = useState(0);
  useEffect(() => {
    if (detailState?.selectedIndex != undefined) {
      setProductIndex(detailState?.selectedIndex);
    }
  }, [detailState]);

  return (
    <div className="">
      <EmblaCarousel
        hasArrows
        slides={brands}
        // initSlideIndex={detailState?.selectedIndex ?? 0}
        numberOfItemInSlide={1}
        carouselKey={featureProductKey}
        itemRender={(slides) => {
          return slides.map((slide: Slide) => (
            <div
              key={slide.code}
              onClick={() => {
                setProductIndex(slide.index ?? 0);
              }}
              className={clsx(
                "relative flex h-16 shrink-0 grow-0 basis-1/2 cursor-pointer justify-center pb-1 md:h-32 md:basis-1/3 lg:basis-1/4 xl:basis-1/5",

                " before::content-[''] before:absolute before:bottom-0 before:left-1/2 before:ml-0 before:h-1 before:w-0 before:bg-primary before:duration-300",
                {
                  "before:-ml-16 before:w-32 before:md:-ml-20 before:md:w-40":
                    productIndex === slide.index,
                },
              )}
            >
              <NextImage
                className="h-full w-auto"
                src={slide.image ?? ""}
                alt="brand"
              />
            </div>
          ));
        }}
        containerClass="items-center"
      />

      <EmblaCarousel
        carouselKey={featureDetailKey}
        slides={details}
        loop
        initSlideIndex={productIndex}
        numberOfItemInSlide={1}
        itemRender={(_details) =>
          _details.map((detail: Slide) => (
            <div
              key={detail.index}
              className={clsx("shrink-0 grow-0 basis-full duration-700", {
                "opacity-100": productIndex === detail.index,
                "opacity-50": productIndex != detail.index,
              })}
            >
              <NextImage src={detail.image} alt={detail.code} />
            </div>
          ))
        }
      />

      {/* <div className="mt-2">
        <Image
          src={
            featureProductConfig.find(
              (prod) => prod.code === selectedProductCode,
            )?.detailImageSrc ?? ""
          }
          alt={selectedProductCode}
        ></Image>
      </div> */}
    </div>
  );
};

export default FeatureProducts;
