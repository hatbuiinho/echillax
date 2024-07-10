"use client";
import NextImage from "@/components/ui/nextImage";
import { fontNunito } from "@/config/fonts/fonts";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { SolutionBlogDto } from "./action";
import ProductBlogService from "./services";
import "./style.scss";

const Blog = () => {
  const searchParams = useSearchParams();
  const [solutionBlog, setSolutionBlog] = useState<SolutionBlogDto>();

  useEffect(() => {
    const blogSlug = searchParams.get("blog");
    if (blogSlug) {
      ProductBlogService.getBySlug(blogSlug).then((data) => {
        return setSolutionBlog(data);
      });
    }
  }, [searchParams]);

  return solutionBlog ? (
    <div className="blog px-3 md:px-7">
      {/* title */}
      <div className="my-12 grid items-center md:grid-cols-2">
        <div className="">
          <NextImage imageId={solutionBlog?.image} />
        </div>
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

const BlogExport = () => {
  return (
    <Suspense>
      <Blog />
    </Suspense>
  );
};

export default BlogExport;
