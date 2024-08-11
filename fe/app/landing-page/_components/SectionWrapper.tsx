import React, { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};
const SectionWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(className, "bg-no-repeat", {
        "bg-cover": !className?.includes("bg-contain"),
        "px-8": !className?.includes("px"),
      })}
    >
      {children}
    </div>
  );
};
export default SectionWrapper;
