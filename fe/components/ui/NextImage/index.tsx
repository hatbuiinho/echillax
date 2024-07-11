"use client";
import { getFileLinkFromDirectus } from "@/utils/directus";
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
      className={className ?? "h-auto w-full"}
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
    />
  );
};

export default NextImage;
