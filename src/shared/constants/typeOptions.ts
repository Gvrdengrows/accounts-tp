import type { SelectMixedOption } from "naive-ui/es/select/src/interface";

export const LDAP = "ldap";
export const LOCAL = "local";

export const typeOptions: SelectMixedOption[] = [
  { value: LDAP, label: "LDAP" },
  { value: LOCAL, label: "Локальная" },
];
