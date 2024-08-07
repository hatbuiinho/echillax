"use client";
import React from "react";
import cert1 from "@/assets/image/landing-page/Phieu kiem nghiem Chillax NEO CARE_page-0001.jpg";
import cert2 from "@/assets/image/landing-page/Phieu kiem nghiem Chillax NEO CARE_page-0002.jpg";
import cert3 from "@/assets/image/landing-page/XNCB CHILLAX NEO CARE_page-0001.jpg";
import cert4 from "@/assets/image/landing-page/XNCB CHILLAX NEO CARE_page-0002.jpg";
import cert5 from "@/assets/image/landing-page/XNCB CHILLAX NEO CARE_page-0003.jpg";
import cert6 from "@/assets/image/landing-page/XNCB CHILLAX NEO CARE_page-0004.jpg";
import cert7 from "@/assets/image/landing-page/cert chillax.jpg";
import cert8 from "@/assets/image/landing-page/Chung nhan Iso 22000 va Haccp 2020 new 2022-1.jpg";
import cert9 from "@/assets/image/landing-page/GMP 2024.jpg";
import CertItem from "@/app/landing-page/_components/CertItem";
import { EmblaCarousel } from "@/components/ui/carousel/EmblaCarousel";
import NextImage from "@/components/ui/nextImage/NextImage";
import { useCertificate } from "@/app/landing-page/state";
import MotionDiv from "@/components/ui/motion/MotionDiv";

export const certificateCarouselKey = "certificate_carousel";
const certs = [
  { id: 0, image: cert9 },
  { id: 1, image: cert8 },
  { id: 2, image: cert7 },
  { id: 3, image: cert6 },
  { id: 4, image: cert5 },
  { id: 5, image: cert1 },
  { id: 6, image: cert2 },
  { id: 7, image: cert3 },
  { id: 8, image: cert4 },
];

const Certificates = () => {
  const certificateState = useCertificate();

  return (
    <MotionDiv>
      <div className="mb-3 flex w-full justify-center px-5">
        <div className="h-[31rem]">
          <div className="h-full">
            <NextImage
              className="h-full w-auto"
              src={
                certs.find(
                  (cert) => cert.id === certificateState.selectedCertId
                )?.image
              }
            />
          </div>
        </div>
      </div>
      <EmblaCarousel
        hasArrows
        slides={certs}
        carouselKey={certificateCarouselKey}
        itemRender={(items) => (
          <CertItem certs={items} selectCert={certificateState.selectCert} />
        )}
      />
    </MotionDiv>
  );
};
export default Certificates;
