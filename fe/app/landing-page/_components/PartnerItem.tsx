"use client";
import React from "react";
import clsx from "clsx";
import MotionDiv from "@/components/ui/motion/MotionDiv";
import NextImage from "@/components/ui/nextImage/NextImage";
import { Image } from "@/types";

const PartnerItem = (partners: Image[]) => {
  return partners.map((partnerLogo) =>
    partnerLogo ? (
      <MotionDiv
        className={clsx(
          "flex h-8 shrink-0 grow-0 items-center gap-2",
          "cursor-pointer select-none"
        )}
        key={partnerLogo.id}
      >
        <NextImage
          className="h-full w-auto"
          alt={partnerLogo.title}
          imageId={partnerLogo.id}
        />
      </MotionDiv>
    ) : (
      <></>
    )
  );
};
export default PartnerItem;
