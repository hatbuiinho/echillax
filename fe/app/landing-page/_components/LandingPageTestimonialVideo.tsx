"use client";
import React from "react";
import { Testimonials } from "@/types/directusType";
import ReactPlayer from "react-player";
import {
  useVideoPlayer,
  VideoPlayerState,
} from "@/app/landing-page/[slug]/state";

const LandingPageTestimonialVideo =
  (videoPlayState: VideoPlayerState) => (items: Testimonials[]) => {
    return items.map((testimonial) => {
      const { setState } = useVideoPlayer;
      const { id } = testimonial;
      return (
        <div
          key={id}
          className="flex shrink-0 grow-0 basis-full justify-center p-1"
        >
          <ReactPlayer
            playing={videoPlayState.videoPlayState[id]}
            onPlay={() => {
              setState((state) => ({ videoPlayState: { [id]: true } }));
            }}
            onPause={() => {
              setState({ videoPlayState: {} });
            }}
            onEnded={() => {
              setState({ videoPlayState: {} });
            }}
            url={testimonial.video_link ?? ""}
            style={{ aspectRatio: "1 / 1 " }}
            width={"100%"}
            height={"100%"}
          />
        </div>
      );
    });
  };
export default LandingPageTestimonialVideo;
