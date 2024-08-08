import React from "react";
import chillaxCert from "@/assets/image/landing-page/certificate/Cert Chillax-01.jpg";
import mediabestCert from "@/assets/image/landing-page/certificate/Cert MediBest-01.jpg";
import MotionDiv from "@/components/ui/motion/MotionDiv";
import { EmblaCarousel } from "@/components/ui/carousel/EmblaCarousel";
import PerformanceItem from "@/app/landing-page/_components/PerformanceItem";

const certs = [
  { id: 0, image: chillaxCert, description: "Chứng nhận Chillax" },
  { id: 1, image: mediabestCert, description: "Chứng nhận Mediabest" },
];

const PerformanceCerts = () => {
  return (
    <MotionDiv className="flex justify-center">
      <EmblaCarousel
        slides={certs}
        carouselKey="performance_carousel"
        itemRender={PerformanceItem}
        containerClass="flex gap-2"
      />
      {/*<div className="h-full">*/}
      {/*  <NextImage className="h-full w-auto" src={chillaxCert} />*/}
      {/*</div>*/}
      {/*<div className="h-full">*/}
      {/*  <NextImage className="h-full w-auto" src={mediabestCert} />*/}
      {/*</div>*/}
    </MotionDiv>
  );
};
export default PerformanceCerts;
