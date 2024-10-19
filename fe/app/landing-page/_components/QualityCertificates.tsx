"use client";
import React from "react";
import QualityCertItem from "@/app/landing-page/_components/QualityCertItem";
import { EmblaCarousel } from "@/components/ui/carousel/EmblaCarousel";
import NextImage from "@/components/ui/nextImage/NextImage";
import { useCertificate } from "@/app/landing-page/[slug]/state";
import MotionDiv from "@/components/ui/motion/MotionDiv";
import { Image } from "@/types";
import SimpleNextImage from "@/components/ui/nextImage/SimpleNextImage";

export const certificateCarouselKey = "certificate_carousel";

type Props = {
  certs: Image[];
};

const QualityCertificates = ({ certs }: Props) => {
  const certificateState = useCertificate();

  return (
    <MotionDiv>
      <div className="mb-3 flex h-[30rem] w-full justify-center px-5">
        <SimpleNextImage
          className="h-full w-auto"
          imageId={certificateState.selectedCertId ?? certs[0]?.id}
        />
      </div>
      <EmblaCarousel
        hasArrows
        slides={certs}
        carouselKey={certificateCarouselKey}
        itemRender={(items) => (
          <QualityCertItem
            certs={items}
            selectCert={certificateState.selectCert}
          />
        )}
      />
    </MotionDiv>
  );
};
export default QualityCertificates;
