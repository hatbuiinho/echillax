"use client";
import NextImage from "@/components/ui/nextImage/NextImage";
import { fontNunito } from "@/config/fonts/fonts";
import clsx from "clsx";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SolutionBlogDto } from "../action";
import "../style.scss";
import { getBlogBySlug } from "@/app/(home)/kinh-nghiem-hay/services";
import MotionDiv from "@/components/ui/motion/MotionDiv";

const Blog = () => {
  const { slug } = useParams();
  const [solutionBlog, setSolutionBlog] = useState<SolutionBlogDto>();

  useEffect(() => {
    if (slug) {
      getBlogBySlug(slug as string).then((data) => {
        return setSolutionBlog(data);
      });
    }
  }, [slug]);

  return solutionBlog ? (
    <div className="blog px-3 md:px-7">
      {/* title */}
      <div className="my-12 grid items-center md:grid-cols-2">
        <MotionDiv className="">
          <NextImage imageId={solutionBlog?.image as string} />
        </MotionDiv>
        <div className="px-5 py-2 md:px-7 lg:px-10">
          <h2 className="mb-2 text-2xl text-primary">{solutionBlog.title}</h2>
          <p className="text-justify">{solutionBlog.introduce}</p>
        </div>
      </div>

      <div
        className={clsx(fontNunito.className, "mx-auto max-w-[900px]")}
        dangerouslySetInnerHTML={{ __html: solutionBlog.content ?? "" }}
      ></div>
    </div>
  ) : (
    <></>
  );
};

export default Blog;
