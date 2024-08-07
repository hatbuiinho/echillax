import React from "react";

import partner1 from "@/assets/image/landing-page/partner/Logo BV 1.png";
import partner2 from "@/assets/image/landing-page/partner/Logo BV 2.png";
import partner3 from "@/assets/image/landing-page/partner/Logo BV 3.png";
import partner4 from "@/assets/image/landing-page/partner/Logo BV 4.png";
import partner5 from "@/assets/image/landing-page/partner/Logo BV 5.png";
import partner6 from "@/assets/image/landing-page/partner/Logo Vien Dinh Duong Quoc Gia.png";
import { EmblaCarousel } from "@/components/ui/carousel/EmblaCarousel";
import PartnerItem from "@/app/landing-page/_components/PartnerItem";
import MotionDiv from "@/components/ui/motion/MotionDiv";

const partners = [partner1, partner2, partner3, partner4, partner5, partner6];

const Partners = () => {
  return (
    <MotionDiv className="flex justify-center rounded-xl border bg-white">
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
