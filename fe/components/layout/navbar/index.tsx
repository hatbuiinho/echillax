"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import Link from "next/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";

import ProductArticleService, {
  ProductNameAndSlug,
} from "@/app/san-pham/services";
import {
  Accordion,
  AccordionItem,
  Listbox,
  ListboxItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  cn,
} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CheveronIcon, SearchIcon } from "../../icons";
import Brand from "../../ui/brand";
import { navbarData } from "./data";
import navbar from "./navbar.module.scss";
import clsx from "clsx";

export const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [productSlugList, setProductSlugList] = useState<ProductNameAndSlug[]>(
    [],
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    ProductArticleService.getFeatureSlugList().then((data) =>
      setProductSlugList(data ?? []),
    );
  }, []);

  // const searchInput = (
  //   <Input
  //     aria-label="Search"
  //     classNames={{
  //       inputWrapper: "bg-default-100",
  //       input: "text-sm",
  //     }}
  //     endContent={
  //       <Kbd className="hidden lg:inline-block" keys={["command"]}>
  //         K
  //       </Kbd>
  //     }
  //     labelPlacement="outside"
  //     placeholder="Search..."
  //     startContent={
  //       <SearchIcon className="pointer-events-none flex-shrink-0 text-base text-default-400" />
  //     }
  //     type="search"
  //   />
  // );

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      isBordered
      className=" justify-center bg-amber-50"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <div className="container mx-auto flex items-center justify-center text-primary">
        <NavbarContent className="md:hidden" justify="start">
          <NavbarMenuToggle
            className="p-5"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarBrand className="absolute left-[1.5rem] top-[4rem] h-[2.5rem] flex-grow-0 basis-28 md:static md:top-0 md:h-[5rem]">
          <Brand />
        </NavbarBrand>

        <NavbarContent className="flex-grow-1 gap-0">
          <div className="hidden h-[var(--navbar-height)] gap-1 md:flex">
            {navbarData(productSlugList).map((item) => {
              const isActive = pathName.includes(item.slug ?? "");
              return (
                <NavbarItem
                  as={item.children?.length ? "a" : Link}
                  href={item.children?.length ? undefined : item.slug}
                  key={item.slug}
                  isActive={isActive}
                  className={cn(
                    navbar.nav__parent,
                    "relative flex h-full items-center rounded-md px-2 hover:bg-secondary-100 hover:opacity-100 data-[active=true]:bg-secondary-100",
                  )}
                >
                  <div className="font-bold">
                    <span
                      className={cn({
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
                    <div className={cn(navbar.nav__child, "absolute top-full")}>
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
                          const isSubItemActive = pathName.includes(child.slug);

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
          {navbarData(productSlugList).map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              className="p-2"
              onClick={() => {
                setIsMenuOpen(false);
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
                  defaultExpandedKeys={
                    pathName.includes("/san-pham") ? ["/san-pham"] : []
                  }
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
                      const isSubItemActive = pathName.includes(child.slug);
                      return (
                        <div key={`/san-pham/${child.slug}`} className="pl-2">
                          <div
                            className={clsx("cursor-pointer", {
                              "text-secondary": isSubItemActive,
                            })}
                            onClick={() => {
                              router.push(`/san-pham/${child.slug}`);
                              setIsMenuOpen(false);
                            }}
                          >
                            {child.title}
                          </div>
                        </div>
                      );
                    })}
                  </AccordionItem>
                </Accordion>
              )}
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
