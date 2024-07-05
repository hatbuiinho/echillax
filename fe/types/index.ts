import { SVGProps } from "react";
import { Members } from "./directusType";
import { SettingStore } from "@/stores/settings";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type LabelValue = {
  value: any;
  label: string;
};

export type FormField<T> = {
  name: keyof T;
  className?: string;
  message?: string;
  label: string;
  placeholder?: string;
  isRequired?: boolean;
  description?: string;
  options?: LabelValue[];
  fetchData?: (params: any) => Promise<LabelValue[] | undefined>;
  fetchParams?: any;
  width?: "1/2" | "full";
  type:
    | "select"
    | "checkbox"
    | "radio"
    | "datepicker"
    | "dateinput"
    | "timeinput"
    | "autocomplete"
    | "inputText"
    | "multichoice"
    | "file"
    | "image"
    | "textArea";
};

export type MemberForm = FormSetion[];
export type FormSetion = {
  id: number;
  title: string;
  description?: string;
  formQuestions: FormField<Members>[] | [];
  hasNext?: boolean;
  hasBack?: boolean;
  hasSubmit?: boolean;
};
export type MemberFormField = FormField<Members>;
