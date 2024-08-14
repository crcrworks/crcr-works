import Link from "next/link";
import React from "react";
import style from "../style.module.scss";

type Props = {
  name: string;
  url: string;
  active: boolean;
};

export function PageLink(props: Props) {
  return (
    <Link
      href={props.url}
      className={`${style.pagelink} ${props.active ? style.active : ""}`}
    >
      <p>{props.name}</p>
    </Link>
  );
}
