import React from "react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import NextImage from "@/components/ui/nextImage/NextImage";
import MotionDiv from "@/components/ui/motion/MotionDiv";
import { EmblaCarousel } from "@/components/ui/carousel/EmblaCarousel";
import BenefitItem from "@/app/landing-page/_components/BenefitItem";
import QualityCertificates from "@/app/landing-page/_components/QualityCertificates";
import Partners from "@/app/landing-page/_components/Partners";
import PerformanceCerts from "@/app/landing-page/_components/PerformanceCerts";
import DoctorReview from "@/app/landing-page/_components/DoctorReview";
import GetAdvise from "@/app/(home)/_components/GetAdvise";
import {
  getCommonLandingPage,
  getLandingPageBySlug,
} from "@/app/landing-page/services";
import SectionTitle from "@/app/landing-page/_components/SectionTitle";
import clsx from "clsx";
import { fontBaloo } from "@/config/fonts/fonts";
import SectionWrapper from "@/app/landing-page/_components/SectionWrapper";
import SocialShares from "@/app/landing-page/_components/SocialShares";
import LandingPageTestimonialItem from "@/app/landing-page/_components/LandingPageTestimonialItem";
import {
  LeftArrow,
  RightArrow,
} from "@/app/landing-page/_components/CarouselArrow";
import CompanyInfoItem from "@/app/landing-page/_components/CompanyInfoItem";
import { Image } from "@/types";

const Page = async ({ params }: { params: Params }) => {
  const { slug } = params;
  const [landingPages, commonLandingPage] = await Promise.all([
    getLandingPageBySlug(slug),
    getCommonLandingPage(),
  ]);
  const data = landingPages[0];
  const {
    banner,
    title,
    advantage_summary,
    doctor_name,
    doctor_review,
    product_id,
    origin_image,
    origin_description,
    quality_description,
    doctor_review_image,
  } = data || {};

  const {
    benefit_title,
    social_share_title,
    partner_title,
    testimonial_title,
    company_images,
    partner_logos,
    official_check_title,
    origin_quality_title,
  } = commonLandingPage || {};
  const {
    id,
    image: productImage,
    testimonials,
    advantages,
    benefits,
    social_shares,
  } = product_id || {};
  const sortedBenefits = (benefits ?? []).sort((b1, b2) => b1.sort - b2.sort);
  const sortedAdvantages = (advantages ?? []).sort(
    (a1, a2) => a1.sort - a2.sort
  );
  const partnerLogos =
    (partner_logos?.map((logo) => logo.directus_files_id) as Image[]) ?? [];
  const companyImages =
    (company_images?.map((image) => image.directus_files_id) as Image[]) ?? [];
  return (
    <div className={clsx(fontBaloo.className, "flex flex-col gap-5")}>
      {/* banner */}
      <NextImage imageId={banner?.toString()} alt={title} />
      {/* title */}
      <SectionTitle>{title}</SectionTitle>
      <SectionWrapper>
        <div className="flex flex-col gap-8 bg-contain ">
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
            {sortedAdvantages?.map((advantage, index) => (
              <MotionDiv
                key={advantage.id}
                transition={{ duration: (index + 1) * 0.75 }}
                viewport={{ once: true, amount: 0.1 }}
                className="flex items-center rounded-lg border border-gray-100 bg-secondary-100 p-2 pl-0"
              >
                <div className="mx-2 block w-16 shrink-0 ">
                  <NextImage imageId={advantage.image} />
                </div>
                <MotionDiv className="text-justify text-sm">
                  {advantage.description}
                </MotionDiv>
              </MotionDiv>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Benefits */}
      <SectionWrapper>
        <div className="flex flex-col ">
          <SectionTitle>{benefit_title}</SectionTitle>
          <EmblaCarousel
            hasNavigation
            numberOfItemInSlide={1}
            slides={sortedBenefits}
            carouselKey="benefit_carousel"
            itemRender={BenefitItem}
            containerClass="flex items-center"
            navigationClass="flex gap-2 mt-2"
          />
        </div>
      </SectionWrapper>

      {/*  Origin and quality */}
      <SectionWrapper>
        <div className="flex flex-col ">
          <SectionTitle>{origin_quality_title}</SectionTitle>
          <MotionDiv className="flex flex-col rounded-b-xl bg-secondary-100">
            <EmblaCarousel
              slides={companyImages}
              carouselKey="company_info_carousel"
              itemRender={CompanyInfoItem}
              autoPlay
            />
            <div
              className="p-3 text-sm"
              dangerouslySetInnerHTML={{ __html: origin_description ?? "" }}
            />
          </MotionDiv>
        </div>
      </SectionWrapper>
      {/*  QualityCertificates */}
      <QualityCertificates />

      <SectionWrapper>
        <MotionDiv className=" ">
          <div
            className="rounded-xl bg-secondary-100 p-3 text-sm"
            dangerouslySetInnerHTML={{ __html: quality_description ?? "" }}
          />
        </MotionDiv>
      </SectionWrapper>

      {/*  Partner */}
      <SectionWrapper>
        <div className="flex flex-col gap-2 ">
          <SectionTitle>{partner_title}</SectionTitle>
          <Partners partners={partnerLogos} />
        </div>
      </SectionWrapper>

      {/* Performance certificate */}
      <SectionWrapper>
        <div className="flex flex-col gap-2 ">
          <PerformanceCerts />
        </div>
      </SectionWrapper>

      {/*  Official check */}
      <SectionWrapper className="bg-[url(/images/bg/bg-official-check.png)]">
        <div className="flex flex-col gap-2 py-5">
          <SectionTitle>{official_check_title}</SectionTitle>
          <MotionDiv>
            <iframe
              style={{ aspectRatio: "16 / 9" }}
              className="w-full rounded-xl"
              src={commonLandingPage.official_check_link ?? ""}
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </MotionDiv>
        </div>
      </SectionWrapper>

      {/* Doctor review */}
      <SectionWrapper className="px-0">
        <DoctorReview
          doctorReview={doctor_review ?? ""}
          doctorName={doctor_name ?? ""}
          doctorImage={doctor_review_image ?? ""}
        />
      </SectionWrapper>

      <div className="">
        <SectionWrapper className="bg-[url(/images/bg/bg-social.png)] pb-2 pt-12">
          <SectionTitle className="mb-6">{social_share_title}</SectionTitle>
          <SocialShares items={social_shares || []} />
        </SectionWrapper>

        <SectionWrapper className="bg-[url(/images/bg/bg-testimonial.png)] px-2 pb-2">
          <SectionTitle className="pt-6">{testimonial_title}</SectionTitle>
          <EmblaCarousel
            slides={testimonials ?? []}
            carouselKey="testimonial_carousel"
            itemRender={LandingPageTestimonialItem}
            nextButton={RightArrow}
            prevButton={LeftArrow}
            hasArrows
            hasNavigation
          />
        </SectionWrapper>
        <SectionWrapper className="bg-gray-200">
          <MotionDiv className="flex flex-col gap-2 pt-5">
            <GetAdvise mobile />
          </MotionDiv>
        </SectionWrapper>
      </div>
    </div>
  );
};
export default Page;
