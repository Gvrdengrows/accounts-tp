import type { Tag } from "./tag";

export interface Account {
  id: string;
  tags: Tag[] | null;
  type: "local" | "ldap" | "";
  login: string;
  password: string | null;
}
