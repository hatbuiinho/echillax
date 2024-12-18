import { create } from "zustand";
import { devtools } from "zustand/middleware";

type CertificateState = {
  selectedCertId?: string;
  selectCert: (certId: string) => void;
};
const initCertificateState = {};

export const useCertificate = create<CertificateState>()(
  devtools((set) => ({
    ...initCertificateState,
    selectCert: (certId: string) => {
      set({ selectedCertId: certId });
    },
  }))
);

export type VideoPlayerState = {
  videoPlayState: { [key: string]: boolean };
  pauseAllVideo: () => void;
};
const initVideoPlayerState: VideoPlayerState = {
  videoPlayState: {},
  pauseAllVideo: () => {},
};

export const useVideoPlayer = create<VideoPlayerState>()(
  devtools((set) => ({
    ...initVideoPlayerState,
    pauseAllVideo: () => {
      set({ videoPlayState: {} });
    },
  }))
);
