import { MemberFormValue } from "@/config/memberFormConfig";
import { Members } from "@/types/directusType";

export const memberFormToEntity = (memberForm: MemberFormValue) => {
  const {
    LocationId,
    FullName,
    ReligiousName,
    PhoneNumber,
    Gender,
    PermanentWardId,
    TemporaryWardId,
    Work,
    Referrencer,
    CtnId,
  } = memberForm;
  const { year, month, day } = memberForm.DateOfBirth || {};
  return {
    LocationId: +LocationId,
    FullName,
    ReligiousName,
    PhoneNumber,
    Gender: +Gender,
    TemporaryWardId: +TemporaryWardId,
    PermanentWardId: +PermanentWardId,
    Work,
    Referrencer,
    DateOfBirth: calendarToDateString({ year, month, day }),
    OrgType: 0,
    UFullName: removeVietnameseDiacriticsAndSpace(FullName),
    CreatedAt: new Date().toISOString(),
    Exps: 0,
    CtnId,
  } as Members;
};

function removeVietnameseDiacriticsAndSpace(str: string) {
  return str
    .normalize("NFD") // Decompose into base characters and diacritics
    .replace(/[\u0300-\u036f]/g, "") // Remove all diacritic marks
    .replace(/đ/g, "d") // Special case for 'đ'
    .replace(/Đ/g, "D") // Special case for 'Đ'
    .replace(/\s+/g, "")
    .toLowerCase()
    .normalize("NFC"); // Recompose to precomposed characters (optional, for cleaning up any remaining composite characters)
}

function calendarToDateString({
  year,
  month,
  day,
}: {
  year?: number;
  month?: number;
  day?: number;
}) {
  if (!year || !month || !day) {
    return undefined;
  }
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;
  return `${year}-${formattedMonth}-${formattedDay}`;
}
