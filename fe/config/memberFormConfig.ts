import { Gender } from "@/enums/gender";
import { fetchCultivationPlace, searchAddress } from "@/services/memberService";
import { MemberForm } from "@/types";

export const memberFormConfig: MemberForm = [
  {
    id: 1,
    title: "Chào huynh đệ mến thương",
    description: "Mừng huynh đệ đến với buổi tu tập của Chúng Thanh Niên ^^",
    formQuestions: [
      {
        name: "LocationId",
        label: "Huynh đệ đang ở điểm tu tập nào vậy ạ?",
        type: "autocomplete",
        isRequired: true,
        fetchData: fetchCultivationPlace,
        message: "Xin hãy chọn điểm tu tập hiện tại ạ",
      },
    ],
    hasNext: true,
  },
  {
    id: 2,
    title: "Kết nối",
    description:
      "Huynh đệ cho chúng con xin thông tin cơ bản của HĐ để chúng con liên hệ, thông báo lịch tu tập, Phật sự, các hoạt động xã hội cho HĐ ạ ^^",
    formQuestions: [
      {
        name: "FullName",
        label: "Họ và tên",
        type: "inputText",
        isRequired: true,
        message: "Xin hãy điền họ tên",
      },
      {
        name: "ReligiousName",
        label: "Pháp Danh (Nếu có)",
        type: "inputText",
        isRequired: false,
      },
      {
        name: "PhoneNumber",
        label: "Số điện thoại",
        type: "inputText",
        isRequired: true,
        message: "Huynh đệ điền SDT hợp lệ để chúng con có thể liên hệ HD ạ",
      },
    ],
    hasNext: true,
    hasBack: true,
  },
  {
    id: 3,
    title: "Kết nối",
    description:
      "Huynh đệ cho chúng con xin thông tin cơ bản của HĐ để chúng con liên hệ, thông báo lịch tu tập, Phật sự, các hoạt động xã hội cho HĐ ạ ^^",
    formQuestions: [
      {
        name: "DateOfBirth",
        label: "Ngày sinh",
        type: "dateinput",
        message: "Xin hãy nhập ngày hợp lệ",
        isRequired: true,
        width: "1/2",
      },
      {
        name: "Gender",
        label: "Giới tính",
        type: "radio",
        isRequired: true,
        message: "Xin hãy chọn giới tính",
        options: [
          { label: "Nam", value: Gender.Male },
          { label: "Nữ", value: Gender.Female },
        ],
        width: "1/2",
      },
      {
        name: "TemporaryWardId",
        label: "Nơi ở hiện tại",
        type: "autocomplete",
        message: "Xin hãy tìm và chọn nơi ở hiện tại",
        description: "Hãy nhập tên phường/xã mà huynh đệ đang ở",
        isRequired: true,
        fetchData: searchAddress,
        fetchParams: { isSearch: true },
      },
      {
        name: "PermanentWardId",
        label: "Địa chỉ ở quê",
        type: "autocomplete",
        isRequired: false,
        fetchData: searchAddress,
        fetchParams: { isSearch: true },
      },
    ],
    hasBack: true,
    hasNext: true,
  },
  {
    id: 4,
    title: "Giữ kết nối",
    description: "",
    formQuestions: [
      {
        name: "Work",
        label: "Nghề nghiệp - Nơi học tập/làm việc",
        type: "inputText",
        isRequired: true,
        message: "Huynh đệ vui lòng cho chúng con biết nghề nghiệp của HD ạ",
        description: "VD: Sinh viên - Trường ĐH Bách Khoa Hà Nội",
      },
      {
        name: "Referrencer",
        label: "Tên và số điện thoại người giới thiệu",
        type: "inputText",
        message:
          "Xin hãy điền thông tin người giới thiệu hoặc nguồn thông tin dẫn HD tới ạ",
        isRequired: true,
      },
    ],
    hasBack: true,
    hasSubmit: true,
  },
];
export type MemberFormValue = typeof initialMemberFormValue & {
  DateOfBirth?: typeof exampleDob;
};

export const initialMemberFormValue = {
  LocationId: "",
  FullName: "",
  ReligiousName: undefined,
  PhoneNumber: "",

  Gender: "",
  TemporaryWardId: "",
  PermanentWardId: "",
  Work: "",
  Referrencer: "",
  CtnId: 0,
  CtnGroupId: 0,
};

export const initTouched = {
  LocationId: false,
  FullName: false,
  ReligiousName: false,
  PhoneNumber: false,

  Gender: false,
  TemporaryWardId: false,
  PermanentWardId: false,
  Work: false,
  Referrencer: false,
  CtnId: false,
  CtnGroupId: false,
};

const exampleDob = {
  calendar: {
    identifier: "gregory",
  },
  era: "AD",
  year: undefined,
  month: undefined,
  day: undefined,
};
//as Partial<Members>;
