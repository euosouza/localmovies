<template>
  <BackRouterLinkComponent path="/customer" title="Voltar"/>
  <TextSectionPageComponent title="Criar cliente" text="Digite as informações abaixo para criar seu cliente" />

  <form class="mt-8" @submit="handleSubmit">
    <div class="grid gap-6">
      <InputWrapperComponent label="Nome" for-name="name">
        <template #icon>
          <FiUser class="absolute left-3 text-lg" />
        </template>

        <template #input>
          <InputBaseComponent
            placeholder="Digite o nome do cliente"
            type="text"
            id="name"
            required
            v-model="customer.name"
          />
        </template>
      </InputWrapperComponent>

      <InputWrapperComponent label="Sobrenome" for-name="surname">
        <template #icon>
          <FiUser class="absolute left-3 text-lg" />
        </template>

        <template #input>
          <InputBaseComponent
            placeholder="Digite o sobrenome"
            type="text"
            id="surname"
            required
            v-model="customer.surname"
          />
        </template>
      </InputWrapperComponent>

      <InputWrapperComponent label="CPF" for-name="cpf">
        <template #icon>
          <FiUser class="absolute left-3 text-lg" />
        </template>

        <template #input>
          <InputBaseComponent
            placeholder="Digite o CPF"
            type="text"
            id="cpf"
            required
            v-model="customer.cpf"
          />
        </template>
      </InputWrapperComponent>

      <InputWrapperComponent label="E-mail" for-name="email">
        <template #icon>
          <FiUser class="absolute left-3 text-lg" />
        </template>

        <template #input>
          <InputBaseComponent
            placeholder="Digite o e-mail"
            type="email"
            id="email"
            required
            v-model="customer.contacts.email"
          />
        </template>
      </InputWrapperComponent>

      <InputWrapperComponent label="Telefone" for-name="phone">
        <template #icon>
          <FiUser class="absolute left-3 text-lg" />
        </template>

        <template #input>
          <InputBaseComponent
            placeholder="Digite o telefone"
            type="phone"
            id="phone"
            required
            v-model="customer.contacts.phone"
          />
        </template>
      </InputWrapperComponent>

      <InputWrapperComponent label="CEP" for-name="cep">
        <template #icon>
          <FiUser class="absolute left-3 text-lg" />
        </template>

        <template #input>
          <InputBaseComponent
            placeholder="Digite o CEP"
            type="text"
            id="cep"
            required
            v-model="customer.address.zipCode"
          />
        </template>
      </InputWrapperComponent>

      <InputWrapperComponent label="Endereço" for-name="neighborhood">
        <template #icon>
          <FiUser class="absolute left-3 text-lg" />
        </template>

        <template #input>
          <InputBaseComponent
            placeholder="Digite o endereço"
            type="text"
            id="neighborhood"
            required
            v-model="customer.address.neighborhood"
          />
        </template>
      </InputWrapperComponent>

      <InputWrapperComponent label="Cidade" for-name="city">
        <template #icon>
          <FiUser class="absolute left-3 text-lg" />
        </template>

        <template #input>
          <InputBaseComponent
            placeholder="Digite o cidade"
            type="text"
            id="city"
            required
            v-model="customer.address.city"
          />
        </template>
      </InputWrapperComponent>

      <InputWrapperComponent label="Estado" for-name="state">
        <template #icon>
          <FiUser class="absolute left-3 text-lg" />
        </template>

        <template #input>
          <InputBaseComponent
            placeholder="Digite o estado"
            type="text"
            id="state"
            required
            v-model="customer.address.state"
          />
        </template>
      </InputWrapperComponent>

      <ButtonComponent title="Criar cliente" type="submit"/>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { FiUser } from "vue3-icons/fi";

import { useCustomersStore } from "../../store/useCustomersStore";
import {  CustomerCreateProps, Status } from "../../types/customerTypes";

import InputWrapperComponent from "../../components/Input/InputWrapperComponent.vue";
import InputBaseComponent from "../../components/Input/InputBaseComponent.vue";
import ButtonComponent from "../../components/ButtonComponent.vue";
import BackRouterLinkComponent from "../../components/BackRouterLinkComponent.vue";
import TextSectionPageComponent from "../../components/TextSectionPageComponent.vue";

const router = useRouter();

const customer= ref<CustomerCreateProps>({
    name: "", surname: "", cpf: "", status: Status.ATIVO,
    contacts: { email: "", phone: ""},
    address: { zipCode: "", publicPlace: "", neighborhood: "", city: "", state: "" }
  }
);
const { addCustomerAsync } = useCustomersStore();

async function handleSubmit(e: Event) {
  e.preventDefault();

  // TODO: Adicionar modal ou alert para ambos retornos
  addCustomerAsync(customer.value)
    .then(() => router.push({ path: "/customer" }))
    .catch((e) => console.log(e));
}
</script>
