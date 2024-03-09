import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { ref } from "vue";

import { Status, User, UserCreatedProps } from "../types/userTypes";

const USERS_DEFAULT: User[] = [
  { id: 1, name: "Victor Souza", doc: "123456", status: Status.ATIVO, password: "123" },
  { id: 2, name: "Jonh Snow", doc: "654321", status: Status.ATIVO, password: "123"  },
  { id: 3, name: "Jack Sparrow", doc: "456789", status: Status.DESATIVADO, password: "123"  },
  { id: 4, name: "Peter Parker", doc: "987654", status: Status.DESATIVADO, password: "123"  },
];

export const useUsersStore = defineStore("users", () => {
  const users = useStorage<User[]>("users", USERS_DEFAULT);
  const tabs = ref(["Id", "Name", "Documentos", "Status", "Ação"]);

  function addUserAsync(user: UserCreatedProps) {
    return new Promise((resolve, reject) => {
      const check = users.value.find((u) => u.doc === user.doc);

      if (!check) {
        const payload = {id: users.value.length + 2, ...user, status: Status.ATIVO, };
        users.value = [...users.value, payload];
        resolve(payload);
      } else {
        reject(new Error("Esse documento já está cadastrado"));
      }
    });
  }

  function getUserIdAsync(id: number) {
    return new Promise((resolve, reject) => {
      const userCheck = users.value.find((u: User) => u.id === id);

      if(!userCheck) {
        reject(new Error("Não existe esse usuário"));
      } else {
        resolve(userCheck);
      }
    });
  }

  function updatedUserAsync(user: User) {
    return new Promise((resolve, reject) => {
      const userCheck = users.value.find((u: User) => u.id === user.id);

      if(!userCheck) {
        reject(new Error("Não existe esse usuário"));
      } else {
        const listRemovedUser = users.value.filter((u: User) => u.doc !== user.doc);
        users.value = [...listRemovedUser, user];
        resolve(true);
      }
    });
  }

  return {
    users,
    tabs,

    addUserAsync,
    getUserIdAsync,
    updatedUserAsync,
  };
});
