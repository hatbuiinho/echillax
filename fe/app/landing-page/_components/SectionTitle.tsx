import React, { ReactNode } from "react";
import MotionDiv from "@/components/ui/motion/MotionDiv";

type Props = {
  children: ReactNode;
};
const SectionTitle = ({ children }: Props) => {
  return (
    <MotionDiv className="p-2 text-center text-xl font-bold uppercase text-primary">
      {children}
    </MotionDiv>
  );
};
export default SectionTitle;
