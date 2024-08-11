"use server";
import { asyncWithTryCatch } from "@/utils/http";
import { _getBlogBySlug, _getBlogList, BlogCategoryDto } from "./action";

const getBlogBySlug = async (slug: string) => {
  const promise = _getBlogBySlug(slug).then((data) => {
    if (data.length) {
      return data[0];
    }
    return undefined;
  });

  return asyncWithTryCatch(promise);
};

const getBlogList = async () => {
  const promise = _getBlogList().then((data) => {
    const categories = data;
    return categories as BlogCategoryDto[];
  });

  return asyncWithTryCatch(promise);
};

export { getBlogBySlug, getBlogList };
