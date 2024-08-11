"use client";
import React from "react";
import Link from "next/link";
import { Accordion, AccordionItem, NavbarMenuItem } from "@nextui-org/react";
import clsx from "clsx";
import { useOpenMenu } from "@/components/layout/navbar/state";
import { Navbar } from "@/components/layout/navbar/data";

type Props = { item: Navbar; host: string | null };
const MenuItem = ({ item, host }: Props) => {
  const { openMenu } = useOpenMenu();
  return (
    <NavbarMenuItem
      className="p-2"
      onClick={() => {
        openMenu(false);
      }}
    >
      {!item.children?.length ? (
        <Link className="w-full" href={item.slug ?? ""}>
          {item.title}
        </Link>
      ) : (
        <Accordion
          itemClasses={{
            base: "text-primary",
          }}
          className="px-0 text-primary"
          defaultExpandedKeys={host?.includes("/san-pham") ? ["/san-pham"] : []}
        >
          <AccordionItem
            key={"/san-pham"}
            aria-label={item.title}
            title={item.title}
            classNames={{
              title: "text-primary",
              trigger: "py-0",
            }}
          >
            {item.children.map((child) => {
              const isSubItemActive = host?.includes(child.slug);
              return (
                <Link
                  href={`/san-pham/${child.slug}`}
                  key={`/san-pham/${child.slug}`}
                  className="block py-2 pl-2"
                >
                  <div
                    className={clsx("cursor-pointer", {
                      "text-secondary-600": isSubItemActive,
                    })}
                    onClick={() => {
                      openMenu(false);
                    }}
                  >
                    {child.title}
                  </div>
                </Link>
              );
            })}
          </AccordionItem>
        </Accordion>
      )}
    </NavbarMenuItem>
  );
};
export default MenuItem;
