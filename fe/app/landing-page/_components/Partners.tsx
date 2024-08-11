import React from "react";
import { EmblaCarousel } from "@/components/ui/carousel/EmblaCarousel";
import PartnerItem from "@/app/landing-page/_components/PartnerItem";
import MotionDiv from "@/components/ui/motion/MotionDiv";
import { Image } from "@/types";

type Props = { partners: Image[] };
const Partners = ({ partners }: Props) => {
  return (
    <MotionDiv className="flex justify-center rounded-xl border bg-white pe-3">
      <EmblaCarousel
        slides={partners}
        carouselKey="partner_carousel"
        itemRender={PartnerItem}
        containerClass="flex gap-2 py-2"
      />
    </MotionDiv>
  );
};
export default Partners;
