import React from "react";
import { ProductSocialShare } from "@/types/directusType";
import NextImage from "@/components/ui/nextImage/NextImage";
import MotionDiv from "@/components/ui/motion/MotionDiv";
import { GoldArrowRight } from "@/components/icons";
import SimpleNextImage from "@/components/ui/nextImage/SimpleNextImage";

type Props = {
  items: Pick<
    ProductSocialShare,
    "id" | "link" | "title" | "image" | "avatar"
  >[];
};
const SocialShares = ({ items }: Props) => {
  return (
    <div className="flex flex-col gap-8">
      {items.map((socialShare) => {
        return (
          <MotionDiv
            key={socialShare.id}
            className="rounded-xl bg-secondary-50 p-3"
          >
            <div>
              <div className="flex justify-center">
                <div className="relative -top-9 -mb-7 h-14 rounded-md bg-white p-2">
                  <SimpleNextImage
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
            <div className="rounded-xl rounded-t-none border border-t-0 border-dashed border-secondary-500 p-2 text-sm">
              <div className="mb-3  font-bold text-primary">
                {socialShare.title}
              </div>
              <div className="flex justify-end">
                <a
                  className="flex items-center gap-2"
                  href={socialShare.link}
                  target="_blank"
                >
                  <div>Xem thêm </div>{" "}
                  <div className="shrink-0">
                    <GoldArrowRight className="w-3" />
                  </div>
                </a>
              </div>
            </div>
          </MotionDiv>
        );
      })}
    </div>
  );
};
export default SocialShares;
