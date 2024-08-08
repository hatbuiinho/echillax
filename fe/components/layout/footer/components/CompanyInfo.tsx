"use client";
import React from "react";
import { usePreference } from "@/stores/usePreference";

const CompanyInfo = () => {
  const {
    company_name,
    address,
    factory,
    mobile_phone_number,
    landline_number,
  } = usePreference();
  return (
    <div className="text-sm text-primary md:text-medium">
      <div className="text-medium uppercase md:text-xl">{company_name}</div>
      <div className="">
        <span className="font-bold">Địa chỉ: </span>
        <span>{address}</span>
      </div>
      <div className="">
        <span className="font-bold">Nhà máy: </span>
        <span>{factory}</span>
      </div>
      <div className="">
        <span className="font-bold">Liên hệ: </span>
        <a href={`tel:${mobile_phone_number}`}>{mobile_phone_number}</a> -{" "}
        <a href={`tel:${landline_number}`}>{landline_number}</a>
      </div>
    </div>
  );
};
export default CompanyInfo;
