<template>
  <div class="flex flex-col gap-4 mb-8 sm:items-center sm:justify-between sm:flex-row sm:mb-10">
    <div class="">
      <TextSectionPageComponent title="Bem-vindo!" text="Aqui está uma lista de usuários." />

    </div>
    <RouterLink to="/user/create" class="flex items-center justify-center gap-2 bg-gray-900 h-12
      hover:bg-gray-700 duration-200 ease-in
      box-border p-4 fill-current text-white stroke-2 rounded w-48">
      Criar usuário
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
        for-name="name"
        class="flex-1 min-w-max w-full"
      >
        <template #icon>
          <FiSearch />
        </template>

        <template #input>
          <InputBaseComponent
            placeholder="Buscar usuário"
            type="text"
            id="name"
            required
            v-model="form.name"
            @update:model-value="handleUpdateInput"
          />
        </template>
      </InputWrapperComponent>

      <InputSelectWrapperComponent
        for-name="status"
        class="min-w-max w-full md:w-auto"
      >
        <template #icon>
          <FiEye />
        </template>

        <template #input>
          <InputSelectBaseComponent
            id="status"
            required
            v-model="form.status"
            :list="['Ativo', 'Desativado']"
            @update:model-value="handleUpdateInput"
          />
        </template>
      </InputSelectWrapperComponent>

      <ButtonComponent
        class="min-w-max"
        title="Buscar"
        @click.prevent="handleSearch"
      />
    </div>

    <div class="relative mt-1 ml-2">
      <span v-if="form.error" class="text-red-500 text-xs absolute">{{ form.error }}</span>
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
        <tr v-for="(item, index) in usersRender" :key="index" class="border-b border-gray-400">
          <td class="px-3 py-3">{{ item.id }}</td>
          <td class="px-3 py-3">
            <RouterLink :to="{params: {id: item.id}, name: 'user-update'}" class="hover:text-brand duration-200">
              {{ item.name }}
            </RouterLink>
          </td>
          <td class="px-3 py-3">{{ item.doc }}</td>
          <td class="px-3 py-3">
            <StatusComponent :title="item.status" :color="colorStatus[item.status]"/>
          </td>
          <td class="px-3 py-3">
            <RouterLink :to="{params: {id: item.id}, name: 'user-update'}"
              class="flex items-center justify-center gap-2 bg-gray-900 text-white text-xs font-bold
                max-w-max py-1 px-2 rounded hover:bg-gray-700 duration-200 ease-in
              "
            >
              <FiSettings class="stroke-2"/>
              <span>Editar</span>
            </RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { FiSearch, FiSettings, FiEye } from "vue3-icons/fi";

import {  onMounted, ref } from "vue";
import { computed } from "vue";

import { useUsersStore } from "../../store/useUsersStore";
import {  User,  colorStatus } from "../../types/userTypes";

import StatusComponent from "../../components/StatusComponent.vue";
import ButtonComponent from "../../components/ButtonComponent.vue";
import InputWrapperComponent from "../../components/Input/InputWrapperComponent.vue";
import InputBaseComponent from "../../components/Input/InputBaseComponent.vue";
import InputSelectWrapperComponent from "../../components/InputSelect/InputSelectWrapperComponent.vue";
import InputSelectBaseComponent from "../../components/InputSelect/InputSelectBaseComponent.vue";
import TextSectionPageComponent from "../../components/TextSectionPageComponent.vue";

const store = useUsersStore();
const initialValueForm = { name: "", status: "", error: "" };
const form = ref(initialValueForm);
const users = ref<User[]>([]);

onMounted(() => {
  users.value =[...store.users];
});

const usersRender = computed<User[]>(() => {
  return users.value;
});

function handleSearch() {
  if(form.value.name && !form.value.status){
    users.value = store.users.filter((u) => u.name.toLowerCase().includes(form.value.name.toLowerCase()));

    if(!users.value.length){
      form.value.error = "Usuário não existe";
      users.value =[...store.users];
    }
  }
  else if(!form.value.name && form.value.status){
    users.value = store.users.filter((u) => u.status === form.value.status);
  }
  else if(form.value.name && form.value.status) {
    users.value= store.users.filter((u) =>
      u.name.toLowerCase().includes(form.value.name.toLowerCase()) && u.status === form.value.status);

    if(!users.value.length){
      form.value.error = "Usuário não existe";
      users.value =[...store.users];
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
  form.value.name = "";
  form.value.status = "";
}

function clearSearch() {
  resetForm();
  users.value =[...store.users];
}
</script>
