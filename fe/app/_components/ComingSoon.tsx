import React from "react";
import NextImage from "@/components/ui/nextImage/NextImage";
import comingSoon from "@/assets/image/coming-soon/cs.png";

const ComingSoon = () => {
  return (
    <div className="-mb-10 flex h-full grow items-center justify-center bg-secondary-50">
      <div className="h-1/2 w-1/2 ">
        <NextImage src={comingSoon} />
      </div>
    </div>
  );
};
export default ComingSoon;
