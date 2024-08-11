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
        "doctor_name",
        "doctor_review",
        "doctor_review_image",
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
        "quality_certificates",
        "performance_certificates",
        { company_images: [{ directus_files_id: ["id", "title"] }] },
        { partner_logos: [{ directus_files_id: ["id", "title"] }] },
        "benefit_title",
        "partner_title",
        "social_share_title",
        "testimonial_title",
        "official_check_title",
        "origin_quality_title",
      ],
    })
  );
};
