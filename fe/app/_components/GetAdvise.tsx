import DOCTOR from "@/assets/image/get-advise/doctor.png";
import { fontBoosterBlack } from "@/config/fonts/fonts";
import clsx from "clsx";
import Image from "next/image";
import GetAdviseForm from "./GetAdviseForm";

const GetAdvise = () => {
  return (
    <div className="relative">
      <div className="grid items-end justify-center md:grid-cols-2">
        <div
          className={clsx(
            "relative left-10 hidden h-full  items-end justify-end md:flex",
            "h-[400px] md:h-[500px] lg:h-[600px]",
          )}
        >
          <Image className="h-full w-auto" src={DOCTOR} alt="" />
        </div>
        <div className="get-advise-form mb-20 flex min-h-96 flex-col">
          <div className="text-md mb-3 flex  lg:justify-start ">
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
          <div className="w-[300px] lg:w-[400px]">
            <GetAdviseForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAdvise;
