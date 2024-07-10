import { ProductNameAndSlug } from "@/app/san-pham/services";

type NavbarChild = {
  title: string;
  slug: string;
};
type Navbar = Partial<NavbarChild> & {
  children?: NavbarChild[];
};
export const navbarData: (productList: ProductNameAndSlug[]) => Navbar[] = (
  productList,
) => {
  const products = productList.map((product) => ({
    slug: product.slug,
    title: product.productName,
  }));
  return [
    {
      title: "Hiểu về Chillax",
      slug: "/hieu-ve-chillax",
    },
    {
      title: "Sản phẩm",
      children: products,
    },
    { title: "Đăng ký BS tư vấn", slug: "/dang-ky-bac-si-tu-van" },
    { title: "Liên hệ", slug: "/lien-he" },
  ];
};
