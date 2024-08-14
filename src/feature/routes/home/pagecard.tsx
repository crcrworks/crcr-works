import style from "./style.module.scss";
import Link from "next/link";

export type Props = {
  title: string;
  thumbnail: string | null;
  url: string;
};

export function PageCard(props: Props) {
  const { title, url } = props;

  return (
    <Link href={url} className={style.pagecard}>
      <div></div>
      <p>{title}</p>
    </Link>
  );
}
