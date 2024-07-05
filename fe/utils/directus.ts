type FileTypeFormat = "auto" | "jpg" | "png" | "webp" | "tiff";
type FitType = "cover" | "contain" | "inside" | "outside";
type FileFormat = {
  id: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: FileTypeFormat;
  fit?: FitType;
};

export const getFileLinkFromDirectus = (option: FileFormat) => {
  const params = Object.keys(option).reduce((acc, param) => {
    //@ts-ignore
    const value = option[param];
    return param != "id" && value ? `${acc}&${param}=${value}` : acc;
  }, "");
  return `${process.env.NEXT_PUBLIC_SERVER_HOST}/assets/${option.id}?${params}`;
};
