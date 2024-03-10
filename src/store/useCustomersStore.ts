import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { ref } from "vue";

import { Customer, Status, CustomerCreateProps } from "../types/customerTypes";

const CUSTOMERS_DEFAULT: Customer[] = [
  {
    id: 1, name: "Cliente 1", surname: "Sobrenome", cpf: "12345d6", status: Status.ATIVO,
    contacts: { email: "email@gmail.com", phone: "(31) 9999-9999"},
    address: {
      zipCode: "32568452", publicPlace: "Rua teste, 56",
      neighborhood: "Prado", city: "Belo horizonte", state: "MG"
    }
  },
  {
    id: 2, name: "Cliente 2", surname: "Sobrenome", cpf: "1234h56", status: Status.ATIVO,
    contacts: { email: "email@gmail.com", phone: "(31) 9999-9999"},
    address: {
      zipCode: "32568452", publicPlace: "Rua teste, 56",
      neighborhood: "Prado", city: "Belo horizonte", state: "MG"
    }
  },
  {
    id: 3, name: "Cliente 3", surname: "Sobrenome", cpf: "1235456", status: Status.ATIVO,
    contacts: { email: "email@gmail.com", phone: "(31) 9999-9999"},
    address: {
      zipCode: "32568452", publicPlace: "Rua teste, 56",
      neighborhood: "Prado", city: "Belo horizonte", state: "MG"
    }
  },
  {
    id: 4, name: "Cliente 4", surname: "Sobrenome", cpf: "1239456", status: Status.ATIVO,
    contacts: { email: "email@gmail.com", phone: "(31) 9999-9999"},
    address: {
      zipCode: "32568452", publicPlace: "Rua teste, 56",
      neighborhood: "Prado", city: "Belo horizonte", state: "MG"
    }
  }
];

export const useCustomersStore = defineStore("customers", () => {
  const customers = useStorage<Customer[]>("customers", CUSTOMERS_DEFAULT);
  const tabs = ref(["Id", "Nome", "CPF", "Contato","Endereço", "Status", "Ação"]);

  function addCustomerAsync(customer: CustomerCreateProps) {
    return new Promise((resolve, reject) => {
      const existCpf = customers.value.find((c) => c.cpf === customer.cpf);
      const existEmail = customers.value.find((c) => c.contacts.email === customer.contacts.email);

      if(existEmail) {
        reject(new Error("Esse E-mail já está cadastrado"));
      } else if(existCpf) {
        reject(new Error("Esse CPF já está cadastrado"));
      } else {
        const payload = {id: customers.value.length + 2, ...customer, status: Status.ATIVO, };
        customers.value = [...customers.value, payload];
        resolve(payload);
      }


    });
  }

  function getCustomerIdAsync(id: number) {
    return new Promise((resolve, reject) => {
      const checkCustomer = customers.value.find((u: Customer) => u.id === id);

      if(!checkCustomer) {
        reject(new Error("Não existe esse cliente"));
      } else {
        resolve(checkCustomer);
      }
    });
  }

  function updatedCustomerAsync(customer: Customer) {
    return new Promise((resolve, reject) => {
      const checkCustomer = customers.value.find((c: Customer) => c.id === customer.id);

      if(!checkCustomer) {
        reject(new Error("Não existe esse usuário"));
      } else {
        const listRemovedCustomer = customers.value.filter((c: Customer) => c.cpf !== customer.cpf);
        customers.value = [...listRemovedCustomer, customer];
        resolve(true);
      }
    });
  }

  return {
    customers,
    tabs,

    addCustomerAsync,
    getCustomerIdAsync,
    updatedCustomerAsync
  };
});
