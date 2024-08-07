import React from "react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getLandingPageBySlug } from "@/app/landing-page/action";
import NextImage from "@/components/ui/nextImage/NextImage";
import MotionDiv from "@/components/ui/motion/MotionDiv";
import { EmblaCarousel } from "@/components/ui/carousel/EmblaCarousel";
import BenefitItem from "@/app/landing-page/_components/BenefitItem";
import Certificates from "@/app/landing-page/_components/Certificates";

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
    benefit_title,
    origin_image,
    origin_title,
    origin_description,
    quality_description,
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
      <MotionDiv className="p-2 text-center text-xl font-bold uppercase text-primary">
        {title}
      </MotionDiv>

      <div className="flex flex-col gap-8 bg-contain px-5">
        {/* product image */}
        <div className="flex w-full justify-center">
          <MotionDiv className="w-52">
            <NextImage imageId={productImage} alt={title} />
          </MotionDiv>
        </div>

        {/*  advantage summary */}
        <MotionDiv className="text-justify text-sm text-primary">
          {advantage_summary}
        </MotionDiv>

        {/*  advantages */}
        <div className="flex flex-col gap-3">
          {advantages?.map((advantage, index) => (
            <MotionDiv
              key={advantage.id}
              transition={{ duration: (index + 1) * 0.75 }}
              viewport={{ once: true, amount: 0.1 }}
              className="flex items-center rounded-lg border border-gray-100 bg-secondary-100 p-2 pl-0"
            >
              <MotionDiv className="mx-2 block w-16 shrink-0 ">
                <NextImage imageId={advantage.image} />
              </MotionDiv>
              <div className="text-justify text-xs">
                {advantage.description}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="flex flex-col px-5">
        <MotionDiv className="p-2 text-center text-xl font-bold uppercase text-primary">
          {benefit_title}
        </MotionDiv>
        <EmblaCarousel
          numberOfItemInSlide={3}
          slides={benefits ?? []}
          carouselKey="benefit_carousel"
          itemRender={BenefitItem}
        />
      </div>

      {/*  Origin and quality */}
      <MotionDiv className="p-2 text-center text-xl font-bold uppercase text-primary">
        {origin_title}
      </MotionDiv>
      <div className="flex flex-col px-5">
        <MotionDiv className="flex flex-col rounded-b-xl bg-secondary-100">
          <NextImage imageId={origin_image} />
          <div
            className="p-3 text-sm"
            dangerouslySetInnerHTML={{ __html: origin_description ?? "" }}
          />
        </MotionDiv>
      </div>

      {/*  Certificates */}
      <Certificates />

      <MotionDiv className=" px-5">
        <div
          className="rounded-xl bg-secondary-100 p-3 text-sm"
          dangerouslySetInnerHTML={{ __html: quality_description ?? "" }}
        />
      </MotionDiv>
    </div>
  );
};
export default Page;
