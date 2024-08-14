import Link from "next/link";
import style from "./style.module.scss";
import { WorksData } from "@/utils/getWorks";

export type Props = {
  workType: "Comission" | "Personal";
  works: WorksData[];
};

export function Works(props: Props) {
  const { workType, works } = props;

  return (
    <>
      <div className={style.titleContainer}>
        <div className={style.title}>{workType}</div>
        <hr />
      </div>
      {works.map((work) => (
        <Link key={work.slug} className={style.work} href={`blog/${work.slug}`}>
          <div className={style.date}>{work.date}</div>
          <div className={style.description}>{work.description}</div>
        </Link>
      ))}
    </>
  );
}
