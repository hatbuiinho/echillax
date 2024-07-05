import { asyncWithTryCatch } from "@/utils/http";
import { getFeatureProductSlugList, getProductArticleBySlug } from "./action";

export type ProductNameAndSlug = {
  productName: string;
  slug: string;
};

const getBySlug = async (slug: string) => {
  const promise = getProductArticleBySlug(slug).then((data) => {
    if (data.length) {
      return data[0];
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
