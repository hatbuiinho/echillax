"use client";
import { EmailIcon } from "@/components/icons";
import OutlinedLetter from "@/components/ui/outlinedLetter";
import { fontBoosterBlack } from "@/config/fonts/fonts";
import { theme } from "@/config/themeConfig";
import useResponsive from "@/hooks/useResponsive";
import clsx from "clsx";
import { useEffect, useState } from "react";
import NutritionalSolution from "./NutritionalSolution";
import { BlogCategoryDto } from "@/app/(home)/kinh-nghiem-hay/action";
import { getBlogList } from "@/app/(home)/kinh-nghiem-hay/services";

const NutritionalSolutions = () => {
  const { sm } = useResponsive();
  const [blogCategories, setBlogCategories] = useState<BlogCategoryDto[]>();

  useEffect(() => {
    getBlogList().then((data) => {
      setBlogCategories(data);
    });
  }, []);

  return blogCategories ? (
    <div>
      <div className="mb-5 flex items-center gap-2 pl-2 lg:mb-10">
        <EmailIcon className="text-primary" size={sm ? 25 : 45} />
        <OutlinedLetter
          className={clsx(
            fontBoosterBlack.className,
            "pt-2 text-lg uppercase  tracking-widest text-primary md:text-4xl"
          )}
          innerStrokeColor={"white"}
          innerStrokeWidth={1}
          outterStroke={
            sm ? `5px ${theme.color.secondary}` : `9px ${theme.color.secondary}`
          }
        >
          Giải Pháp Dinh Dưỡng
        </OutlinedLetter>
      </div>
      <div className="flex flex-col gap-5 lg:gap-10">
        {blogCategories.map((category) => {
          return (
            <NutritionalSolution
              key={category.id}
              title={category.name ?? ""}
              solutions={category.blogs ?? []}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default NutritionalSolutions;
