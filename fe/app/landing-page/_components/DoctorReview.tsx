import React from "react";
import NextImage from "@/components/ui/nextImage/NextImage";
import clsx from "clsx";
import MotionDiv from "@/components/ui/motion/MotionDiv";

type Props = {
  doctorImage: string;
  doctorReview: string;
  doctorReviewLink?: string;
};
const DoctorReview = ({
  doctorReview,
  doctorImage,
  doctorReviewLink,
}: Props) => {
  return (
    <div>
      {doctorReviewLink ? (
        <div className="bg-[url(/images/bg/bg-doctor-review-2.png)] bg-cover bg-no-repeat px-8 pb-10 pt-3 text-justify">
          <div className="w-full rounded-b-2xl bg-white md:max-w-[450px]">
            <MotionDiv className="main-video h-full w-full">
              <iframe
                style={{ aspectRatio: "16 / 9" }}
                className="w-full"
                src={doctorReviewLink ?? ""}
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </MotionDiv>

            <MotionDiv
              className="p-3"
              dangerouslySetInnerHTML={{ __html: doctorReview }}
            ></MotionDiv>
          </div>
        </div>
      ) : (
        <div>
          <div className="w-full bg-[url(/images/bg/bg-doctor-review-1.png)] bg-cover bg-no-repeat px-8 pt-3">
            <MotionDiv
              className={clsx(
                "mb-3 border-b-8 border-l-5 border-b-secondary-500 border-l-secondary-500"
              )}
            >
              <NextImage imageId={doctorImage} />
            </MotionDiv>
          </div>
          <MotionDiv
            className="p-3 px-8 text-justify"
            dangerouslySetInnerHTML={{ __html: doctorReview }}
          ></MotionDiv>
        </div>
      )}
    </div>
  );
};
export default DoctorReview;
