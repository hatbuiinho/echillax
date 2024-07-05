import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type SettingStore = {
  coverId?: string;
  org?: { Name: string; Id: number };
  zaloLink?: string;
};

const initSettings = {};
export const useSettings = create<SettingStore>()(
  devtools((set) => ({
    ...initSettings,
  })),
);
