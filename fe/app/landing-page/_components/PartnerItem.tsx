"use client";
import React from "react";
import clsx from "clsx";
import MotionDiv from "@/components/ui/motion/MotionDiv";
import NextImage from "@/components/ui/nextImage/NextImage";

const PartnerItem = (partners: string[]) => {
  return partners.map((partner) => (
    <MotionDiv
      className={clsx(
        "flex h-8 shrink-0 grow-0 items-center gap-2",
        "cursor-pointer select-none"
      )}
      key={partner}
    >
      <NextImage className="h-full w-auto" src={partner} />
    </MotionDiv>
  ));
};
export default PartnerItem;
