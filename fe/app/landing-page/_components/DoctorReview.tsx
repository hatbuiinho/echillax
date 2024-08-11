import React from "react";
import NextImage from "@/components/ui/nextImage/NextImage";
import clsx from "clsx";
import MotionDiv from "@/components/ui/motion/MotionDiv";

type Props = {
  doctorName: string;
  doctorImage: string;
  doctorReview: string;
};
const DoctorReview = ({ doctorReview, doctorName, doctorImage }: Props) => {
  return (
    <div>
      <div className="w-full bg-[url(/images/bg/bg-doctor-review-1.png)] bg-cover bg-no-repeat px-8 pt-5">
        <MotionDiv
          className={clsx(
            "mb-3 border-b-8 border-l-5 border-b-secondary-500 border-l-secondary-500"
          )}
        >
          <NextImage imageId={doctorImage} />
        </MotionDiv>
      </div>

      <div className="bg-[url(/images/bg/bg-doctor-review-2.png)] bg-cover bg-no-repeat px-8 pb-10 pt-12 text-justify">
        <MotionDiv>
          <span className="font-bold text-primary">{`Theo bác sĩ ${doctorName}: `}</span>
          <span>{doctorReview}</span>
        </MotionDiv>
      </div>
    </div>
  );
};
export default DoctorReview;
