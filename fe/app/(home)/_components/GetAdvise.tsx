import DOCTOR from "@/assets/image/get-advise/doctor.png";
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
            "h-[400px] md:h-[500px] lg:h-[600px]"
          )}
        >
          <Image className="h-full w-auto" src={DOCTOR} alt="" />
        </div>
        <div className="get-advise-form mb-20 flex min-h-96 flex-col">
          <div className="text-md mb-3 flex justify-center md:justify-start ">
            <fieldset
              className={clsx(
                "w-[300px] sm:w-[350px] md:w-[400px] md:justify-start",
                "rounded-xl border-1 border-primary-500",
                "text-sm md:text-xl",
                "uppercase text-primary"
              )}
            >
              <legend
                className={clsx(
                  "ml-8 p-2 pb-0 font-bold leading-3 md:ml-8  lg:leading-5"
                )}
              >
                Nhận tư vấn từ BS dinh dưỡng
              </legend>
              <a
                href="tel:02465638688"
                className={clsx("block text-center text-2xl md:text-3xl")}
              >
                0246.563.8688
              </a>
            </fieldset>
          </div>
          <div className="w-[300px] sm:w-[350px] md:w-[400px]">
            <GetAdviseForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAdvise;
