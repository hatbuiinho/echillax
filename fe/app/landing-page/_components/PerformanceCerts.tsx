import React from "react";
import MotionDiv from "@/components/ui/motion/MotionDiv";
import { EmblaCarousel } from "@/components/ui/carousel/EmblaCarousel";
import PerformanceItem from "@/app/landing-page/_components/PerformanceItem";
import { Image } from "@/types";

type Props = {
  certs: Image[];
};

const PerformanceCerts = ({ certs }: Props) => {
  return (
    <MotionDiv className="flex justify-center">
      <EmblaCarousel
        loop
        playOnInit
        hasNavigation
        slides={certs}
        carouselKey="performance_carousel"
        itemRender={PerformanceItem}
        containerClass="flex gap-2"
        navigationClass="py-2"
      />
    </MotionDiv>
  );
};
export default PerformanceCerts;
