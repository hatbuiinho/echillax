"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import NextImage from "@/components/ui/nextImage/NextImage";
import { ProductQna } from "@/types/directusType";

type Props = {
  productQnas: ProductQna[];
};
const QnaAnswers = ({ productQnas }: Props) => {
  return (
    <Accordion defaultExpandedKeys={[]}>
      {productQnas.map((qna) => (
        <AccordionItem
          key={qna.id}
          aria-label="Accordion 1"
          subtitle=""
          title={
            <p className="text-medium text-primary">{qna.question ?? ""}</p>
          }
        >
          {qna.answer ? (
            <p className="text-sm text-secondary">{qna.answer}</p>
          ) : (
            <div className="flex justify-center">
              <NextImage
                imageId={qna.image_answer?.toString()}
                alt="qna-photo"
                className="h-full w-auto select-none rounded-lg"
              />
            </div>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
export default QnaAnswers;
