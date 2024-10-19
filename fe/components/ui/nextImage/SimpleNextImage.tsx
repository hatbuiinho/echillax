"use client";
import { getFileLinkFromDirectus } from "@/utils/directus";
import clsx from "clsx";
import Image, { ImageProps, StaticImageData } from "next/image";
import { useState } from "react";
import CLSkeleton from "../cl-skeleton";

type Props = {
  className?: string;
  imageId?: string;
  alt?: string;
  src?: string | StaticImageData;
  ignoreSkeleton?: boolean;
} & Partial<ImageProps>;
const SimpleNextImage = ({
  className,
  imageId,
  alt,
  src,
  ignoreSkeleton,
  ...rest
}: Props) => {
  const [isLoaded, setIsLoaded] = useState(ignoreSkeleton);
  return (
    <Image
      className={clsx(
        "opacity-0 duration-[1.5s]",
        className ?? "h-auto w-full"
      )}
      src={
        imageId
          ? getFileLinkFromDirectus({
              id: imageId ?? "",
            })
          : src ?? ""
      }
      alt={alt ?? "image"}
      width={999}
      height={999}
      onLoadingComplete={(image) => {
        setIsLoaded(true);
        image.classList.remove("opacity-0");
      }}
      {...rest}
    />
  );
};

export default SimpleNextImage;
