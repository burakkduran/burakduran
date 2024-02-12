"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Separator } from "../ui/separator";
const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function NavbarLink() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            href={link.href}
            key={link.name}
            className={clsx(
                // ToDo Fix text, hover colors
              "hover:text-yellow-500 dark:hover:text-yellow-400 transition duration-200",
              {
                "text-black dark:text-zinc-200 font-medium ":
                  pathname === link.href,
                "text-zinc-400": pathname !== link.href,
              }
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
