import { getWorks } from "@/utils/getWorks";
import Markdown from "react-markdown";

export async function generateStaticParams() {
  const works = getWorks("src/data/works");

  return works.map((w) => ({
    slug: w.data.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const works = getWorks("src/data/works");
  const work = works.filter((w) => w.data.slug === slug)[0];

  return (
    <main>
      <Markdown>{work.content}</Markdown>
    </main>
  );
}
