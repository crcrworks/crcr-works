import style from "./style.module.scss";
import { Tag } from "./tag";

export type Props = {
  title: string;
  tags: string[];
};

export function Info(props: Props) {
  const { title, tags } = props;

  return (
    <div className={style.info}>
      <p className={style.title}>{title}</p>
      <div className={style.tagsContainer}>
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
}
