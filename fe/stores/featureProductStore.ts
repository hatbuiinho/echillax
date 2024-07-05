import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type MilkBrandStore = {
  selectedProductCode: any;
  selectProduct: (code: any) => void;
};

const initState: MilkBrandStore = {
  selectedProductCode: "BA",
  selectProduct: (code) => {},
};
export const useFeatureProducts = create<MilkBrandStore>()(
  devtools((set) => ({
    ...initState,
    selectProduct: (code: string) => {
      set({
        selectedProductCode: code,
      });
    },
  })),
);
