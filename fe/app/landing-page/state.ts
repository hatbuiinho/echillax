import { create } from "zustand";
import { devtools } from "zustand/middleware";

type CertificateState = {
  selectedCertId: number;
  selectCert: (certId: number) => void;
};
const initState = { selectedCertId: 0 };

export const useCertificate = create<CertificateState>()(
  devtools((set) => ({
    ...initState,
    selectCert: (certId: number) => {
      set({ selectedCertId: certId });
    },
  }))
);
