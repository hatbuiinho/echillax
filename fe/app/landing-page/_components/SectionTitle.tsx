import React, { ReactNode } from "react";
import MotionDiv from "@/components/ui/motion/MotionDiv";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};
const SectionTitle = ({ children, className }: Props) => {
  return (
    <MotionDiv
      className={clsx(
        "p-2 text-center text-xl font-bold uppercase text-primary",
        className
      )}
    >
      {children}
    </MotionDiv>
  );
};
export default SectionTitle;
