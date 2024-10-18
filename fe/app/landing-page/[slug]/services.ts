import {
  _getCommonLandingPage,
  _getLandingPageBySlug,
} from "@/app/landing-page/[slug]/actions";
import { Image } from "@/types";
import { toEmbedLink } from "@/utils/convertor";

export const getLandingPageBySlug = async (slug: string) => {
  const res = await _getLandingPageBySlug(slug);
  res.forEach((item) => {
    item.doctor_review_link = toEmbedLink(
      item.doctor_review_link || "",
      "youtube"
    );
  });

  const data = res[0];

  const { product_id } = data || {};

  const {
    image: productImage,
    testimonials,
    social_shares,
    advantages,
    benefits,
  } = product_id || {};

  const testimonialVideos = testimonials?.filter((t) => t.video_link);
  const testimonialPhotos = testimonials?.filter((t) => t.screen_shot);

  const sortedBenefits = (benefits ?? []).sort((b1, b2) => b1.sort - b2.sort);
  const sortedAdvantages = (advantages ?? []).sort(
    (a1, a2) => a1.sort - a2.sort
  );

  return {
    ...data,
    sortedBenefits,
    sortedAdvantages,
    productImage,
    social_shares,
    testimonialVideos,
    testimonialPhotos,
  };
};

export const getCommonLandingPage = async () => {
  const res = await _getCommonLandingPage();
  res.official_check_link = toEmbedLink(
    res.official_check_link || "",
    "youtube"
  );

  const {
    company_images,
    partner_logos,
    performance_certificates,
    quality_certificates,
  } = res || {};

  const partnerLogos =
    (partner_logos?.map((logo) => logo.directus_files_id) as Image[]) ?? [];
  const companyImages =
    (company_images?.map((image) => image.directus_files_id) as Image[]) ?? [];
  const performanceCertificates = performance_certificates?.map(
    (cert) => cert.directus_files_id
  ) as Image[];
  const qualityCertificates = quality_certificates?.map(
    (cert) => cert.directus_files_id
  ) as Image[];

  return {
    ...res,
    partnerLogos,
    companyImages,
    performanceCertificates,
    qualityCertificates,
  };
};
