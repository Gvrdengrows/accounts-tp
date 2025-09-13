import type { Tag } from "@models/tag";

export const tagsToString = (tags: Tag[]): string => {
  const res: string[] = [];
  if (tags.length) {
    tags.forEach((tag) => res.push(tag.text + ";"));
    return res.join(" ");
  }
  return "";
};

export const tagsToStructure = (tags: string): Tag[] => {
  return tags
    .split(";")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0)
    .map((text) => ({ text }));
};
