import React from "react";
import Logo from "./logo";
import clsx from "clsx";
import Link from "next/link";

const Brand = () => {
  return (
    <Link
      className={clsx(
        "relative flex h-[5rem] flex-shrink-0 items-center rounded-b-lg bg-amber-200 px-2",
        "before::content-[''] before:absolute  before:-z-10 before:h-full before:w-full before:-translate-x-2 before:translate-y-[5px] before:scale-[98%] before:rounded-b-xl before:bg-primary before:px-2",
      )}
      href={"/"}
    >
      <div className="flex-shrink-0 flex-grow-0">
        <Logo />
      </div>
    </Link>
  );
};

export default Brand;
