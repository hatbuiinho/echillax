"use server";

import { directusClient } from "@/lib/directus";
import { readItems } from "@directus/sdk";

// export const fetchSiteSettingAction = async (settingId: string) => {
//   return await directusClient.request(
//     readItem("SiteSettings", settingId, {
//       fields: [{ OrgId: ["Id", "Name"] }, "Cover", "ZaloLink"],
//     }),
//   );
// };

// export const fetchAddressAction = async (searchValue: string) => {
//   return await directusClient
//     .request(
//       readItems("Wards", {
//         fields: [
//           "Id",
//           "Name",
//           "Pre",
//           { DistrictId: ["Name", "Pre", { ProvinceId: ["Name", "Pre"] }] },
//         ],
//         search: searchValue,
//         limit: 5,
//       }),
//     )
//     .then((data) => {
//       return data.map((item) => {
//         const {
//           Id,
//           Pre,
//           Name,
//           DistrictId: {
//             Pre: districtPre,
//             Name: districtName,
//             ProvinceId: { Pre: provincePre, Name: provinceName },
//           },
//         } = item;
//         const fullAddress = `${Pre} ${Name}, ${districtPre} ${districtName}, ${provincePre} ${provinceName}`;
//         return {
//           label: fullAddress,
//           value: Id,
//         } as LabelValue;
//       });
//     });
// };

// export const createMemberAction = async (payload: Members) => {
//   return await directusClient.request(createItem("Members", payload));
// };

// export const checkExistAction = async (member: MemberFormValue) => {
//   return await directusClient.request(
//     readItems("Members", {
//       filter: {
//         _and: [
//           {
//             PhoneNumber: {
//               _eq: member.PhoneNumber,
//             },
//           },
//           {
//             FullName: {
//               _eq: member.FullName,
//             },
//           },
//         ],
//       },
//       fields: ["Id"],
//     }),
//   );
// };
