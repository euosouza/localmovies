<template>
  <BackRouterLinkComponent path="/location" title="Voltar"/>
  <TextSectionPageComponent title="Criar locação" text="Digite as informações abaixo para criar sua locação" />

  <form class="mt-8" @submit="handleSubmit">
    <div class="grid gap-6">
      <InputWrapperComponent label="Cliente" for-name="customer">
        <template #icon>
          <FiUser  />
        </template>

        <template #input>
          <InputBaseComponent
            v-model="form.location.customer.name"
            placeholder="Digite o nome do cliente"
            type="search"
            id="customer"
            required
            list="list-customer"
          />
          <datalist id="list-customer">
            <option v-for="(customer, index) in filterCustomer" :key="index">
              {{ customer.name }} {{ customer.surname }}
            </option>
          </datalist>
        </template>
      </InputWrapperComponent>

      <InputWrapperComponent label="Filmes" for-name="movie">
        <template #icon>
          <FiUser  />
        </template>

        <template #input>
          <InputBaseComponent
            placeholder="Digite seu filme"
            type="text"
            id="movie"
            required
            v-model="form.location.movies"
          />
        </template>
      </InputWrapperComponent>

      <InputWrapperComponent label="Data da devolução" for-name="deliveryDate">
        <template #icon>
          <FiUser  />
        </template>

        <template #input>
          <InputBaseComponent
            type="date"
            id="deliveryDate"
            required
            v-model="form.location.deliveryDate"
          />
        </template>
      </InputWrapperComponent>

    </div>
    <div class="relative mt-1 ml-2">
      <span v-if="form.error" class="text-red-500 text-xs absolute">{{ form.error }}</span>
    </div>
    <ButtonComponent class="mt-12" title="Criar locação" type="submit"/>
    {{ form.location.deliveryDate }}
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { FiUser } from "vue3-icons/fi";

import { useLocationStore } from "../../store/useLocationStore";
import {  LocationCreateProps } from "../../types/locationTypes";

import { useCustomersStore } from "../../store/useCustomersStore";
import { Customer, Status as StatusCustomer } from "../../types/customerTypes";

import InputWrapperComponent from "../../components/Input/InputWrapperComponent.vue";
import InputBaseComponent from "../../components/Input/InputBaseComponent.vue";
import ButtonComponent from "../../components/ButtonComponent.vue";
import BackRouterLinkComponent from "../../components/BackRouterLinkComponent.vue";
import TextSectionPageComponent from "../../components/TextSectionPageComponent.vue";

const initialCustomer = {
    id: null, name: "", surname: "", cpf: "", status: StatusCustomer.ATIVO,
    contacts: { email: "", phone: ""},
    address: {
      zipCode: "", publicPlace: "",
      neighborhood: "", city: "", state: ""
    }
};

type formType = {
  error: string,
  location: LocationCreateProps
}

const router = useRouter();
const form = ref<formType>({ error: "", location: { customer: initialCustomer,  movies: "", deliveryDate: "" }});
const store = useLocationStore();
const storeCustomer = useCustomersStore();

function handleSubmit(e: Event) {
  e.preventDefault();

  const customer = storeCustomer.customers.find((c) =>
    `${c.name} ${c.surname}` === form.value.location.customer.name);

  if(!customer) {
    form.value.error = "Usuário não encontrado";
    return;
  }

  form.value.location.customer = {...customer};

  store.addLocationAsync(form.value.location)
    .then(() => router.push({ path: "/location" }))
    .catch((e) => console.log(e));
}

const filterCustomer = computed<Customer[]>(() => storeCustomer.customers.filter((c) =>
  c.name.toLocaleLowerCase().includes(form.value.location.customer.name.toLocaleLowerCase()))
);

</script>
