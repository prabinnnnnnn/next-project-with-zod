"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  {
    title: "Artists",
    direct: "/artists",
  },
  {
    title: "About",
    direct: "/about",
  },
  {
    title: "Contact",
    direct: "/contact",
  },
];

function NavigateNavBar() {
  const pathName = usePathname();

  return (
    <div className="flex items-center gap-x-7">
      <div className="flex items-center">
        <Link href={"/"}>
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={30}
            height={30}
            priority
          />
        </Link>
      </div>
      <ul className="flex items-center gap-x-5 font-semibold text-sm">
        {navLinks.map((nav, index) => (
          <Link href={nav.direct} key={index}>
            <li
              className={`${
                pathName === nav.direct ? "opacity-90" : "opacity-60"
              }`}
            >
              {nav.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default NavigateNavBar;
