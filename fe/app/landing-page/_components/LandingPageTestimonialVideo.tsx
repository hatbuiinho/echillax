"use client";
import React from "react";
import { Testimonials } from "@/types/directusType";
import EmbedVideo from "@/components/ui/embed-video";

const LandingPageTestimonialVideo = (items: Testimonials[]) => {
  return items.map((testimonial) => {
    return (
      <div
        key={testimonial.id}
        className="flex shrink-0 grow-0 basis-full justify-center p-1"
      >
        <EmbedVideo
          aspectRatio="1 / 1"
          src={testimonial.video_link ?? ""}
          platform="tiktok"
        />
      </div>
    );
  });
};
export default LandingPageTestimonialVideo;
