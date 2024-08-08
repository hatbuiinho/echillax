"use client";

import React from "react";
import { ProductBenefit } from "@/types/directusType";
import NextImage from "@/components/ui/nextImage/NextImage";
import clsx from "clsx";
import MotionDiv from "@/components/ui/motion/MotionDiv";

const BenefitItem = (
  benefits: Pick<ProductBenefit, "id" | "image" | "description">[]
) => {
  return (
    <div className="flex shrink-0 grow-0 basis-full flex-col gap-3">
      {benefits.map((benefit, index) => (
        <MotionDiv
          transition={{ duration: (index + 1) * 0.75 }}
          className={clsx(
            "flex shrink-0 grow-0 items-center gap-2",
            "select-none rounded-xl",
            "relative",
            "ml-10 p-2",
            "bg-secondary-100"
          )}
          key={benefit.id}
        >
          <div className="relative -left-10 -mr-10 shrink-0">
            <div className="w-16">
              <NextImage imageId={benefit.image} />
            </div>
          </div>
          <div
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: benefit.description ?? "" }}
          />
        </MotionDiv>
      ))}
    </div>
  );
};
export default BenefitItem;
