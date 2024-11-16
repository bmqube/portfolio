"use client";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { useState } from "react";
import { BookOpen } from "lucide-react";

export const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NextUINavbar className="px-0" maxWidth="lg" position="sticky" isBordered>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit">
          <NextLink
            className="flex justify-start items-center sm:p-4"
            href="/"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="font-black text-xl sm:text-2xl flex gap-1">
              <p className="dark:text-gray-500 text-gray-400">{"{"}</p>
              {"BM"}
              <p className={`${isHovered ? "typewriter" : ""}`}>
                {isHovered ? " Monjur Morshed" : "³"}
              </p>
              <p className="dark:text-gray-500 text-gray-400">{"}"}</p>
            </div>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="flex basis-1/5 sm:basis-full font-bold items-center"
        justify="end"
      >
        <NavbarItem>
          <NextLink
            className={clsx(
              linkStyles({ color: "foreground" }),
              "data-[active=true]:text-primary data-[active=true]:font-medium hover:text-primary-500 hover:font-bold flex gap-2 items-center"
            )}
            color="foreground"
            href="/blog"
          >
            <BookOpen className="w-4 h-4" />
            Blog
          </NextLink>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
