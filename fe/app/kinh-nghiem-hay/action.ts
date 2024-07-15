"use server";
import { StatusEnum } from "@/enums/status";
import { directusClient } from "@/lib/directus";
import { SolutionBlog, SolutionCategory } from "@/types/directusType";
import { readItems } from "@directus/sdk";

export type SolutionBlogDto = Pick<
  SolutionBlog,
  "slug" | "image" | "title" | "introduce" | "content" | "id"
> & {
  category_id?: Pick<SolutionCategory, "name" | "id" | "slug">;
};

export type BlogCategoryDto = Pick<SolutionCategory, "id" | "name" | "slug"> & {
  blogs: Pick<SolutionBlog, "id" | "slug" | "thumbnail">[] | null;
};

export const getBlogBySlug = async (slug: string) => {
  return directusClient.request(
    readItems("solution_blog", {
      fields: [
        "slug",
        "image",
        "title",
        "introduce",
        "content",
        "id",
        { category_id: ["name", "id", "slug"] },
      ],
      filter: {
        slug: {
          _eq: slug,
        },
        status: {
          _eq: StatusEnum.published.toString(),
        },
      },
    }),
  );
};

export const getBlogList = async () => {
  return directusClient.request(
    readItems("solution_category", {
      fields: [
        "id",
        "name",
        "slug",
        "status",
        { blogs: ["thumbnail", "slug", "id"] },
      ],
      filter: {
        status: {
          _eq: StatusEnum.published.toString(),
        },
        blogs: {
          status: {
            _eq: StatusEnum.published.toString(),
          },
        },
      },
    }),
  );
};
