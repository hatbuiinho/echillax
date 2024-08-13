"use client";
import React from "react";
import clsx from "clsx";
import NextImage from "@/components/ui/nextImage/NextImage";
import { Image } from "@/types";

const PerformanceItem = (certs: Image[]) => {
  return certs.map((cert) => (
    <div
      className={clsx("shrink-0 grow-0 basis-full md:basis-1/2", "select-none")}
      key={cert?.id}
    >
      <div className="h-full px-2">
        <NextImage imageId={cert?.id} loading="eager" />
        <div className="p-2 text-center font-bold text-primary">
          {cert?.title}
        </div>
      </div>
    </div>
  ));
};
export default PerformanceItem;
