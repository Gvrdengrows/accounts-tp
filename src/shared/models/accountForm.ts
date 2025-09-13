import type { FieldMetaData } from "./formFieldMetaData";

export interface AccountForm {
  id: FieldMetaData<string>;
  tags: FieldMetaData<string>;
  type: FieldMetaData<"local" | "ldap" | "">;
  login: FieldMetaData<string>;
  password: FieldMetaData<string | null>;
  [key: string]: FieldMetaData<any>;
}
