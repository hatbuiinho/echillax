"use client";

import React from "react";
import { Testimonials } from "@/types/directusType";
import { Avatar } from "@nextui-org/react";
import { getFileLinkFromDirectus } from "@/utils/directus";

const TestimonialItem = (testimonials: Testimonials[]) => {
  return testimonials.map((testimonial) => (
    <div
      key={testimonial.id}
      className="shrink-0 grow-0 basis-full px-2 pt-10 sm:basis-1/2 md:basis-1/3"
    >
      <div className="relative h-full overflow-visible rounded-xl bg-white p-3 pt-0 text-primary">
        <Avatar
          radius="full"
          size="lg"
          src={getFileLinkFromDirectus({
            id: testimonial.avatar?.toString() ?? "",
          })}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div className="mb-3 w-full pt-9 text-center">{testimonial.name}</div>
        <div>
          <div className="text-sm">{testimonial.message}</div>
        </div>
      </div>
    </div>
  ));
};
export default TestimonialItem;
