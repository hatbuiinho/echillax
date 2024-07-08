import { Slide } from "@/components/ui/carousel/EmblaCarousel";

import babySolution1 from "@/assets/image/solutions/baby/x1.jpg";
import babySolution2 from "@/assets/image/solutions/baby/x2.jpg";
import babySolution3 from "@/assets/image/solutions/baby/x3.jpg";
import babySolution4 from "@/assets/image/solutions/baby/x4.jpg";
import babySolution5 from "@/assets/image/solutions/baby/x5.jpg";
import babySolution6 from "@/assets/image/solutions/baby/x6.jpg";
import babySolution7 from "@/assets/image/solutions/baby/x7.jpg";
import babySolution8 from "@/assets/image/solutions/baby/x8.jpg";
import babySolution9 from "@/assets/image/solutions/baby/x9.jpg";
import babySolution10 from "@/assets/image/solutions/baby/x10.jpg";
import babySolution11 from "@/assets/image/solutions/baby/x11.jpg";
import babySolution12 from "@/assets/image/solutions/baby/x12.jpg";
import babySolution13 from "@/assets/image/solutions/baby/x13.jpg";
import babySolution14 from "@/assets/image/solutions/baby/x14.jpg";
import babySolution15 from "@/assets/image/solutions/baby/x15.jpg";
import babySolution16 from "@/assets/image/solutions/baby/x16.jpg";
import babySolution17 from "@/assets/image/solutions/baby/x17.jpg";
import babySolution18 from "@/assets/image/solutions/baby/x18.jpg";
import babySolution19 from "@/assets/image/solutions/baby/x19.jpg";
import babySolution20 from "@/assets/image/solutions/baby/x20.jpg";

import momSolution1 from "@/assets/image/solutions/mom/x1.jpg";
import momSolution2 from "@/assets/image/solutions/mom/x2.jpg";
import momSolution3 from "@/assets/image/solutions/mom/x3.jpg";
import momSolution4 from "@/assets/image/solutions/mom//x4.jpg";
import momSolution5 from "@/assets/image/solutions/mom/x5.jpg";
import momSolution6 from "@/assets/image/solutions/mom/x6.jpg";
import momSolution7 from "@/assets/image/solutions/mom/x7.jpg";
import momSolution8 from "@/assets/image/solutions/mom/x8.jpg";

export type NutritionalSolution = {
  title: string;
  solutions: SolutionCard[];
};

export type SolutionCard = Slide;

export const nutionalSolutionConfig: NutritionalSolution[] = [
  {
    title: "Dinh dưỡng bé yêu",
    solutions: [
      {
        image: babySolution2,
      },
      {
        image: babySolution3,
      },
      {
        image: babySolution4,
      },
      {
        image: babySolution1,
      },
      {
        image: babySolution5,
      },
      {
        image: babySolution6,
      },
      {
        image: babySolution7,
      },
      {
        image: babySolution8,
      },
      {
        image: babySolution9,
      },
      {
        image: babySolution10,
      },
      {
        image: babySolution11,
      },
      {
        image: babySolution12,
      },
      {
        image: babySolution13,
      },
      {
        image: babySolution14,
      },
      {
        image: babySolution15,
      },
      {
        image: babySolution16,
      },
      {
        image: babySolution17,
      },
      {
        image: babySolution18,
      },
      {
        image: babySolution19,
      },
      {
        image: babySolution20,
      },
    ],
  },
  {
    title: "Dinh dưỡng mẹ bầu",
    solutions: [
      {
        image: momSolution1,
      },
      {
        image: momSolution2,
      },
      {
        image: momSolution3,
      },
      {
        image: momSolution4,
      },
      {
        image: momSolution5,
      },
      {
        image: momSolution6,
      },
      {
        image: momSolution7,
      },
      {
        image: momSolution8,
      },
    ],
  },
  // {
  //   title: "Dinh dưỡng người lớn tuổi",
  //   solutions: [],
  // },
];
