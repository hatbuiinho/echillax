import { NameAndSlug } from "@/types";

type NavbarChild = {
  title: string;
  slug: string;
};
export type Navbar = Partial<NavbarChild> & {
  children?: NavbarChild[];
};
export const navbarData: (
  productList: NameAndSlug[],
  blogList: NameAndSlug[]
) => Navbar[] = (productList, blogList) => {
  return [
    {
      title: "Hiểu về Chillax",
      slug: "/hieu-ve-chillax",
    },
    {
      title: "Sản phẩm",
      slug: "san-pham",
      children: productList,
    },
    // {
    //   title: "Giải pháp dinh dưỡng",
    //   slug: "kinh-nghiem-hay",
    //   children: blogList,
    // },
    { title: "Đăng ký BS tư vấn", slug: "/dang-ky-bac-si-tu-van" },
    { title: "Liên hệ", slug: "/lien-he" },
  ];
};
