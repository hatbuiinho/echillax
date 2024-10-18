"use client";

import { toEmbedLink } from "@/utils/convertor";
import { Skeleton } from "@nextui-org/react";
import clsx from "clsx";
import React, { useState } from "react";
import CLSkeleton from "../cl-skeleton";
import { TiktokIcon } from "@/components/icons";

type Props = {
  src?: string;
  platform: "youtube" | "tiktok";
  aspectRatio?: string;
  classNames?: {
    base?: string;
    iframe?: string;
    wrapper?: string;
  };
};

const EmbedVideo = ({
  src,
  platform,
  classNames,
  aspectRatio = "16 / 9",
  ...rest
}: Props) => {
  const validEmbeddedLink = toEmbedLink(src ?? "", platform);
  return (
    <div
      className={clsx("w-full flex-grow md:max-w-[450px]", classNames?.base)}
    >
      <div className={clsx("main-video h-full w-full", classNames?.wrapper)}>
        <iframe
          style={{ aspectRatio }}
          className={clsx("w-full rounded-xl", classNames?.iframe)}
          src={validEmbeddedLink}
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          {...rest}
        ></iframe>
      </div>
    </div>
  );
};

export default EmbedVideo;
