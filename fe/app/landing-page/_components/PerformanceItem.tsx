"use client";
import React from "react";
import MotionDiv from "@/components/ui/motion/MotionDiv";
import clsx from "clsx";
import NextImage from "@/components/ui/nextImage/NextImage";

const PerformanceItem = (
  certs: { id: number; image: string; description: string }[]
) => {
  return certs.map((cert) => (
    <MotionDiv
      className={clsx("shrink-0 grow-0 basis-full md:basis-1/2", "select-none")}
      key={cert.id}
    >
      <div className="w-full">
        <NextImage src={cert.image} />
        <div className="p-2 text-center text-primary">{cert.description}</div>
      </div>
    </MotionDiv>
  ));
};
export default PerformanceItem;
