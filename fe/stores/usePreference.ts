import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Preference } from "@/types/directusType";
import { getPreference } from "@/server-actions";

type PreferenceState = { load: () => Promise<void> } & Preference;
const initSettings: Preference = {} as Preference;
export const usePreference = create<PreferenceState>()(
  devtools((set) => ({
    ...initSettings,
    load: async () => {
      const res = await getPreference();
      const {
        id,
        mobile_phone_number,
        landline_number,
        address,
        company_name,
        factory,
      } = res || {};
      set({
        id,
        mobile_phone_number,
        landline_number,
        address,
        company_name,
        factory,
      });
    },
  }))
);
