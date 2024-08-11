import { create } from "zustand";
import { devtools } from "zustand/middleware";

type NavbarState = {
  menuOpen: boolean;
  openMenu: (open: boolean) => void;
};
const initState = { menuOpen: false } as NavbarState;

export const useOpenMenu = create<NavbarState>()(
  devtools((set) => ({
    ...initState,
    openMenu: (open: boolean) => {
      set({ menuOpen: open });
    },
  }))
);
