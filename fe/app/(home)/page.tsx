"use client";

import Banner from "@/app/_components/Banner";
import FeatureProducts from "@/app/_components/FeatureProducts";
import NutritionalSolutions from "@/app/_components/NutritionalSolutions";
import GetAdvise from "@/app/_components/GetAdvise";

export default function Home() {
  return (
    <section className="">
      <Banner />
      <div className="container mx-auto flex max-w-[1280px] flex-col gap-4">
        <FeatureProducts />
        <NutritionalSolutions />
        <GetAdvise />
      </div>
    </section>
  );
}
