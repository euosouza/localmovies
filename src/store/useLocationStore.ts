import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { ref } from "vue";

import { Status, Location, LocationCreateProps } from "../types/locationTypes";
const date = new Date().toLocaleDateString("pt-BR");


const USERS_DEFAULT: Location[] = [
  {
    id: 1, customer_id: 1, movies: "123456",
    rentDate: date, deliveryDate: date, user_id: 2, status: Status.ALUGADO
  },
  {
    id: 2, customer_id: 3, movies: "123456",
    rentDate: date, deliveryDate: date, user_id: 1, status: Status.ALUGADO
  },
  {
    id: 3, customer_id: 4, movies: "123456",
    rentDate: date, deliveryDate: date, user_id: 1, status: Status.ALUGADO
  },
];

export const useLocationStore = defineStore("users", () => {
  const locations = useStorage<Location[]>("locations", USERS_DEFAULT);
  const tabs = ref(["Id", "Cliente", "Filmes", "Data retirada", "Data entrega","Usuário","Status"]);

  function addLocationAsync(location: LocationCreateProps) {
    return new Promise((resolve, reject) => {
      const checkLocation = locations.value.find((l) =>
        l.customer_id === location.customer_id && l.status == Status.ALUGADO
      );

      if (!checkLocation) {
        const payload = {id: locations.value.length + 2, ...location, status: Status.ALUGADO };
        locations.value = [...locations.value, payload];
        resolve(payload);
      } else {
        reject(new Error("Usuario já tem locação em andamento"));
      }
    });
  }

  return {
    locations,
    tabs,

    addLocationAsync,
  };
});
