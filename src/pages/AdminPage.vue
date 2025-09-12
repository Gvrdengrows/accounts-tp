<script setup lang="ts">
import AdminHeader from "@components/AdminHeader.vue";
import type { AccountForm } from "@models/accountForm";
import { createForm } from "@utils/createForm";
import { onlyString } from "@utils/validators";

const metadata: AccountForm = {
  tags: { value: "string", validators: [] },
  type: { value: "ldap", validators: [] },
  login: { value: "string", validators: [onlyString] },
  password: { value: "string", validators: [onlyString] },
};

const form = createForm<AccountForm>(metadata);
</script>
<template>
  <div class="admin-page">
    <AdminHeader />
    <div class="form">
      <div class=""></div>
      <input v-model="form.login.value" />
      <input v-model="form.password.value" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.admin-page {
  padding: 60px 200px;
}
</style>
