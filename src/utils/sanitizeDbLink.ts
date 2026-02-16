import { dbTypeList } from "@/consts/db.ts";

export const sanitizeDbLink = (link: string) => {
  if (!isInternalDbLink(link)) return link;
  const myType = dbTypeList.find((type) => link.includes(type))!;
  const accession = link
    .split("/")
    .filter((item) => item !== "")
    .pop();
  return `/entry/${myType}/${accession}/`;
  //
};

export const isInternalDbLink = (link: string) => {
  return dbTypeList.some((type) => link.includes(type));
};
