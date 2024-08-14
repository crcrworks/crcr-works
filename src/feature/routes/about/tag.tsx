import style from "./style.module.scss";

type Props = {
  tag: string;
};

export function Tag(props: Props) {
  const { tag } = props;
  return <div className={style.tag}>{tag}</div>;
}
