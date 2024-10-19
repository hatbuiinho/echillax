"use client";
import React from "react";
import clsx from "clsx";
import MotionDiv from "@/components/ui/motion/MotionDiv";
import { Image } from "@/types";
import SimpleNextImage from "@/components/ui/nextImage/SimpleNextImage";

const PartnerItem = (partners: Image[]) => {
  return partners.map((partnerLogo) =>
    partnerLogo ? (
      <div
        className={clsx(
          "flex h-8 shrink-0 grow-0 items-center gap-2",
          "cursor-pointer select-none"
        )}
        key={partnerLogo.id}
      >
        <SimpleNextImage
          className="h-full w-auto"
          alt={partnerLogo.title}
          imageId={partnerLogo.id}
        />
      </div>
    ) : (
      <></>
    )
  );
};
export default PartnerItem;
