"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";

import ProductArticleService, {
  ProductNameAndSlug,
} from "@/app/(product-article)/services";
import {
  Listbox,
  ListboxItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  cn,
} from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CheveronIcon, SearchIcon } from "../../icons";
import Brand from "../../ui/brand";
import { navbarData } from "./data";
import navbar from "./navbar.module.scss";

export const Navbar = () => {
  const { slug } = useParams();
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

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="pointer-events-none flex-shrink-0 text-base text-default-400" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      isBordered
      className=" justify-center bg-amber-50"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <div className="container mx-auto flex items-center justify-center">
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
          <div className="hidden h-[var(--navbar-height)] gap-0 md:flex">
            {navbarData(productSlugList).map((item) => (
              <NavbarItem
                as={Link}
                href={item.slug}
                key={item.title}
                isActive={item.slug === `/${slug}`}
                className={cn(
                  navbar.nav__parent,
                  "relative flex h-full items-center px-2 hover:bg-amber-100 hover:opacity-100 data-[active=true]:bg-amber-100",
                )}
              >
                <div className="font-bold">
                  <span
                    className={cn({ "flex gap-2 px-2": item.children?.length })}
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
                      aria-label="Example with disabled actions"
                      disabledKeys={["edit", "delete"]}
                      onAction={(key) => {
                        router.replace(`/san-pham/${key.toString()}` ?? "/");
                      }}
                      className="mt-2 rounded-md bg-white"
                    >
                      {item.children.map((child) => {
                        return (
                          <ListboxItem key={child.slug}>
                            {child.title}
                          </ListboxItem>
                        );
                      })}
                    </Listbox>
                  </div>
                )}
              </NavbarItem>
            ))}
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
        <div className="pt-12">
          {navbarData(productSlugList).map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="p-2">
              <Link className="w-full" href={item.slug} size="lg">
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
