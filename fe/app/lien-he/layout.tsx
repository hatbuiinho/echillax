import React from "react";
import clsx from "clsx";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className={clsx(
        "min-h-screen bg-white bg-[url(../assets/image/contact/bg-contact-us.png)] bg-contain bg-bottom bg-no-repeat",
        "-mb-6 sm:-mb-10 md:-mb-16",
      )}
    >
      {children}
    </section>
  );
};

export default Layout;
