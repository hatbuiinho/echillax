"use client";

import Banner from "./_components/Banner";
import FeatureProducts from "./_components/FeatureProducts";
import GetAdvise from "./_components/GetAdvise";
import NutritionalSolutions from "./_components/NutritionalSolutions";

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
