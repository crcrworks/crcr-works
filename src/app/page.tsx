import { PageCard, Props as PageCardContetnt } from "@routes/home/pagecard";
import style from "@routes/home/style.module.scss";
import Link from "next/link";

const pageCardContents: PageCardContetnt[] = [
  {
    title: "Videos",
    thumbnail: null,
    url: "/videos",
  },
  {
    title: "AppDev",
    thumbnail: null,
    url: "/appdev",
  },
  {
    title: "Contact",
    thumbnail: null,
    url: "/contact",
  },
];

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.myself}>
        <p className={style.name}>CRCR</p>
        <p className={style.desc}>Design / Motion / Code</p>
        <Link className={style.aboutme} href={"/about"}>
          About Me
        </Link>
      </div>
      <div className={style.contents}>
        <div className={style.container}>
          {pageCardContents.map((content) => (
            <PageCard key={content.title} {...content} />
          ))}
        </div>
      </div>
    </main>
  );
}
