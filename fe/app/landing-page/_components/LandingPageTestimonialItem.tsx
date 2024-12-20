"use client";
import React from "react";
import { Testimonials } from "@/types/directusType";
import NextImage from "@/components/ui/nextImage/NextImage";

const LandingPageTestimonialItem = (items: Testimonials[]) => {
  return items.map((testimonial) => {
    return (
      <div
        key={testimonial.id}
        className="flex shrink-0 grow-0 basis-full justify-center p-1"
      >
        <div className="flex items-center rounded-xl border-5 border-secondary-400 bg-amber-200">
          <NextImage
            className="h-full rounded-xl object-cover"
            imageId={testimonial.screen_shot}
          />
        </div>
      </div>
    );
  });
};
export default LandingPageTestimonialItem;
