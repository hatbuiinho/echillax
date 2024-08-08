import React from "react";
import Logo from "@/components/ui/brand/logo";
import { Divider } from "@nextui-org/react";
import CompanyInfo from "@/components/layout/footer/components/CompanyInfo";

const Footer = async () => {
  return (
    <footer className="bg-secondary-200 p-3">
      <div className="mb-2">
        <Logo />
      </div>
      <Divider />
      <div className="p-2">
        <CompanyInfo />
      </div>
    </footer>
  );
};
export default Footer;
