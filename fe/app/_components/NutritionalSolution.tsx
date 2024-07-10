import NextImage from "@/components/ui/NextImage";
import { EmblaCarousel } from "@/components/ui/carousel/EmblaCarousel";
import OutlinedLetter from "@/components/ui/outlinedLetter";
import { fontBoosterBlack } from "@/config/fonts/fonts";
import { SolutionCard } from "@/config/nutritionalSolutionConfig";
import useResponsive from "@/hooks/useResponsive";
import { SolutionBlog } from "@/types/directusType";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  solutions: SolutionCard[];
  category: string;
};

const NutritionalSolution = ({ title, solutions, category }: Props) => {
  const [numberOfItemInSlide, setNumberOfItemInSlide] = useState(1);
  const { sm } = useResponsive();
  const router = useRouter();

  useEffect(() => {
    if (sm) {
      setNumberOfItemInSlide(1);
    } else {
      setNumberOfItemInSlide(2);
    }
  }, [sm]);

  return (
    <div>
      <OutlinedLetter
        innerStrokeColor="white"
        innerStrokeWidth={0}
        outterStroke={sm ? "4px white" : "6px white"}
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
              {slides.map(
                (
                  solution: Pick<SolutionBlog, "id" | "image" | "slug">,
                  index,
                ) => {
                  return (
                    <div key={index}>
                      <div
                        className="cursor-pointer p-2"
                        onClick={() => {
                          router.push(
                            `/kinh-nghiem-hay?category=${category}&blog=${solution.slug}`,
                          );
                        }}
                      >
                        <NextImage
                          className="rounded-lg"
                          imageId={solution.image?.toString()}
                          alt={"Giải pháp"}
                        ></NextImage>
                      </div>
                    </div>
                  );
                },
              )}
            </div>
          );
        }}
        // containerClass="grid"
      />
    </div>
  );
};

export default NutritionalSolution;
