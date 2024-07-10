import { getFileLinkFromDirectus } from "@/utils/directus";
import Image from "next/image";
type Props = {
  className?: string;
  imageId?: string;
  alt?: string;
  src?: string;
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
