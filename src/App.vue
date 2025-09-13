<script setup lang="ts">
import { useAccountStore } from "@stores/account.store";
import { onMounted } from "vue";
import AdminPage from "./pages/AdminPage.vue";
import { useBeforeUnload } from "./shared/hooks/beforeUnload";
const { onAppMounted, onAppUnmounted } = useAccountStore();

onMounted(() => {
  onAppMounted();
});
useBeforeUnload(onAppUnmounted);
</script>

<template>
  <AdminPage />
</template>

<style scoped></style>
