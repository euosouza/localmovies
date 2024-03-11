<template>
  <div class="flex flex-col gap-4 mb-8 sm:items-center sm:justify-between sm:flex-row sm:mb-10">
    <div>
      <TextSectionPageComponent title="Bem-vindo!" text="Aqui está uma lista de locações." />

    </div>
    <RouterLink to="/location/create" class="flex items-center justify-center gap-2 bg-gray-900 h-12
      hover:bg-gray-700 duration-200 ease-in
      box-border p-4 fill-current text-white stroke-2 rounded w-48">
      Criar locação
    </RouterLink>
  </div>

  <div class="text-sm flex justify-end mb-4">
    <button
      @click="clearSearch"
      class="hover:text-brand duration-200"
    >
    Limpar filtros
  </button>
  </div>

  <form class="w-full">
    <div class="flex gap-4 flex-wrap justify-end">
      <InputWrapperComponent
        for-name="customer"
        class="w-full flex-1 sm:w-2/4"
      >
        <template #icon>
          <FiSearch />
        </template>

        <template #input>
          <InputBaseComponent
            placeholder="Buscar por cliente"
            type="text"
            id="customer"
            required
            v-model="form.customer"
            @update:model-value="handleUpdateInput"
          />
        </template>
      </InputWrapperComponent>

      <InputWrapperComponent
        for-name="deliveryDate"
        class="w-full sm:w-1/4"
      >
        <template #icon>
          <FiSearch />
        </template>

        <template #input>
          <InputBaseComponent
            type="date"
            id="deliveryDate"
            required
            v-model="form.deliveryDate"
            @update:model-value="handleUpdateInput"
          />
        </template>
      </InputWrapperComponent>

      <InputSelectWrapperComponent
        for-name="status"
        class="w-full sm:w-1/4"
      >
        <template #icon>
          <FiEye />
        </template>

        <template #input>
          <InputSelectBaseComponent
            id="status"
            required
            v-model="form.status"
            :list="['Alugado', 'Entregue']"
            @update:model-value="handleUpdateInput"
          />
        </template>
      </InputSelectWrapperComponent>
    </div>

    <div class="relative mt-1 ml-2 flex-1">
      <span v-if="form.error" class="text-red-500 text-xs absolute">{{ form.error }}</span>
    </div>

    <div class="flex gap-2 justify-center mt-10 sm:mt-2 sm:justify-end">
      <ButtonComponent
        class="min-w-max"
        title="Buscar"
        @click.prevent="handleSearch"
      />
    </div>
  </form>

  <div class="overflow-auto mt-10 max-h-80 shadow-md">
    <table
      class="w-full border-collapse border-gray-400 border-solid border text-left min-w-md"
    >
      <thead class="border-b border-gray-400 w-full">
        <tr>
          <th class="px-3 py-3" v-for="(item, index) in store.tabs" :key="index">{{ item }}</th>
        </tr>
      </thead>

      <tbody class="text-gray-500 text-sm w-full">
        <tr v-for="(item, index) in locationsRender" :key="index" class="border-b border-gray-400">
          <td class="px-3 py-3">{{ item.id }}</td>
          <td class="px-3 py-3">{{ item.customer.name }} {{ item.customer.surname }}</td>
          <td class="px-3 py-3">{{ item.movies }}</td>
          <td class="px-3 py-3">{{ item.rentDate }}</td>
          <td class="px-3 py-3">{{ item.deliveryDate }}</td>
          <td class="px-3 py-3">{{ item.user.name }}</td>
          <td class="px-3 py-3">
            <StatusComponent :title="item.status" :color="colorStatus[item.status]"/>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { FiSearch, FiEye } from "vue3-icons/fi";
import { format, parseISO  } from "date-fns";

import {  onMounted, ref } from "vue";
import { computed } from "vue";

import { useLocationStore } from "../../store/useLocationStore";
import {  Location,  colorStatus } from "../../types/locationTypes";

import StatusComponent from "../../components/StatusComponent.vue";
import ButtonComponent from "../../components/ButtonComponent.vue";
import InputWrapperComponent from "../../components/Input/InputWrapperComponent.vue";
import InputBaseComponent from "../../components/Input/InputBaseComponent.vue";
import InputSelectWrapperComponent from "../../components/InputSelect/InputSelectWrapperComponent.vue";
import InputSelectBaseComponent from "../../components/InputSelect/InputSelectBaseComponent.vue";
import TextSectionPageComponent from "../../components/TextSectionPageComponent.vue";

const store = useLocationStore();
const initialValueForm = { customer: "", status: "", deliveryDate: "", error: "" };
const form = ref(initialValueForm);
const locations = ref<Location[]>([]);

onMounted(() => {
  locations.value =[...store.locations];
});

const locationsRender = computed<Location[]>(() => {
  return locations.value;
});

function handleSearch() {
  if(form.value.customer && !form.value.status && !form.value.deliveryDate){
    locations.value = store.locations.filter((u) =>
    u.customer.name.toLowerCase().includes(form.value.customer.toLowerCase()));

    if(!locations.value.length){
      form.value.error = "Cliente não encontrado";
      locations.value =[...store.locations];
    }
  }
  else if(!form.value.customer && form.value.status && !form.value.deliveryDate){
    locations.value = store.locations.filter((u) => u.status === form.value.status);
  }
  else if(!form.value.customer && !form.value.status && form.value.deliveryDate) {
    locations.value = store.locations.filter((u) =>
    u.deliveryDate === format(parseISO(form.value.deliveryDate), "dd/MM/yyyy"));

    if(!locations.value.length){
      form.value.error = "Não temos nenhuma locação nessa data";
      locations.value =[...store.locations];
    }
  }
  else if(form.value.customer && form.value.status && form.value.deliveryDate) {
    locations.value= store.locations.filter((u) =>
      u.customer.name.toLowerCase().includes(form.value.customer.toLowerCase())
      && u.status === form.value.status && u.deliveryDate === format(parseISO(form.value.deliveryDate), "dd/MM/yyyy"));
    if(!locations.value.length){
      form.value.error = "Cliente não encontrado";
      locations.value =[...store.locations];
    }
  }
  else if(form.value.customer && form.value.status && !form.value.deliveryDate){
    locations.value = store.locations.filter((u) =>
      u.customer.name.toLowerCase().includes(form.value.customer.toLowerCase()) && u.status === form.value.status);

    if(!locations.value.length){
      form.value.error = "Cliente não encontrado";
      locations.value =[...store.locations];
    }
  }
  else if(form.value.customer && !form.value.status && form.value.deliveryDate){
    locations.value = store.locations.filter((u) =>
      u.customer.name.toLowerCase().includes(form.value.customer.toLowerCase())
      && u.deliveryDate === format(parseISO(form.value.deliveryDate), "dd/MM/yyyy"));

    if(!locations.value.length){
      form.value.error = "Cliente não encontrado";
      locations.value =[...store.locations];
    }
  }
  else{
    form.value.error = "Preencha ou selecione no minimo um campo";
  }
}

function handleUpdateInput() {
  form.value.error = "";
}

function resetForm() {
  form.value.error = "";
  form.value.customer = "";
  form.value.status = "";
  form.value.deliveryDate = "";
}

function clearSearch() {
  resetForm();
  locations.value = [...store.locations];
}
</script>
