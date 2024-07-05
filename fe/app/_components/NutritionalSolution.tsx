import { EmblaCarousel } from "@/components/ui/carousel/EmblaCarousel";
import OutlinedLetter from "@/components/ui/outlinedLetter";
import { fontBoosterBlack } from "@/config/fonts/fonts";
import { SolutionCard } from "@/config/nutritionalSolutionConfig";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";

type Props = {
  title: string;
  solutions: SolutionCard[];
};

const NutritionalSolution = ({ title, solutions }: Props) => {
  const [numberOfItemInSlide, setNumberOfItemInSlide] = useState(1);
  const [isMobile, setIsMobile] = useState(true);

  useLayoutEffect(() => {
    function updateSize() {
      if (window.matchMedia("only screen and (min-width: 480px)").matches) {
        setNumberOfItemInSlide(1);
        setIsMobile(true);
      }
      if (window.matchMedia("only screen and (min-width: 992px)").matches) {
        setNumberOfItemInSlide(2);
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div>
      <OutlinedLetter
        innerStrokeColor="white"
        innerStrokeWidth={0}
        outterStroke={isMobile ? "4px white" : "6px white"}
        className={clsx(
          "pb-2 text-center text-lg font-extrabold uppercase text-primary md:tracking-wider lg:pb-5 lg:text-4xl",
          fontBoosterBlack.className,
        )}
      >
        {title}
      </OutlinedLetter>

      <EmblaCarousel
        hasArrows
        slides={solutions}
        numberOfItemInSlide={numberOfItemInSlide}
        itemRender={(slides) => {
          return (
            <div className="flex shrink-0 grow-0 basis-full flex-col sm:basis-1/2 lg:basis-1/3">
              {slides.map((solution: SolutionCard, index) => {
                return (
                  <div key={index}>
                    <div className="cursor-pointer p-2">
                      <Image
                        className="rounded-lg"
                        src={solution.image ?? ""}
                        alt={"Giải pháp"}
                      ></Image>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }}
        // containerClass="grid"
      />
    </div>
  );
};

export default NutritionalSolution;
