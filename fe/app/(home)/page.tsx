"use client";

import Banner from "@/app/(home)/_components/Banner";
import FeatureProducts from "@/app/(home)/_components/FeatureProducts";
import NutritionalSolutions from "@/app/(home)/_components/NutritionalSolutions";
import GetAdvise from "@/app/(home)/_components/GetAdvise";
import MotionDiv from "@/components/ui/motion/MotionDiv";

export default function Home() {
  return (
    <section className="">
      <Banner />
      <MotionDiv className="container mx-auto flex max-w-[1280px] flex-col gap-4">
        <FeatureProducts />
        <NutritionalSolutions />
        <GetAdvise />
      </MotionDiv>
    </section>
  );
}
