"use client";
import NextImage from "@/components/ui/NextImage";
import { fontNunito } from "@/config/fonts/fonts";
import { useParams } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { SolutionBlogDto } from "../action";
import ProductBlogService from "../services";
import "../style.scss";
import clsx from "clsx";

const Blog = () => {
  const { slug } = useParams();
  const [solutionBlog, setSolutionBlog] = useState<SolutionBlogDto>();

  useEffect(() => {
    console.log(slug);
    if (slug.length == 2) {
      const blogSlug = slug[1];
      ProductBlogService.getBySlug(blogSlug).then((data) => {
        return setSolutionBlog(data);
      });
    }
  }, [slug]);

  useLayoutEffect(() => {
    const tables = document.querySelectorAll("table");
    tables.forEach((table) => {
      table.classList.add("table-fixed");
    });
  }, []);
  return (
    solutionBlog && (
      <div className="blog px-3">
        {/* title */}
        <div className="my-12 grid items-center md:grid-cols-2">
          <div className="">
            <NextImage imageId={solutionBlog?.image} />
          </div>
          <div className="py-2">
            <h2 className="text-center text-2xl text-primary">
              {solutionBlog.title}
            </h2>
          </div>
        </div>

        <div
          className={clsx(fontNunito.className, "mx-auto max-w-[900px]")}
          dangerouslySetInnerHTML={{ __html: solutionBlog.content ?? "" }}
        ></div>

        <div className="hidden table-fixed"></div>
      </div>
    )
  );
};

export default Blog;
