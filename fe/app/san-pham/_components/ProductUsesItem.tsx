"use client";

import React from "react";
import { ProductArticleDto } from "@/app/san-pham/action";
import clsx from "clsx";
import NextImage from "@/components/ui/nextImage/NextImage";

const ProductUsesItem = (
  productUses: ProductArticleDto["product_useses"][]
) => {
  return productUses.map((uses, index) => (
    <div
      key={index}
      className={clsx(
        "flex shrink-0 grow-0 basis-full select-none flex-col gap-2 px-2 ",
        "md:basis-1/2 md:px-4",
        { "lg:basis-1/3": productUses?.length === 3 },
        { "lg:basis-1/4": (productUses?.length ?? 0) > 3 }
      )}
    >
      <div className="flex h-32 justify-center">
        <NextImage
          className="h-full w-auto"
          imageId={uses?.image?.toString()}
        />
      </div>
      <div className="text-justify text-sm ">{uses?.uses_text}</div>
    </div>
  ));
};
export default ProductUsesItem;
