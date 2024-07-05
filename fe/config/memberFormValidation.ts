import { RegexConstants } from "@/constants";
import { Members } from "@/types/directusType";
import { ZodSchema, ZodTypeAny, nullable, number, object, string } from "zod";
import { memberFormConfig } from "./memberFormConfig";
import { isEmpty } from "lodash";

type MemberKey = keyof Members;
type Schema = Partial<{ [key in MemberKey]: ZodTypeAny }>;

export const memberFormSchemas: ZodSchema[] = [];

memberFormConfig.forEach((section) => {
  const schemeContent: Schema = {};
  section.formQuestions.forEach((question) => {
    const { isRequired, message, name } = question;
    if (!isRequired || !message) {
      return;
    }
    let validator: ZodTypeAny = string();
    switch (name) {
      case "LocationId":
      case "FullName":
      case "ReligiousName":
        validator = string({
          required_error: message,
          invalid_type_error: message,
        });
        break;
      case "PhoneNumber":
        validator = string({
          required_error: "Xin hãy nhập số điện thoại",
        }).regex(RegexConstants.phone.vn, { message });
        break;
      case "DateOfBirth":
        validator = object(
          {
            year: number(),
            month: number(),
            day: number(),
          },
          { required_error: "Xin hãy điền ngày sinh" },
        ).refine(
          ({ year, month, day }) => {
            console.log({ year, month, day }, !year || !month || !day);

            return year && month && day;
          },
          {
            message: "Hãy nhập ngày hợp lệ",
          },
        );
        break;
      default:
        validator = string({
          required_error: message,
          invalid_type_error: message,
        });
    }
    schemeContent[name] = validator;
  });
  console.log(schemeContent);

  memberFormSchemas.push(object(schemeContent));
});
