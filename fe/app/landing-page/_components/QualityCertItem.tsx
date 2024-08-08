"use client";
import React from "react";
import MotionDiv from "@/components/ui/motion/MotionDiv";
import clsx from "clsx";
import NextImage from "@/components/ui/nextImage/NextImage";

const QualityCertItem = ({
  certs,
  selectCert,
}: {
  certs: { id: number; image: string }[];
  selectCert: (certId: number) => void;
}) => {
  return certs.map((cert, index) => (
    <MotionDiv
      transition={{ duration: (index + 1) * 0.75 }}
      className={clsx(
        "flex shrink-0 grow-0 items-center gap-2",
        "cursor-pointer select-none rounded-xl",
        "relative",
        "ml-10 p-2",
        "bg-secondary-100"
      )}
      key={cert.id}
    >
      <div
        className="w-16"
        onClick={() => {
          selectCert(cert.id);
        }}
      >
        <NextImage src={cert.image} />
      </div>
    </MotionDiv>
  ));
};
export default QualityCertItem;
