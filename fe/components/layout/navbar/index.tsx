import { Button } from "@nextui-org/button";
import Link from "next/link";
import { NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";

import { NavbarMenu } from "@nextui-org/react";
import { CheveronIcon } from "../../icons";
import Brand from "../../ui/brand";
import { navbarData } from "./data";
import navbar from "./navbar.module.scss";
import { getFeatureList } from "@/app/(home)/san-pham/services";
import MenuItem from "@/components/layout/navbar/component/MenuItem";
import ClientNavbar from "@/components/layout/navbar/component/ClientNavbar";
import ClientNavbarMenuToggle from "@/components/layout/navbar/component/ClientNavbarMenuToggle";
import { headers } from "next/headers";
import ClientIMenuItemDropdown from "@/components/layout/navbar/component/ClientIMenuItemDropdown";
import clsx from "clsx";

export const Navbar = async () => {
  const header = headers();
  const host = header.get("referer");

  const productSlugList = (await getFeatureList()) ?? [];

  return (
    <ClientNavbar>
      <div className="container mx-auto flex items-center justify-center text-primary">
        <ClientNavbarMenuToggle />

        <NavbarBrand className="absolute left-[1.5rem] top-[4rem] h-[2.5rem] flex-grow-0 basis-28 md:static md:top-0 md:h-[5rem]">
          <Brand />
        </NavbarBrand>

        {/* Product dropdown */}
        <NavbarContent className="flex-grow-1 gap-0">
          <div className="hidden h-[var(--navbar-height)] gap-1 md:flex">
            {navbarData(productSlugList, []).map((item) => {
              const isActive = host?.includes(item.slug ?? "");
              return (
                <NavbarItem
                  as={item.children?.length ? "a" : Link}
                  href={item.children?.length ? undefined : item.slug}
                  key={item.slug}
                  isActive={isActive}
                  className={clsx(
                    navbar.nav__parent,
                    "relative flex h-full items-center rounded-md px-2 hover:bg-secondary-100 hover:opacity-100 data-[active=true]:bg-secondary-100"
                  )}
                >
                  <div className="font-bold">
                    <span
                      className={clsx({
                        "flex gap-2 px-2": item.children?.length,
                      })}
                    >
                      {item.title}{" "}
                      {!!item.children?.length && (
                        <CheveronIcon className={navbar.nav__parent_icon} />
                      )}
                    </span>
                  </div>

                  {!!item.children?.length && (
                    <div
                      className={clsx(navbar.nav__child, "absolute top-full")}
                    >
                      <ClientIMenuItemDropdown item={item} host={host} />
                    </div>
                  )}
                </NavbarItem>
              );
            })}
          </div>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden xl:flex">
            <Button
              variant="bordered"
              className="border-primary-500 text-primary"
              as={Link}
              href="#"
            >
              Tham gia Chillax Mum Club
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="#"
              className="font-bold text-white hover:bg-primary-600 hover:opacity-100 data-[hover=true]:opacity-100"
            >
              Đặt hàng trực tuyến
            </Button>
          </NavbarItem>
        </NavbarContent>
      </div>

      <NavbarMenu>
        <div className="pt-12 text-primary">
          {navbarData(productSlugList, []).map((item, index) => (
            <MenuItem key={index} item={item} host={host} />
          ))}
        </div>
      </NavbarMenu>
    </ClientNavbar>
  );
};
