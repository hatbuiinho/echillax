import {
  _getCommonLandingPage,
  _getLandingPageBySlug,
} from "@/app/landing-page/actions";
import { toEmbedYoutubeLink } from "@/utils/convertor";

export const getLandingPageBySlug = async (slug: string) => {
  return await _getLandingPageBySlug(slug);
};

export const getCommonLandingPage = async () => {
  const res = await _getCommonLandingPage();
  res.official_check_link = toEmbedYoutubeLink(res.official_check_link || "");
  return res;
};
