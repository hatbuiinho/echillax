"use client";
import React, { ReactNode } from "react";

import { Navbar } from "@nextui-org/navbar";
import { useOpenMenu } from "@/components/layout/navbar/state";

type Props = {
  children: ReactNode;
};
const ClientNavbar = ({ children }: Props) => {
  const { menuOpen, openMenu } = useOpenMenu();
  return (
    <Navbar
      maxWidth="xl"
      position="sticky"
      isBordered
      className=" justify-center bg-amber-50"
      isMenuOpen={menuOpen}
      onMenuOpenChange={openMenu}
    >
      {children}
    </Navbar>
  );
};
export default ClientNavbar;
