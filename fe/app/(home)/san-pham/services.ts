"use server";

import { asyncWithTryCatch } from "@/utils/http";
import { getFeatureProductSlugList, getProductArticleBySlug } from "./action";
import { toEmbedLink } from "@/utils/convertor";
import { NameAndSlug } from "@/types";

export const getBySlug = async (slug: string) => {
  const promise = getProductArticleBySlug(slug).then((data) => {
    if (data.length) {
      const product = data[0];
      product.main_video_link = toEmbedLink(
        product.main_video_link ?? "",
        "youtube"
      );

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
          slug: data.product_id?.slug,
          title: data?.product_id?.name,
        }) as NameAndSlug
    );
  };
  return asyncWithTryCatch(fetcher());
};
