"use server";

import { directusClient } from "@/lib/directus";
import { readItems } from "@directus/sdk";
import { StatusEnum } from "@/enums/status";

export const getLandingPageBySlug = async (slug: string) => {
  return directusClient.request(
    readItems("landing_page", {
      fields: [
        "title",
        "advantage_summary",
        "banner",
        "doctor_name",
        "doctor_review",
        "benefit_title",
        "origin_title",
        "origin_image",
        "origin_description",
        "quality_description",
        {
          // banner: ["id"],
          product_id: [
            "id",
            "image",
            {
              advantages: ["id", "image", "description", "sort"],
              testimonials: ["id", "screen_shot"],
              benefits: ["id", "image", "description", "sort"],
              social_shares: ["id", "avatar", "title", "link"],
            },
          ],
        },
      ],
      filter: {
        product_id: {
          slug: {
            _eq: slug,
          },
        },
        status: {
          _eq: StatusEnum.published.toString(),
        },
      },
    })
  );
};
