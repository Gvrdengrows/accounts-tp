<script setup lang="ts">
import { LDAP, typeOptions } from "@constants/typeOptions";
import type { Account } from "@models/account.model";
import type { AccountForm } from "@models/accountForm";
import type { Tag } from "@models/tag";
import { useAccountStore } from "@stores/account.store";
import { createForm } from "@utils/createForm";
import { tagsToString, tagsToStructure } from "@utils/mappers";
import { maxSymbols, required } from "@utils/validators";
import { NButton, NIcon, NInput, NSelect } from "naive-ui";
import { computed } from "vue";

const { index } = defineProps<{ index: number }>();
const accountStore = useAccountStore();
const { getAccountByIndex, deleteAccount, updateAccountsList } = accountStore;
const account = getAccountByIndex(index);

const formattedTags = computed(() => tagsToString(account.tags || []));

const { form, watchForm } = createForm<AccountForm>({
  id: { value: crypto.randomUUID() },
  tags: { value: formattedTags.value, validators: [maxSymbols(50)] },
  type: { value: account.type, validators: [] },
  login: { value: account.login, validators: [required(), maxSymbols(100)] },
  password: {
    value: account.password,
    validators: [required(), maxSymbols(100)],
  },
});

watchForm((formData) => {
  const accountDto: Account = {
    id: formData.id.value,
    login: formData.login.value,
    type: formData.type.value,
    password: "",
    tags: {} as Tag[],
  };

  form.password.disabled = formData.type.value === LDAP;
  if (formData.type.value === LDAP) {
    formData.password.value = null;
  }
  accountDto.password = formData.password.value;

  accountDto.tags = tagsToStructure(formData.tags.value);

  let hasError = false;
  for (let field of Object.values(formData)) {
    if (field.error) {
      hasError = true;
    }
  }
  if (!hasError) {
    updateAccountsList(index, accountDto);
  }
});

const handleDelete = (index: number) => {
  deleteAccount(index);
};
</script>
<template>
  <div class="form-field" :class="form.password.disabled ? 'no-password' : ''">
    <n-input
      v-model:value="form.tags.value"
      :status="form.tags.error ? 'error' : 'success'"
    />
    <n-select v-model:value="form.type.value" :options="typeOptions" />
    <n-input
      v-model:value="form.login.value"
      :status="form.login.error ? 'error' : 'success'"
    />
    <n-input
      v-if="!form.password.disabled"
      v-model:value="form.password.value"
      :disabled="form.password.disabled"
      :status="form.password.error ? 'error' : 'success'"
      type="password"
    />
    <n-button circle @click="handleDelete(index)">
      <n-icon>
        <img src="/assets/icons/delete-icon.svg" alt="delete" />
      </n-icon>
    </n-button>
  </div>
</template>
<style lang="scss" scoped>
.form-field {
  display: grid;
  grid-template-columns: 23% 14% 28% 28% auto;
  gap: 6px;
}

.no-password {
  grid-template-columns: 23% 14% calc(56% - 12px) auto;
}
</style>
