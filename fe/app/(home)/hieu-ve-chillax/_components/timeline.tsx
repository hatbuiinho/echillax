"use client";

import history_2015 from "@/assets/image/history/2015.jpg";
import history_2019 from "@/assets/image/history/2019.jpg";
import history_2022 from "@/assets/image/history/2022.jpg";

import aboutChillaxHeader from "@/assets/image/about-chillax/about-chillax-header.png";

import OutlinedLetter from "@/components/ui/outlinedLetter";
import { theme } from "@/config/themeConfig";
import useResponsive from "@/hooks/useResponsive";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import NextImage from "@/components/ui/nextImage/NextImage";
import MotionDiv from "@/components/ui/motion/MotionDiv";

interface TimelineEvent {
  title?: string;
  year?: string;
  description?: string;
  image?: StaticImageData;
}

const Timeline = () => {
  const { sm } = useResponsive();

  const events: TimelineEvent[] = [
    {
      title: "Bước đầu thành lập",
      year: "2015",
      description:
        "Bước đầu thành lập, với sứ mệnh mang những “tinh hoa dinh dưỡng” để nâng cao tầm vóc các thế hệ Việt Nam, Chillax ra mắt 3 dòng sản phẩm chính cho 3 nhóm đối tượng sử dụng: trẻ em, phụ nữ mang thai, người lớn.",
      image: history_2015,
    },
    {
      title: "Cho ra mắt sản phẩm lớn",
      year: "2019",
      description:
        "Đặt sức khỏe người dùng lên hàng đầu, cộng hưởng với chiến lược nòng cốt làm ra sản phẩm đáp ứng nhu cầu dinh dưỡng chuyên biệt cho trẻ em, đóng góp vào sự phát triển toàn diện về thể chất và trí tuệ Chillax cho ra đời dòng Inforlax . Đây được xem như bước đột phá trên hành trình nâng chuẩn dinh dưỡng cho trẻ em Việt của “gia đình Chillax”",
      image: history_2019,
    },
    {
      title: "Nỗ lực hoàn thiện hình ảnh",
      year: "2022",
      description:
        "Chillax đã tập trung nghiên cứu để cải tiến chất lượng dinh dưỡng cùng với hoàn thiện hơn về hình ảnh mang đến sản phẩm với tính năng vượt trội, giúp Chillax trở thành “người bạn đồng hành” của mọi nhà.",
      image: history_2022,
    },
  ];

  const customizedContent = (item: TimelineEvent) => {
    return (
      <div title={item.title} className="mx-2 mb-10 rounded-xl bg-white">
        <div className="rounded-t-xl bg-primary p-2 text-xl font-bold text-white">
          <OutlinedLetter
            innerStrokeColor="white"
            innerStrokeWidth={0}
            outterStroke={sm ? "3px white" : "4px white"}
            className={clsx(
              "text-center text-medium font-extrabold uppercase text-primary md:tracking-wider lg:text-xl"
            )}
          >
            {item.title}
          </OutlinedLetter>
        </div>
        {item.image && (
          <NextImage src={item.image} alt={item.year ?? "Lịch sử"} />
        )}
        <p className="p-2 text-justify text-primary">{item.description}</p>
      </div>
    );
  };

  return (
    <div className="card ">
      <div className="w-full">
        <Image
          className="h-auto w-full"
          src={aboutChillaxHeader}
          alt="about-chillax-header"
          width={999}
          height={999}
        />
      </div>

      {/* History */}
      <div className="mt-3 sm:mt-0">
        {events.map((event, index) => {
          const isLastItem = index === events.length - 1;
          return (
            <MotionDiv
              key={event.title}
              className="flex flex-col justify-center"
            >
              <div className="flex justify-center">
                <div
                  className={clsx("w-[7rem] px-2", {
                    "order-3": index % 2,
                    "order-1": index % 2 === 0,
                    "flex justify-end": index % 2,
                  })}
                >
                  <OutlinedLetter
                    className={clsx(
                      "pt-2 text-3xl uppercase  tracking-widest text-primary md:pt-1 lg:text-4xl"
                    )}
                    innerStrokeColor={"white"}
                    innerStrokeWidth={1}
                    outterStroke={
                      sm
                        ? `3px ${theme.color.secondary}`
                        : `5px ${theme.color.secondary}`
                    }
                  >
                    {event.year}
                  </OutlinedLetter>
                </div>
                <div className="order-2 flex flex-initial flex-col items-center">
                  {/* Big node */}
                  <span className="h-[3rem] w-[3rem] rounded-[50%] border-[0.75rem] border-primary bg-white"></span>
                  {/* short line */}
                  <div className="h-[1rem] w-[2px] flex-grow bg-primary"></div>
                </div>

                <div
                  className={clsx("w-[7rem]", {
                    "order-3": index % 2 === 0,
                    "order-1": index % 2,
                  })}
                ></div>
              </div>

              {!isLastItem && (
                <div className="flex justify-center">
                  <div
                    className={clsx("w-[20rem]", {
                      "order-3": index % 2,
                      "order-1": index % 2 === 0,
                    })}
                  >
                    {customizedContent(event)}
                  </div>
                  <div className="order-2 flex min-h-[10rem] flex-initial flex-col items-center">
                    {/* small node */}
                    <div className="h-[1rem] w-[1rem] rounded-[50%] bg-primary"></div>
                    {!isLastItem && (
                      // long line
                      <div className="w-[2px] flex-grow bg-primary"></div>
                    )}
                  </div>
                  <div
                    className={clsx("w-[20rem]", {
                      "order-3": index % 2 === 0,
                      "order-1": index % 2,
                    })}
                  ></div>
                </div>
              )}

              {isLastItem && (
                <div className="flex flex-col items-center">
                  <div className="flex min-h-[2rem] flex-initial flex-col items-center">
                    {/* small node */}
                    <div className="h-[1rem] w-[1rem] rounded-[50%] bg-primary"></div>
                    {/* short line */}
                    <div className="h-[1rem] w-[2px] flex-grow bg-primary"></div>
                  </div>
                  <div className={clsx("w-[20rem]")}>
                    {customizedContent(event)}
                  </div>
                </div>
              )}
            </MotionDiv>
          );
        })}
      </div>

      {/* <div className="w-full">
        <Image
          className="h-auto w-full"
          src={aboutChillaxMiddle}
          alt="about-chillax-header"
          width={999}
          height={999}
        />
      </div> */}

      {/* Policy */}
      {/* Commitment */}
      {/* <div className="w-full">
        <Image
          className="h-auto w-full"
          src={aboutChillaxFooter}
          alt="about-chillax-header"
          width={999}
          height={999}
        />
      </div> */}
    </div>
  );
};

export default Timeline;
