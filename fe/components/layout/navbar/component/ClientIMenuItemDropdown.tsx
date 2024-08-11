"use client";
import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/navbar/data";
import clsx from "clsx";

type Props = {
  host: string | null;
  item: Navbar;
};

const ClientIMenuItemDropdown = ({ host, item }: Props) => {
  const router = useRouter();

  return (
    !!item.children?.length && (
      <Listbox
        itemClasses={{
          base: [
            "data-[hover=true]:bg-secondary-100 data-[hover=true]:text-primary",
          ],
        }}
        onAction={(key) => {
          router.push(`/san-pham/${key.toString()}` ?? "/");
        }}
        className="mt-2 rounded-md bg-white"
      >
        {item.children.map((child) => {
          const isSubItemActive = item.slug && host?.includes(item.slug);
          console.log(child.slug, { isSubItemActive });
          return (
            <ListboxItem key={child.slug}>
              <div
                className={clsx({
                  "text-secondary": isSubItemActive,
                })}
              >
                {child.title}
              </div>
            </ListboxItem>
          );
        })}
      </Listbox>
    )
  );
};
export default ClientIMenuItemDropdown;
