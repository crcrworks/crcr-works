import Link from "next/link";
import style from "./style.module.scss";

export type Props = {
  icon: React.ReactNode;
  text: string;
  url: string;
};

export function Account(props: Props) {
  const { text, icon, url } = props;

  return (
    <Link href={url} className={style.account}>
      <div className={style.icon}>{icon}</div>
      <div className={style.text}>{text}</div>
    </Link>
  );
}
