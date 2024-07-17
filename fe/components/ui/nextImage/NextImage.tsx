"use client";
import { getFileLinkFromDirectus } from "@/utils/directus";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
type Props = {
  className?: string;
  imageId?: string;
  alt?: string;
  src?: string | StaticImageData;
};
const NextImage = ({ className, imageId, alt, src }: Props) => {
  return (
    <Image
      className={clsx(
        "opacity-0 duration-[1.5s]",
        className ?? "h-auto w-full",
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
        image.classList.remove("opacity-0");
      }}
    />
  );
};

export default NextImage;
