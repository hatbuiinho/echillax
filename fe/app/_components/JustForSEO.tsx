import React from "react";
import ProductArticleService from "@/app/san-pham/services";

const JustForSEO = async () => {
  const featureProductSLugList =
    (await ProductArticleService.getFeatureSlugList()) ?? [];

  return (
    <div className="hidden">
      {featureProductSLugList.map((prod) => (
        <a key={prod.slug} href={`/san-pham/${prod.slug}`}></a>
      ))}
    </div>
  );
};
export default JustForSEO;
