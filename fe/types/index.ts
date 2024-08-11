import { SVGProps } from "react";
import { DirectusFiles } from "@/types/directusType";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Image = Pick<DirectusFiles, "id" | "title"> | null;
export type NameAndSlug = {
  title: string;
  slug: string;
};
