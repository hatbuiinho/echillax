import { EmailIcon } from "@/components/icons";
import OutlinedLetter from "@/components/ui/outlinedLetter";
import { fontBoosterBlack } from "@/config/fonts/fonts";
import { nutionalSolutionConfig } from "@/config/nutritionalSolutionConfig";
import clsx from "clsx";
import React, { useLayoutEffect, useState } from "react";
import NutritionalSolution from "./NutritionalSolution";
import { theme } from "@/config/themeConfig";

const NutritionalSolutions = () => {
  const [isMobile, setIsMobile] = useState(true);

  useLayoutEffect(() => {
    function changeMediaQuery() {
      if (window.matchMedia("only screen and (min-width: 480px)").matches) {
        setIsMobile(true);
      }
      if (window.matchMedia("only screen and (min-width: 992px)").matches) {
        setIsMobile(false);
      }

      console.log("update size", window.innerWidth);
    }
    window.addEventListener("resize", changeMediaQuery);
    changeMediaQuery();
    return () => window.removeEventListener("resize", changeMediaQuery);
  }, []);

  return (
    <div>
      <div className="mb-5 flex items-center gap-2 pl-2 lg:mb-10">
        <EmailIcon className="text-primary" size={isMobile ? 25 : 45} />
        <OutlinedLetter
          className={clsx(
            fontBoosterBlack.className,
            "pt-2 text-lg uppercase  tracking-widest text-primary lg:text-4xl",
          )}
          innerStrokeColor={"white"}
          innerStrokeWidth={1}
          outterStroke={
            isMobile
              ? `5px ${theme.color.secondary}`
              : `9px ${theme.color.secondary}`
          }
        >
          Giải Pháp Dinh Dưỡng
        </OutlinedLetter>
      </div>
      <div className="flex flex-col gap-5 lg:gap-10">
        {nutionalSolutionConfig.map((nutionalSolutions) => (
          <NutritionalSolution
            title={nutionalSolutions.title}
            solutions={nutionalSolutions.solutions}
          />
        ))}
      </div>
    </div>
  );
};

export default NutritionalSolutions;
