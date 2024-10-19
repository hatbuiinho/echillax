import { Skeleton, SkeletonProps } from "@nextui-org/react";
import clsx from "clsx";
import React, { ReactNode } from "react";
type Props = SkeletonProps & { placeholderIcon?: ReactNode };
const CLSkeleton = ({
  children,
  placeholderIcon,
  isLoaded,
  className,
}: Props) => {
  return placeholderIcon ? (
    <div className={clsx("relative", className)}>
      <Skeleton className="rounded-lg" isLoaded={isLoaded}>
        {children}
      </Skeleton>
      {placeholderIcon && !isLoaded && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {placeholderIcon}
        </div>
      )}
    </div>
  ) : (
    <Skeleton className="rounded-lg" isLoaded={isLoaded}>
      {children}
    </Skeleton>
  );
};

export default CLSkeleton;
