import React from "react";
import { ProductSocialShare } from "@/types/directusType";
import NextImage from "@/components/ui/nextImage/NextImage";

type Props = {
  items: Pick<
    ProductSocialShare,
    "id" | "link" | "title" | "image" | "avatar"
  >[];
};
const SocialShares = ({ items }: Props) => {
  return (
    <div className="my-20 flex flex-col gap-8">
      {items.map((socialShare) => {
        return (
          <div key={socialShare.id} className="rounded-xl bg-secondary-50 p-3">
            <div className="">
              <div className="flex justify-center">
                <div className="relative -top-9 -mb-7 h-14 rounded-md bg-white p-2">
                  <NextImage
                    className="h-full w-auto rounded-xl"
                    imageId={socialShare.avatar}
                  />
                </div>
              </div>
              <NextImage
                className="rounded-xl rounded-b-none"
                imageId={socialShare.image}
              />
            </div>
            <div className="rounded-xl rounded-t-none border border-t-0 border-dashed border-secondary-500 p-2">
              {socialShare.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SocialShares;
