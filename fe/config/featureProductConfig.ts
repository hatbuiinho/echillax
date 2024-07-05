import { StaticImageData } from "next/image";
import BA_LOGO from "@/assets/image/featureProduct/logo/Ba Gold.png";
import BABY_LOGO from "@/assets/image/featureProduct/logo/Baby Gold.png";
import GROW_LOGO from "@/assets/image/featureProduct/logo/Grow Gold.png";
import MEDIABON_LOGO from "@/assets/image/featureProduct/logo/Medibone.png";
import NEOCARE_LOGO from "@/assets/image/featureProduct/logo/Neo Care.png";
import INFORLAX_LOGO from "@/assets/image/featureProduct/logo/Inforlax.png";

import BA_DETAIL from "@/assets/image/featureProduct/detail/Ba Gold.png";
import BABY_DETAIL from "@/assets/image/featureProduct/detail/Baby Gold.jpg";
import GROW_DETAIL from "@/assets/image/featureProduct/detail/Grow Gold.jpg";
import MEDIABON_DETAIL from "@/assets/image/featureProduct/detail/Medibone.jpg";
import NEOCARE_DETAIL from "@/assets/image/featureProduct/detail/Neo Care.png";
import INFORLAX_DETAIL from "@/assets/image/featureProduct/detail/Inforlax.jpg";

export type FeatureProduct = {
  code: string;
  logo: StaticImageData;
  detailImageSrc: StaticImageData;
};

export const featureProductConfig: FeatureProduct[] = [
  {
    code: "BA",
    logo: BA_LOGO,
    detailImageSrc: BA_DETAIL,
  },

  {
    code: "BABY",
    logo: BABY_LOGO,
    detailImageSrc: BABY_DETAIL,
  },

  {
    code: "GROW",
    logo: GROW_LOGO,
    detailImageSrc: GROW_DETAIL,
  },

  {
    code: "MEDIABON",
    logo: MEDIABON_LOGO,
    detailImageSrc: MEDIABON_DETAIL,
  },

  {
    code: "NEOCARE",
    logo: NEOCARE_LOGO,
    detailImageSrc: NEOCARE_DETAIL,
  },

  {
    code: "INFORLAX",
    logo: INFORLAX_LOGO,
    detailImageSrc: INFORLAX_DETAIL,
  },
];
