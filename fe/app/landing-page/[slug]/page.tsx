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
} from "@/app/landing-page/[slug]/services";
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
import LandingPageTestimonialVideos from "@/app/landing-page/_components/LandingPageTestimonialVideos";

const Page = async ({ params }: { params: Params }) => {
  const { slug } = params;
  const [landingPage, commonLandingPage] = await Promise.all([
    getLandingPageBySlug(slug),
    getCommonLandingPage(),
  ]);
  const {
    banner,
    title,
    advantage_summary,
    doctor_review,
    productImage,
    origin_description,
    quality_description,
    doctor_review_image,
    doctor_review_link,
    sortedAdvantages,
    sortedBenefits,
    social_shares,
    testimonialPhotos,
    testimonialVideos,
    benefit_image,
  } = landingPage || {};

  const {
    benefit_title,
    social_share_title,
    partner_title,
    testimonial_title,
    official_check_title,
    origin_quality_title,
    doctor_review_title,
    companyImages,
    qualityCertificates,
    partnerLogos,
    performanceCertificates,
  } = commonLandingPage || {};

  return (
    <div className={clsx(fontBaloo.className, "flex  flex-col gap-5")}>
      {/* banner */}
      <NextImage ignoreSkeleton imageId={banner?.toString()} alt={title} />
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
        <div className="flex flex-col">
          <SectionTitle>{benefit_title}</SectionTitle>
          <MotionDiv>
            <NextImage
              className="mb-2 h-full w-full rounded-xl"
              imageId={benefit_image?.toString()}
            />
            <EmblaCarousel
              playOnInit={false}
              hasNavigation
              numberOfItemInSlide={1}
              slides={sortedBenefits}
              carouselKey="benefit_carousel"
              itemRender={BenefitItem}
              containerClass="flex items-center"
              navigationClass="flex gap-2 mt-2"
            />
          </MotionDiv>
        </div>
      </SectionWrapper>

      {/*  Origin and quality */}
      <SectionWrapper>
        <div className="flex flex-col ">
          <SectionTitle>{origin_quality_title}</SectionTitle>
          <MotionDiv className="flex flex-col rounded-b-xl bg-secondary-100">
            <EmblaCarousel
              autoPlay
              playOnInit
              loop
              slides={companyImages}
              carouselKey="company_info_carousel"
              itemRender={CompanyInfoItem}
            />
            <div
              className="p-3 text-sm"
              dangerouslySetInnerHTML={{ __html: origin_description ?? "" }}
            />
          </MotionDiv>
        </div>
      </SectionWrapper>
      {/*  QualityCertificates */}
      <QualityCertificates certs={qualityCertificates} />

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
          <PerformanceCerts certs={performanceCertificates} />
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
        <SectionTitle className="pt-6">{doctor_review_title}</SectionTitle>
        <DoctorReview
          doctorReview={doctor_review ?? ""}
          doctorImage={doctor_review_image ?? ""}
          doctorReviewLink={doctor_review_link}
        />
      </SectionWrapper>

      <div className="">
        {/* social share */}
        {!!social_shares?.length && (
          <SectionWrapper className="bg-[url(/images/bg/bg-social.png)] pb-2 pt-12">
            <SectionTitle className="mb-6">{social_share_title}</SectionTitle>
            <SocialShares items={social_shares || []} />
          </SectionWrapper>
        )}

        {/* Testimonials */}
        {!!testimonialPhotos?.length && (
          <SectionWrapper className="grid w-screen gap-3 bg-[url(/images/bg/bg-testimonial.png)] px-1 pb-2">
            <SectionTitle className="mt-6">{testimonial_title}</SectionTitle>
            <MotionDiv>
              <EmblaCarousel
                hasArrows
                hasNavigation
                playOnInit
                loop
                slides={testimonialPhotos ?? []}
                carouselKey="testimonial_carousel"
                itemRender={LandingPageTestimonialItem}
                nextButton={RightArrow}
                prevButton={LeftArrow}
              />
            </MotionDiv>

            <MotionDiv>
              <LandingPageTestimonialVideos videos={testimonialVideos} />
            </MotionDiv>
          </SectionWrapper>
        )}

        {/* Get advise */}
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
