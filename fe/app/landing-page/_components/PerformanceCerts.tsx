import React from "react";
import chillaxCert from "@/assets/image/landing-page/certificate/Cert Chillax-01.jpg";
import mediabestCert from "@/assets/image/landing-page/certificate/Cert MediBest-01.jpg";
import NextImage from "@/components/ui/nextImage/NextImage";
import MotionDiv from "@/components/ui/motion/MotionDiv";

const PerformanceCerts = () => {
  return (
    <MotionDiv className="grid grid-cols-2 justify-center justify-items-center gap-2">
      <div className="h-full">
        <NextImage className="h-full w-auto" src={chillaxCert} />
      </div>
      <div className="h-full">
        <NextImage className="h-full w-auto" src={mediabestCert} />
      </div>
    </MotionDiv>
  );
};
export default PerformanceCerts;
