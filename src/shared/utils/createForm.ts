import { reactive, watch } from "vue";
import type { FieldMetaData } from "../models/formFieldMetaData";

export function createForm<T extends Record<string, FieldMetaData<any>>>(
  template: T
) {
  const reactiveForm = reactive({ ...template }) as T;

  for (const fieldKey of Object.keys(reactiveForm)) {
    const validators = reactiveForm[fieldKey].validators;

    if (validators?.length) {
      watch(
        () => reactiveForm[fieldKey].value,
        (newValue) => {
          for (let validator of validators) {
            if (!validator(newValue)) {
              reactiveForm[fieldKey].error = true;
            } else {
              reactiveForm[fieldKey].error = false;
            }
          }
        },
        { immediate: true }
      );
    }
  }

  return reactiveForm;
}
