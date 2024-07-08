import { asyncWithTryCatch } from "@/utils/http";
import { getFeatureProductSlugList, getProductArticleBySlug } from "./action";

export type ProductNameAndSlug = {
  productName: string;
  slug: string;
};

const getBySlug = async (slug: string) => {
  const promise = getProductArticleBySlug(slug).then((data) => {
    if (data.length) {
      const product = data[0];
      const embedYoutubeLinkParts = product.main_video_link?.split("/");
      const youtubeVideoId =
        embedYoutubeLinkParts?.[(embedYoutubeLinkParts?.length ?? 1) - 1];
      product.main_video_link = `https://www.youtube.com/embed/${youtubeVideoId}`;
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

const getFeatureSlugList = async () => {
  const fetcher = async () => {
    const res = await getFeatureProductSlugList();
    return res.map(
      (data) =>
        ({
          slug: data.slug,
          productName: data.product_id?.name,
        }) as ProductNameAndSlug,
    );
  };
  return asyncWithTryCatch(fetcher());
};

const ProductArticleService = { getBySlug, getFeatureSlugList };
export default ProductArticleService;
