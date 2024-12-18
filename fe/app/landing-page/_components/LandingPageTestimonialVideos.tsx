"use client";
import React from "react";
import {
  LeftArrow,
  RightArrow,
} from "@/app/landing-page/_components/CarouselArrow";
import { EmblaCarousel } from "@/components/ui/carousel/EmblaCarousel";
import LandingPageTestimonialVideo from "@/app/landing-page/_components/LandingPageTestimonialVideo";
import { useVideoPlayer } from "@/app/landing-page/[slug]/state";

type Props = {
  videos?: { id: string; screen_shot: string; video_link: string }[];
};
const LandingPageTestimonialVideos = ({ videos }: Props) => {
  const videoPlayerState = useVideoPlayer();
  const pauseVideo = () => {
    videoPlayerState.pauseAllVideo();
  };
  return (
    <EmblaCarousel
      className="w-screen"
      hasArrows
      hasNavigation
      loop
      slides={videos ?? []}
      carouselKey="testimonial_video_carousel"
      itemRender={LandingPageTestimonialVideo(videoPlayerState)}
      nextButton={RightArrow}
      prevButton={LeftArrow}
      onNext={pauseVideo}
      onPrevious={pauseVideo}
    />
  );
};
export default LandingPageTestimonialVideos;
