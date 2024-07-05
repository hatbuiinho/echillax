"use server";
import { directusClient } from "@/lib/directus";
import { Product, ProductArticle, Testimonials } from "@/types/directusType";
import { readItems } from "@directus/sdk";

export type ProductArticleDto = Partial<ProductArticle> & {
  testimonials: Pick<Testimonials, "avatar" | "name" | "message">[];
  product_id: { name: string };
};

export const getProductArticleBySlug = async (slug: string) => {
  return directusClient.request(
    readItems("product_article", {
      fields: [
        "*", //TODO: select neccessary field instead
        { product_id: ["name"], testimonials: ["avatar", "name", "message"] },
      ],
      filter: {
        slug: {
          _eq: slug,
        },
      },
    }),
  );
};

export const getFeatureProductSlugList = () => {
  return directusClient.request(
    readItems("product_article", {
      fields: ["slug", { product_id: ["name"] }],
      filter: {
        product_id: {
          is_feature: {
            _eq: true,
          },
        },
      },
    }),
  );
};
