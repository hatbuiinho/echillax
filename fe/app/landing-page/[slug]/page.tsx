import React from "react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getLandingPageBySlug } from "@/app/landing-page/action";
import NextImage from "@/components/ui/nextImage/NextImage";

const Page = async ({ params }: { params: Params }) => {
  const { slug } = params;
  const landingPages = await getLandingPageBySlug(slug);
  const data = landingPages[0];
  const {
    banner,
    title,
    advantage_summary,
    doctor_name,
    doctor_review,
    product_id,
  } = data || {};
  const {
    id,
    image: productImage,
    testimonials,
    advantages,
    benefits,
    social_shares,
  } = product_id || {};
  return (
    <div>
      {/* banner */}
      <NextImage imageId={banner?.toString()} alt={title} />
      {/* title */}
      <div className="p-2 text-center text-lg font-bold uppercase text-primary">
        {title}
      </div>

      <div className="bg-contain px-5">
        {/* product image */}
        <div className="flex w-full justify-center">
          <div className="w-52">
            <NextImage imageId={productImage} alt={title} />
          </div>
        </div>

        {/*  advantage summary */}
        <div className="text-justify text-sm">{advantage_summary}</div>

        {/*  advantages */}
        {advantages?.map((advantage) => (
          <div key={advantage.id}>{advantage.description}</div>
        ))}
      </div>
    </div>
  );
};
export default Page;
