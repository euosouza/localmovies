<template>
  <BackRouterLinkComponent path="/customer" title="Voltar"/>
  <TextSectionPageComponent title="Editar cliente" text="Atualize as informações abaixo para editar seu cliente" />

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

      <InputWrapperComponent label="CPF" for-name="cpf" class="cursor-not-allowed">
        <template #icon>
          <FiUser class="absolute left-3 text-lg" />
        </template>

        <template #input>
          <InputBaseComponent
          class="bg-gray-200 cursor-not-allowed"
            placeholder="Digite o CPF"
            type="text"
            id="cpf"
            required
            readOnly
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

      <InputCheckboxWrapperComponent
        for-name="customerDisabeld"
        :label="`${customerDisabled ? 'Desabilitar' : 'Ativar'} cliente`"
      >
        <template #input>
          <InputCheckboxBaseComponent
            v-model="customerDisabled"
            @update:model-value="handleStatusCustomer"
            id="customerDisabeld"
          />
        </template>
      </InputCheckboxWrapperComponent>

      <ButtonComponent title="Salvar informações" type="submit"/>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { FiUser } from "vue3-icons/fi";

import { useCustomersStore } from "../../store/useCustomersStore";
import {  Status, Customer  } from "../../types/customerTypes";

import InputWrapperComponent from "../../components/Input/InputWrapperComponent.vue";
import InputBaseComponent from "../../components/Input/InputBaseComponent.vue";
import ButtonComponent from "../../components/ButtonComponent.vue";
import BackRouterLinkComponent from "../../components/BackRouterLinkComponent.vue";
import TextSectionPageComponent from "../../components/TextSectionPageComponent.vue";
import InputCheckboxBaseComponent from "../../components/InputCheckbox/InputCheckboxBaseComponent.vue";
import InputCheckboxWrapperComponent  from "../../components/InputCheckbox/InputCheckboxWrapperComponent.vue";

const router = useRouter();
const route = useRoute();

const customer = ref<Customer>({
    id: null, name: "", surname: "", cpf: "", status: Status.ATIVO,
    contacts: { email: "", phone: ""},
    address: { zipCode: "", publicPlace: "", neighborhood: "", city: "", state: "" }
  }
);

const customerDisabled = ref(false);
const { updatedCustomerAsync, getCustomerIdAsync } = useCustomersStore();

onMounted(() => {
  getCustomerIdAsync(Number(route.params.id))
    .then((r) => {
      customer.value = {...r as Customer};
      customerDisabled.value = customer.value.status == Status.ATIVO;
    });
});

const handleStatusCustomer = () => {
  customer.value.status = customerDisabled.value? Status.ATIVO : Status.DESATIVADO;
};

async function handleSubmit(e: Event) {
  e.preventDefault();

  // TODO: Adicionar modal ou alert para ambos retornos
  updatedCustomerAsync(customer.value)
    .then(() => router.push({ path: "/customer" }))
    .catch((e) => console.log(e));
}
</script>
