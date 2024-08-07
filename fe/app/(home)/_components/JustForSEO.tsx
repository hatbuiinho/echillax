import React from "react";
import { getFeatureList } from "@/app/(home)/san-pham/services";

const JustForSEO = async () => {
  const featureProductSLugList = (await getFeatureList()) ?? [];

  return (
    <div className="hidden">
      {featureProductSLugList.map((prod) => (
        <a key={prod.slug} href={`/san-pham/${prod.slug}`}></a>
      ))}
    </div>
  );
};
export default JustForSEO;
