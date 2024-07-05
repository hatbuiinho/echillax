import React from "react";
import GetAdviseForm from "./GetAdviseForm";
import Image from "next/image";
import { Spacer } from "@nextui-org/react";
import DOCTOR from "@/assets/image/get-advise/doctor.png";
import clsx from "clsx";
import { fontBoosterBlack } from "@/config/fonts/fonts";

const GetAdvise = () => {
  return (
    <div className="relative">
      <div className="flex justify-center">
        <div className="hidden w-[400px] items-end md:-m-10 md:flex md:h-[500px] md:w-[500px] lg:-m-20  lg:w-[700px]">
          <Image className="h-auto w-full" src={DOCTOR} alt="" />
        </div>
        <div className="get-advise-form flex min-h-96 flex-col">
          <div className="text-md mb-3 flex justify-center  lg:justify-start ">
            <fieldset className="w-[300px] rounded-xl border-1 border-primary-500 uppercase text-primary lg:w-[400px] lg:justify-start lg:text-xl">
              <legend
                className={clsx(
                  "ml-2 p-2 pb-0 font-bold leading-3 lg:ml-8 lg:leading-5",
                  fontBoosterBlack.className,
                )}
              >
                Nhận tư vấn từ BS dinh dưỡng
              </legend>
              <a
                href="tel:02465638688"
                className={clsx(
                  "block text-center text-2xl md:text-3xl",
                  fontBoosterBlack.className,
                )}
              >
                0246.563.8688
              </a>
            </fieldset>
          </div>
          <GetAdviseForm />
        </div>
      </div>
    </div>
  );
};

export default GetAdvise;
