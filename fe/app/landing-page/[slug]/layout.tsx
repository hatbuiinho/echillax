import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="container mx-auto max-w-[1280px]">{children}</section>
  );
};
export default Layout;
