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
    <div className="flex flex-col gap-5">
      {/* banner */}
      <NextImage imageId={banner?.toString()} alt={title} />
      {/* title */}
      <div className="p-2 text-center text-xl font-bold uppercase text-primary">
        {title}
      </div>

      <div className="flex flex-col gap-8 bg-contain px-5">
        {/* product image */}
        <div className="flex w-full justify-center">
          <div className="w-52">
            <NextImage imageId={productImage} alt={title} />
          </div>
        </div>

        {/*  advantage summary */}
        <div className="text-justify text-sm text-primary">
          {advantage_summary}
        </div>

        {/*  advantages */}
        <div className="flex flex-col gap-3">
          {advantages?.map((advantage) => (
            <div
              key={advantage.id}
              className="flex items-center rounded-lg border border-gray-100 bg-secondary-100 p-2 pl-0"
            >
              <div className="mx-2 block w-16 shrink-0 ">
                <NextImage imageId={advantage.image} />
              </div>
              <div className="text-justify text-xs">
                {advantage.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col px-5">
        <div className="p-2 text-center text-xl font-bold uppercase text-primary">
          Giải pháp gốc rễ giúp con phát triển toàn diện
        </div>
      </div>
    </div>
  );
};
export default Page;
