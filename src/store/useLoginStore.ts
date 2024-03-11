import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

import { Login } from "../types/loginTypes";
import { useUsersStore } from "./useUsersStore";
import { addDays } from "date-fns";
import { Status } from "../types/userTypes";

export const useLoginStore = defineStore("login", () => {
  const login = useStorage("login", { expired: "", user_id: ""});
  const usersStore = useUsersStore();

  function auth(data: Login) {
    return new Promise((resolve, reject) => {
      const user = usersStore.users.find((u) =>
        u.doc === data.doc && u.password === data.password && u.status !== Status.DESATIVADO);

      if(user && user.id) {
        const date = addDays(new Date(), 1);
        login.value = { expired: date.toString(), user_id: user.id.toString() || ""};
        resolve(true);
      } else {
        reject(new Error("Documento ou senha inválido"));
      }
    });
  }

  function logout() {
    return new Promise((resolve) => {
      login.value = { expired: "", user_id: ""};

      resolve(true);
    });
  }

  return {
    login,
    auth,
    logout,
  };
});
