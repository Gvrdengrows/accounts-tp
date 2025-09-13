<script setup lang="ts">
import { useAccountStore } from "@stores/account.store";
import { NButton, NCard, NFlex, NIcon } from "naive-ui";
const accountStore = useAccountStore();

const addAccount = () => {
  accountStore.addAccount();
};
</script>
<template>
  <n-flex size="large" align="center">
    <h1>Учетные записи</h1>
    <n-button size="large" round strong secondary @click="addAccount()">
      <n-icon size="30">
        <img src="/assets/icons/plus-icon.svg" alt="add" />
      </n-icon>
    </n-button>
  </n-flex>
  <n-card title="Подсказка" size="small">
    Для указания нескольких заметок для одной пары логин/пароль
    <b>используйте разделитель ;</b>
  </n-card>
</template>
<style lang="scss" scoped>
.n-card {
  width: fit-content;
  background-color: #fafafa;
  border-radius: 12px;

  &:hover {
    box-shadow: 11px 11px 17px -19px rgba(0, 0, 0, 0.63);
    -webkit-box-shadow: 11px 11px 17px -19px rgba(0, 0, 0, 0.63);
    -moz-box-shadow: 11px 11px 17px -19px rgba(0, 0, 0, 0.63);
  }
}
</style>
