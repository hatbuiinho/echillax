"use client";
import React from "react";
import QualityCertItem from "@/app/landing-page/_components/QualityCertItem";
import { EmblaCarousel } from "@/components/ui/carousel/EmblaCarousel";
import NextImage from "@/components/ui/nextImage/NextImage";
import { useCertificate } from "@/app/landing-page/[slug]/state";
import MotionDiv from "@/components/ui/motion/MotionDiv";
import { Image } from "@/types";

export const certificateCarouselKey = "certificate_carousel";

type Props = {
  certs: Image[];
};

const QualityCertificates = ({ certs }: Props) => {
  const certificateState = useCertificate();

  return (
    <MotionDiv>
      <div className="mb-3 flex w-full justify-center px-5">
        <div className="h-[31rem]">
          <div className="h-full">
            <NextImage
              className="h-full w-auto"
              imageId={certificateState.selectedCertId ?? certs[0]?.id}
            />
          </div>
        </div>
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
