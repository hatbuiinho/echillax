import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { EmblaCarouselType } from "embla-carousel";

export type CarouselState = {
  api?: EmblaCarouselType;
  slides: any[];
  selectedIndex: number;
  selectedSlide?: any;
};

export type MultipleCarouselState = {
  selectSlide: (slideKey: string, index: number) => void;
  setSlides: (slideKey: string, slides: any[]) => void;
  setApi: (slideKey: string, api: EmblaCarouselType) => void;
  [key: string]: CarouselState | Function;
};

const initState: MultipleCarouselState = {
  selectSlide: (slideKey, index) => {},
  setSlides: (slideKey: string, slides: any[]) => {},
  setApi: (slideKey, api) => {},
};

export const useCarouselState = create<MultipleCarouselState>()(
  devtools((set) => ({
    ...initState,
    setSlides: (slideKey, slides) => {
      if (slideKey) {
        set((state) => ({
          [slideKey]: { ...state[slideKey], slides },
        }));
      }
    },

    selectSlide: (slideKey: string, index: number) => {
      if (slideKey) {
        set((state) => {
          const slideState = state[slideKey] as CarouselState;
          const selectedSlide = slideState?.slides?.[index];

          return {
            [slideKey]: { ...slideState, selectedIndex: index, selectedSlide },
          };
        });
      }
    },

    setApi: (slideKey, api) => {
      if (slideKey) {
        set((state) => {
          const slideState = state[slideKey] as CarouselState;

          return {
            [slideKey]: { ...slideState, api },
          };
        });
      }
    },
  }))
);
