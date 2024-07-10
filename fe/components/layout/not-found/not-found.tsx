"use client";
import OutlinedLetter from "@/components/ui/outlinedLetter";
import clsx from "clsx";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex h-96 justify-center text-center">
      <div className="text-4xl ">
        <OutlinedLetter
          innerStrokeColor="white"
          innerStrokeWidth={0}
          outterStroke={"5px white"}
          className={clsx(
            "pb-2 text-center text-lg font-extrabold uppercase text-primary md:tracking-wider lg:pb-5 lg:text-4xl",
          )}
        >
          {"Rất tiếc, trang này không tồn tại"}
        </OutlinedLetter>
      </div>
    </div>
  );
};

export default NotFound;
