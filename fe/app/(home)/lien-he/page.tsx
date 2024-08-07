"use client";

import NextImage from "@/components/ui/nextImage/NextImage";
import immu from "@/assets/image/contact/immu.png";
import cartonAndEnvelope from "@/assets/image/contact/carton-envelope.png";
import clsx from "clsx";
import OutlinedLetter from "@/components/ui/outlinedLetter";
import useResponsive from "@/hooks/useResponsive";
import { theme } from "@/config/themeConfig";

const ContactUs = () => {
  const { sm, lg, xl } = useResponsive();

  return (
    <div className=" h-full">
      <div
        className={clsx(
          "relative mx-4 mt-32 max-w-6xl rounded-xl bg-primary p-3 md:mx-auto md:mt-64 md:max-w-3xl lg:mt-20 lg:p-5",
          "before:absolute before:bottom-0 before:right-40 before:w-0 before:translate-y-full before:content-['']",
          "md:before:right-64 lg:before:right-16",
          "before:border-l-[5rem] before:border-r-0 before:border-t-[3rem] before:border-b-transparent before:border-l-transparent before:border-t-primary"
        )}
      >
        <OutlinedLetter
          className={clsx(
            "mb-3 text-center text-medium uppercase tracking-widest text-primary md:text-[1.5rem] md:leading-[54px] lg:text-4xl lg:leading-[56px]"
          )}
          innerStrokeColor={"white"}
          innerStrokeWidth={2}
          outterStroke={
            sm
              ? `3px ${theme.color.secondary}`
              : lg || xl
                ? `8px ${theme.color.secondary}`
                : `6px ${theme.color.secondary}`
          }
        >
          Cảm ơn bạn đã ghé thăm Website của Chillax
        </OutlinedLetter>

        <p className="text-white lg:text-2xl">
          Chillax luôn sẵn sàng lắng nghe những ý kiến đóng góp cũng như sự quan
          tâm của bạn về dịch vụ và sản phẩm. Ý kiến của bạn với chúng tôi rất
          quan trọng và giúp chúng tôi phục vụ bạn ngày một tốt hơn.
        </p>
      </div>

      {/* Immu */}
      <div
        className={clsx(
          "absolute bottom-0 right-5 flex w-40 sm:bottom-5  lg:bottom-10 xl:right-40",
          "md:w-72 "
        )}
      >
        <div className="relative flex w-full">
          <div className="absolute bottom-0 left-0 w-1/2 -translate-x-full">
            <NextImage src={cartonAndEnvelope} />
          </div>
          <div className="w-full">
            <NextImage src={immu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
