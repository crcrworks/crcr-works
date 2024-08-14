import { Info, Props as InfoProps } from "@routes/about/info";
import { Account, Props as AccountProps } from "@routes/about/account";
import { Works, Props as WorkProps } from "@routes/about/works";
import style from "@routes/about/style.module.scss";
import { Mail } from "lucide-react";
import { getWorks } from "@/utils/getWorks";

const description = "Hello xxxxxxxxxxxxxxxxx";

const info: InfoProps[] = [
  {
    title: "Skills",
    tags: [
      "Motion Graphics",
      "Graphic Design",
      "Typo Graphy",
      "Frontend Dev",
      "Backend Dev",
      "Game Dev",
    ],
  },
  {
    title: "Tools",
    tags: ["AfterEffects", "Figma", "Vim"],
  },
];

const accounts: AccountProps[] = [
  {
    icon: <Mail />,
    text: "crcr.works@gmail.com",
    url: "",
  },
  {
    icon: (
      <div>
        <svg
          width="22"
          viewBox="0 0 1200 1227"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
            fill="white"
          />
        </svg>
      </div>
    ),
    text: "@crcr_works",
    url: "",
  },
  {
    icon: (
      <div>
        <svg
          fill="#ffffff"
          width="25"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 310 310"
          xmlSpace="preserve"
        >
          <g id="XMLID_822_">
            <path
              id="XMLID_823_"
              d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938
		C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527
		C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991
		c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764
		c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861
		C204.394,157.263,202.325,160.684,199.021,162.41z"
            />
          </g>
        </svg>
      </div>
    ),
    text: "@crcr9199",
    url: "https://www.youtube.com/@crcr9199",
  },
];

export default async function About() {
  const works = getWorks("src/data/works");

  const comission: WorkProps = {
    workType: "Comission",
    works: works
      .filter((w) => w.data.category === "comission")
      .map((w) => w.data),
  };

  const personal: WorkProps = {
    workType: "Personal",
    works: works
      .filter((w) => w.data.category === "personal")
      .map((w) => w.data),
  };

  return (
    <main className={style.about}>
      <div className={style.introduction}>
        <div className={style.myself}>
          <p className={style.name}>CRCR</p>
          <p className={style.desc}>{description}</p>
        </div>
        <div className={style.infoContainer}>
          {info.map((i) => (
            <Info key={i.title} {...i} />
          ))}
        </div>
        <div className={style.accountContainer}>
          <p className={style.title}>Accounts</p>
          {accounts.map((a) => (
            <Account key={a.text} {...a} />
          ))}
        </div>
      </div>
      <div className={style.works}>
        <div className={style.title}>Works</div>
        <div>{ }</div>
        <Works {...comission} />
        <Works {...personal} />
      </div>
    </main>
  );
}
