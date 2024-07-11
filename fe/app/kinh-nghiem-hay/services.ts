import { asyncWithTryCatch } from "@/utils/http";
import { BlogCategoryDto, getBlogBySlug, getBlogList } from "./action";

const getBySlug = async (slug: string) => {
  const promise = getBlogBySlug(slug).then((data) => {
    if (data.length) {
      const blog = data[0];
      return blog;
    }
    return undefined;
  });

  return asyncWithTryCatch(promise);
};

const getList = async () => {
  const promise = getBlogList().then((data) => {
    const categories = data;
    return categories as BlogCategoryDto[];
  });

  return asyncWithTryCatch(promise);
};

const ProductBlogService = { getBySlug, getList };
export default ProductBlogService;
