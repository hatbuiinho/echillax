import { create } from "zustand";
import { devtools } from "zustand/middleware";

type CertificateState = {
  selectedCertId?: string;
  selectCert: (certId: string) => void;
};
const initState = {};

export const useCertificate = create<CertificateState>()(
  devtools((set) => ({
    ...initState,
    selectCert: (certId: string) => {
      set({ selectedCertId: certId });
    },
  }))
);
