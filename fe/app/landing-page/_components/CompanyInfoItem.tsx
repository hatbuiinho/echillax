"use client";
import React from "react";
import { Image } from "@/types";
import NextImage from "@/components/ui/nextImage/NextImage";

const CompanyInfoItem = (companyImages: Image[]) => {
  return companyImages.map(
    (image) =>
      image && (
        <div key={image.id} className="flex shrink-0 grow-0 basis-full">
          <NextImage alt={image.title} imageId={image.id} />
        </div>
      )
  );
};
export default CompanyInfoItem;
