"use server";
import { directusClient } from "@/lib/directus";
import {
  Product,
  ProductArticle,
  ProductQna,
  ProductUses,
  Testimonials,
} from "@/types/directusType";
import { readItems } from "@directus/sdk";

export type ProductArticleDto = Partial<ProductArticle> & {
  testimonials?: (Pick<Testimonials, "avatar" | "name" | "message"> & {
    image?: string;
  })[];
  product_id: Pick<Product, "name" | "image">;
  product_useses: Pick<ProductUses, "image" | "uses_text"> | null;
  product_qnas: Pick<ProductQna, "question" | "answer" | "image_answer"> | null;
};

export const getProductArticleBySlug = async (slug: string) => {
  return directusClient.request(
    readItems("product_article", {
      fields: [
        "consumption_age",
        "main_video_link",
        "shopee",
        "lazada",
        "sendo",
        "facebook",
        "uses_summary",
        "main_uses_image",
        "user_manual",
        "main_ingredient",
        "vitamin_ingredient",
        "mineral_ingredient",
        {
          product_id: ["name", "image", "id"],
          testimonials: ["avatar", "name", "message", "id"],
          product_useses: ["image", "uses_text", "id"],
          product_qnas: ["question", "answer", "image_answer", "id"],
        },
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
