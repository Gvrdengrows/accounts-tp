import type { FieldMetaData } from "./formFieldMetaData";

export interface AccountForm {
  tags: FieldMetaData<string>;
  type: FieldMetaData<"local" | "ldap">;
  login: FieldMetaData<string>;
  password: FieldMetaData<string>;
  [key: string]: FieldMetaData<any>;
}
