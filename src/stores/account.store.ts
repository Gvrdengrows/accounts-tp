import type { Account } from "@models/account.model";
import { defineStore } from "pinia";
import { ref } from "vue";

const ACCOUNT_LIST = "accountList";

export const useAccountStore = defineStore("accountStore", () => {
  const accountsList = ref<Account[]>([]);

  function updateAccountsList(index: number, account: Account) {
    accountsList.value[index] = account;
  }

  function addAccount() {
    accountsList.value.push({
      id: "",
      login: "",
      password: "",
      tags: [],
      type: "",
    });
  }

  function deleteAccount(index: number) {
    accountsList.value.splice(index, 1);
  }

  function getAccountByIndex(index: number) {
    return accountsList.value[index];
  }

  function onAppMounted() {
    const cachedAccountList = localStorage.getItem(ACCOUNT_LIST);
    if (cachedAccountList) {
      try {
        const parsedAccountList = JSON.parse(cachedAccountList);
        accountsList.value = parsedAccountList as Account[];
      } catch (error) {
        console.error("Кэшированные данные повреждены :(");
      }
    }
  }

  function onAppUnmounted() {
    try {
      const toCache = JSON.stringify(accountsList.value);
      localStorage.setItem(ACCOUNT_LIST, toCache);
    } catch (error) {
      console.error("Не удалось закэшировать данные :(");
    }
  }

  return {
    accountsList,
    onAppMounted,
    onAppUnmounted,
    getAccountByIndex,
    addAccount,
    deleteAccount,
    updateAccountsList,
  };
});
