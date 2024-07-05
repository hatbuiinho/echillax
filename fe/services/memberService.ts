import { MemberFormValue } from "@/config/memberFormConfig";
import {
  checkExistAction,
  createMemberAction,
  fetchAddressAction,
  fetchCultivationAction,
  fetchSiteSettingAction,
} from "@/server-actions";
import { SettingStore } from "@/stores/settings";
import { memberFormToEntity } from "@/utils/convertor";
import { asyncWithTryCatch } from "@/utils/http";

export const fetchCultivationPlace = async (setting: SettingStore) => {
  return asyncWithTryCatch(fetchCultivationAction(setting.org?.Id));
};

export const searchAddress = async (searchValue: string) => {
  return asyncWithTryCatch(fetchAddressAction(searchValue));
};

export const createMember = async (formValue: MemberFormValue) => {
  const isExisted = await checkExistMember(formValue);
  if (isExisted?.length) {
    // TODO: push message to zustand store to show in toast
    return Promise.reject("Thành viên đã đăng ký");
  }
  const payload = memberFormToEntity(formValue);
  const createMemberRequest = createMemberAction(payload).then((data) => {
    alert("create member success");
    console.log("create success", data);
  });
  return asyncWithTryCatch(createMemberRequest);
};

const checkExistMember = async (member: MemberFormValue) => {
  return asyncWithTryCatch(checkExistAction(member));
};

export const fetchSiteSetting = async (settingId: string) => {
  return asyncWithTryCatch(fetchSiteSettingAction(settingId));
};
