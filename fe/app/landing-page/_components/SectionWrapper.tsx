import React, { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};
const SectionWrapper = ({ children, className }: Props) => {
  return (
    <div className={clsx("bg-cover bg-no-repeat px-8", className)}>
      {children}
    </div>
  );
};
export default SectionWrapper;
