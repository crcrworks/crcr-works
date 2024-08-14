"use client";

import { usePathname } from "next/navigation";
import style from "./style.module.scss";
import { PageLink } from "./components/pagelink";

export function Header() {
  const pathname = usePathname();

  return (
    <div className={style.header}>
      <PageLink name={"CRCR"} url={"/"} active={pathname === "/"} />
      <PageLink name={"About"} url={"/about"} active={pathname === "/about"} />
      <PageLink
        name={"Videos"}
        url={"/videos"}
        active={pathname === "/videos"}
      />
      <PageLink
        name={"AppDev"}
        url={"/appdev"}
        active={pathname === "/appdev"}
      />
      <PageLink
        name={"Contact"}
        url={"/contact"}
        active={pathname === "/contact"}
      />
    </div>
  );
}
