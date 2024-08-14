import fs from "fs";
import matter from "gray-matter";

export type WorksData = {
  category: "comission" | "personal";
  title: string;
  description: string;
  slug: string;
  date: string;
  tags: string[];
};

const listFiles = (dir: string): string[] =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((dirent): string[] => {
    if (dirent.isFile()) {
      if (/^(?!template-|\.).*\.md$/.test(dirent.name)) {
        return [`${dir}/${dirent.name}`];
      } else {
        return [];
      }
    } else {
      return listFiles(`${dir}/${dirent.name}`);
    }
  });

const getData = (fileName: string) => {
  const fileContent = fs.readFileSync(`${fileName}`, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    data: data as WorksData,
    content,
  };
};

export function getWorks(dirPath: string) {
  return listFiles(dirPath)
    .map((fileName) => getData(fileName))
    .sort((a, b) => b.data.date.localeCompare(a.data.date));
}
