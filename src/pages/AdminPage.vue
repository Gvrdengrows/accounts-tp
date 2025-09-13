<script setup lang="ts">
import AccountComponent from "@components/AccountComponent.vue";
import AdminHeader from "@components/AdminHeader.vue";
import { useAccountStore } from "@stores/account.store";
import { storeToRefs } from "pinia";

const { accountsList } = storeToRefs(useAccountStore());
</script>
<template>
  <div class="admin-page">
    <AdminHeader />
    <div class="form">
      <div class="form__titles">
        <div>Метки</div>
        <div>Тип записи</div>
        <div>Логин</div>
        <div>Пароль</div>
      </div>
      <template v-for="(_, index) of accountsList">
        <AccountComponent :index="index" />
      </template>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.admin-page {
  width: 85%;
  margin: auto;
}

.form {
  margin-top: 32px;
  display: grid;
  gap: 16px;

  &__titles {
    display: grid;
    grid-template-columns: 23% 14% 28% 28% 7%;
    gap: 6px;
  }
}
</style>
