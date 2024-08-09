"use server";

import { asyncWithTryCatch } from "@/utils/http";
import { getFeatureProductSlugList, getProductArticleBySlug } from "./action";
import { toEmbedYoutubeLink } from "@/utils/convertor";

export type ProductNameAndSlug = {
  productName: string;
  slug: string;
};

export const getBySlug = async (slug: string) => {
  const promise = getProductArticleBySlug(slug).then((data) => {
    if (data.length) {
      const product = data[0];
      product.main_video_link = toEmbedYoutubeLink(product.main_video_link);

      const tests = product.testimonials?.map((test) => ({
        ...test,
        image: test.avatar,
      }));
      return { ...product, testimonials: tests };
    }
    return undefined;
  });

  return asyncWithTryCatch(promise);
};

export const getFeatureList = async () => {
  const fetcher = async () => {
    const res = await getFeatureProductSlugList();
    return res.map(
      (data) =>
        ({
          slug: data.slug,
          productName: data?.name,
        }) as ProductNameAndSlug
    );
  };
  return asyncWithTryCatch(fetcher());
};
