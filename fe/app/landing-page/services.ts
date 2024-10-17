import {
  _getCommonLandingPage,
  _getLandingPageBySlug,
} from "@/app/landing-page/actions";
import { toEmbedYoutubeLink } from "@/utils/convertor";

export const getLandingPageBySlug = async (slug: string) => {
  const res = await _getLandingPageBySlug(slug);
  res.forEach((item) => {
    item.doctor_review_link = toEmbedYoutubeLink(item.doctor_review_link || "");
  });
  return res;
};

export const getCommonLandingPage = async () => {
  const res = await _getCommonLandingPage();
  res.official_check_link = toEmbedYoutubeLink(res.official_check_link || "");
  return res;
};
