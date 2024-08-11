"use client";
import React from "react";
import { NavbarMenuToggle } from "@nextui-org/react";
import { NavbarContent } from "@nextui-org/navbar";
import { useOpenMenu } from "@/components/layout/navbar/state";

const ClientNavbarMenuToggle = () => {
  const { menuOpen } = useOpenMenu();
  return (
    <NavbarContent className="md:hidden" justify="start">
      <NavbarMenuToggle
        className="p-5"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      />
    </NavbarContent>
  );
};
export default ClientNavbarMenuToggle;
