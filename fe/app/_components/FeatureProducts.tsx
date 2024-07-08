import Image from "next/image";
import { EmblaCarousel, Slide } from "@/components/ui/carousel/EmblaCarousel";
import { featureProductConfig } from "@/config/featureProductConfig";
import { useFeatureProducts } from "@/stores/featureProductStore";

const items = featureProductConfig.map((product) => ({
  image: product.logo,
  code: product.code,
}));
const FeatureProducts = () => {
  const { selectProduct, selectedProductCode } = useFeatureProducts();
  return (
    <div className="">
      <EmblaCarousel
        hasArrows
        slides={items}
        numberOfItemInSlide={1}
        itemRender={(slides) => {
          return slides.map((slide: Slide) => (
            <div
              key={slide.code}
              onClick={() => {
                selectProduct(slide.code);
              }}
              className="shrink-0 grow-0 basis-1/4 cursor-pointer"
            >
              <Image src={slide.image ?? ""} alt="brand" />
            </div>
          ));
        }}
        containerClass="items-center"
      />

      <div className="">
        <Image
          src={
            featureProductConfig.find(
              (prod) => prod.code === selectedProductCode,
            )?.detailImageSrc ?? ""
          }
          alt={selectedProductCode}
        ></Image>
      </div>
    </div>
  );
};

export default FeatureProducts;
