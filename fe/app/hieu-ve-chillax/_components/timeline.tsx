"use client";

import history_2015 from "@/assets/image/history/2015.jpg";
import history_2019 from "@/assets/image/history/2019.jpg";
import history_2022 from "@/assets/image/history/2022.jpg";
import { cn } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";

interface TimelineEvent {
  title?: string;
  year?: string;
  description?: string;
  image?: StaticImageData;
}

const Timeline = () => {
  const events: TimelineEvent[] = [
    {
      title: "Bước đầu thành lập",
      year: "2015",
      description: "#9C27B0",
      image: history_2015,
    },
    {
      title: "Cho ra mắt sản phẩm lớn",
      year: "2019",
      description: "#673AB7",
      image: history_2019,
    },
    {
      title: "Nỗ lực hoàn thiện hình ảnh",
      year: "2022",
      description: "#FF9800",
      image: history_2022,
    },
  ];

  const bigNode = () => {
    return (
      <span className="h-[3rem] w-[3rem] rounded-[50%] border-[0.75rem] border-primary-500 bg-white"></span>
    );
  };

  const customizedContent = (item: TimelineEvent) => {
    return (
      <div title={item.title} className="mx-2 mb-10 rounded-xl bg-white">
        <div className="rounded-t-xl bg-primary-400 p-2 text-xl font-bold text-white">
          {item.title}
        </div>
        {item.image && (
          <Image src={history_2015} alt={item.year ?? "Lịch sử"} />
        )}
        <p className="p-2">{item.description}</p>
      </div>
    );
  };

  return (
    <div className="card">
      {events.map((event, index) => {
        const isNotLastItem = index != events.length - 1;
        return (
          <div key={event.title} className="flex flex-col justify-center">
            <div className="flex justify-center">
              <div
                className={cn("w-[5rem] px-2", {
                  "order-1": index % 2,
                  "order-3": index % 2 === 0,
                  "flex justify-end": index % 2,
                })}
              >
                <div>{event.year}</div>
              </div>
              <div className="order-2 flex flex-initial flex-col items-center">
                {/* Big node */}
                <span className="h-[3rem] w-[3rem] rounded-[50%] border-[0.75rem] border-primary-500 bg-white"></span>
                {/* short line */}
                <div className="h-[1rem] w-[2px] flex-grow bg-primary-100"></div>
              </div>

              <div
                className={cn("w-[5rem]", {
                  "order-1": index % 2 === 0,
                  "order-3": index % 2,
                })}
              ></div>
            </div>

            {isNotLastItem && (
              <div className="flex justify-center">
                <div
                  className={cn("w-[20rem]", {
                    "order-1": index % 2,
                    "order-3": index % 2 === 0,
                  })}
                >
                  {customizedContent(event)}
                </div>
                <div className="order-2 flex min-h-[10rem] flex-initial flex-col items-center">
                  {/* small node */}
                  <div className="h-[1rem] w-[1rem] rounded-[50%] bg-primary-500"></div>
                  {isNotLastItem && (
                    // long line
                    <div className="w-[2px] flex-grow bg-primary-100"></div>
                  )}
                </div>
                <div
                  className={cn("w-[20rem]", {
                    "order-1": index % 2 === 0,
                    "order-3": index % 2,
                  })}
                ></div>
              </div>
            )}

            {!isNotLastItem && (
              <div className="flex flex-col items-center">
                <div className="order-2 flex min-h-[2rem] flex-initial flex-col items-center">
                  {/* small node */}
                  <div className="h-[1rem] w-[1rem] rounded-[50%] bg-primary-500"></div>
                  {isNotLastItem && (
                    // long line
                    <div className="w-[2px] flex-grow bg-primary-100"></div>
                  )}
                </div>
                <div
                  className={cn("w-[20rem]", {
                    "order-1": index % 2,
                    "order-3": index % 2 === 0,
                  })}
                >
                  {customizedContent(event)}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
