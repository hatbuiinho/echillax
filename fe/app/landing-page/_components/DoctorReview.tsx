import React from "react";
import NextImage from "@/components/ui/nextImage/NextImage";

type Props = {
  doctorName: string;
  doctorImage: string;
  doctorReview: string;
};
const DoctorReview = ({ doctorReview, doctorName, doctorImage }: Props) => {
  return (
    <div>
      <div className="mb-3 border-b-8 border-l-5 border-b-secondary-500 border-l-secondary-500">
        <NextImage imageId={doctorImage} />
      </div>
      <div>
        <span className="font-bold text-primary">{`Theo bác sĩ ${doctorName}: `}</span>
        <span>{doctorReview}</span>
      </div>
    </div>
  );
};
export default DoctorReview;
