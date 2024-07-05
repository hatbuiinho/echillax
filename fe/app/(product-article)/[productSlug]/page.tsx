"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductArticleDto } from "../action";
import ProductArticleService from "../services";

const ProductArticle = () => {
  const { productSlug } = useParams();
  const [productArticle, setProductArticle] = useState<ProductArticleDto>();

  useEffect(() => {
    ProductArticleService.getBySlug(productSlug as string).then((data) => {
      return setProductArticle(data);
    });
  }, [productSlug]);
  return (
    <section>
      <div className="flex">
        <div>
          <Image src="" alt="main-photo" />
        </div>
        <div className="">{`Sản phẩm sữa ${productArticle?.product_id.name}`}</div>
      </div>
    </section>
  );
};

export default ProductArticle;
