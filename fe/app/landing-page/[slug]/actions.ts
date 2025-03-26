"use server";

import { directusClient } from "@/lib/directus";
import { readItems, readSingleton } from "@directus/sdk";
import { StatusEnum } from "@/enums/status";

export const _getLandingPageBySlug = async (slug: string) => {
  return directusClient.request(
    readItems("landing_page", {
      fields: [
        "title",
        "advantage_summary",
        "banner",
        "doctor_review",
        "doctor_review_image",
        "benefit_title",
        "benefit_image",
        "origin_title",
        "origin_description",
        "quality_description",
        "doctor_review_link",
        {
          // banner: ["id"],
          product_id: [
            "id",
            "image",
            {
              advantages: ["id", "image", "description", "sort"],
              testimonials: ["id", "screen_shot", "video_link"],
              benefits: ["id", "image", "description", "sort"],
              social_shares: ["id", "avatar", "title", "link", "image"],
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

export const _getCommonLandingPage = () => {
  return directusClient.request(
    readSingleton("common_landing_page", {
      fields: [
        "official_check_link",
        {
          company_images: [{ directus_files_id: ["id", "title"] }],
          performance_certificates: [{ directus_files_id: ["id", "title"] }],
          quality_certificates: [{ directus_files_id: ["id", "title"] }],
          partner_logos: [{ directus_files_id: ["id", "title"] }],
        },
        "benefit_title",
        "partner_title",
        "social_share_title",
        "testimonial_title",
        "official_check_title",
        "origin_quality_title",
        "doctor_review_title",
      ],
    })
  );
};
