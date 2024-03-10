import { ref } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

import { Status, Location, LocationCreateProps } from "../types/locationTypes";
import { Status as StatusUser} from "../types/userTypes";
import { Status as StatusCustomer} from "../types/customerTypes";

const CUSTOMER_1 = {
  id: 1, name: "Cliente 1", surname: "Sobrenome", cpf: "12345d6", status: StatusCustomer.ATIVO,
  contacts: { email: "email@gmail.com", phone: "(31) 9999-9999"},
  address: {
    zipCode: "32568452", publicPlace: "Rua teste, 56",
    neighborhood: "Prado", city: "Belo horizonte", state: "MG"
  }
};

const CUSTOMER_2 = {
  id: 2, name: "Cliente 2", surname: "Sobrenome", cpf: "1234h56", status: StatusCustomer.ATIVO,
  contacts: { email: "email@gmail.com", phone: "(31) 9999-9999"},
  address: {
    zipCode: "32568452", publicPlace: "Rua teste, 56",
    neighborhood: "Prado", city: "Belo horizonte", state: "MG"
  }
};

const USER_1 = { id: 1, name: "Victor Souza", doc: "123456", status: StatusUser.ATIVO, password: "123" };
const USER_2 = { id: 2, name: "Jonh Snow", doc: "654321", status: StatusUser.ATIVO, password: "123"  };


const USERS_DEFAULT: Location[] = [
  {
    id: 1, customer: CUSTOMER_1, movies: "123456",
    rentDate: "10/03/2024", deliveryDate: "11/03/2024", user: USER_1, status: Status.ALUGADO
  },
  {
    id: 2, customer: CUSTOMER_2, movies: "123456",
    rentDate: "09/02/2024", deliveryDate: "11/02/2024", user: USER_2, status: Status.ENTREGUE
  },
  {
    id: 3, customer: CUSTOMER_1, movies: "123456",
    rentDate: "02/10/2023", deliveryDate: "05/10/2023", user: USER_2, status: Status.ENTREGUE
  },
];

export const useLocationStore = defineStore("users", () => {
  const locations = useStorage<Location[]>("locations", USERS_DEFAULT);
  const tabs = ref(["Id", "Cliente", "Filmes", "Data retirada", "Data entrega","Usuário","Status"]);

  function addLocationAsync(location: LocationCreateProps) {
    return new Promise((resolve, reject) => {
      const checkLocation = locations.value.find((l) =>
        l.customer.id === location.customer.id && l.status == Status.ALUGADO
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
