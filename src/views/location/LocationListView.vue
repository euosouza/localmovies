<template>
  <div class="flex flex-col gap-4 sm:items-center sm:justify-between sm:flex-row sm:mb-16">
    <div class="">
      <TextSectionPageComponent title="Bem-vindo!" text="Aqui está uma lista de locações." />
    </div>
    <RouterLink to="/location/create" class="flex items-center justify-center gap-2 bg-gray-900 h-12
      hover:bg-gray-700 duration-200 ease-in
      box-border p-4 fill-current text-white stroke-2 rounded w-48">
      Criar locacão
    </RouterLink>
  </div>

  <form class="mt-8 flex flex-col xs:flex-row flex-wrap gap-2 w-full md:items-center md:justify-start md:gap-4 ">

  <label for="name" class="text-sm grid gap-1 cursor-pointer w-full md:w-2/4">
    <span class="relative flex items-center ">
      <FiSearch class="absolute left-3 text-lg" />
      <input
        class="p-4 pl-10 h-12 w-full
        border-gray-400 border rounded box-borderplaceholder-gray-400
        "
        type="text"
        name="name"
        id="name"
        placeholder="Buscar usuário"
      >
    </span>
  </label>

  <label for="name" class="text-sm grid gap-1 cursor-pointer w-full xs:min-w-max xs:flex-1 md:w-1/4">
    <span class="relative flex items-center ">
      <FiEye class="absolute left-3 text-lg" />
      <select name="" id=""
        class="p-4 pl-10 h-12 w-full
        border-gray-400 border rounded box-borderplaceholder-gray-400
        "
      >
        <option value="" disabled>Status</option>
        <option value="Ativo">Ativo</option>
        <option value="Desativado">Desativado</option>
      </select>
    </span>
  </label>

  <button class="flex items-center justify-center gap-2 bg-gray-900 h-12
    hover:bg-gray-700 duration-200 ease-in
    box-border p-4 fill-current text-white stroke-2 rounded w-48 xs:min-w-max xs:flex-1 md:w-1/4">
    Buscar
  </button>
  </form>

  <div class="overflow-auto mt-10 max-h-80 shadow-md">
    <table
      class="w-full border-collapse border-gray-400 border-solid border text-left min-w-md"
    >
      <thead class="border-b border-gray-400 w-full">
        <tr>
          <th class="px-3 py-3" v-for="(item, index) in tabs" :key="index">{{ item }}</th>
        </tr>
      </thead>

      <tbody class="text-gray-500 text-sm w-full">
        <tr v-for="(item, index) in locations" :key="index" class="border-b border-gray-400">
          <td class="px-3 py-3">{{ item.id }}</td>
          <td class="px-3 py-3">{{ item.customer_id }}</td>
          <td class="px-3 py-3">{{ item.movies }}</td>
          <td class="px-3 py-3">{{ item.rentDate }}</td>
          <td class="px-3 py-3">{{ item.deliveryDate }}</td>
          <td class="px-3 py-3">{{ item.user_id }}</td>
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

import { useLocationStore } from "../../store/useLocationStore";
import { colorStatus } from "../../types/locationTypes";

import StatusComponent from "../../components/StatusComponent.vue";
import TextSectionPageComponent from "../../components/TextSectionPageComponent.vue";
import { storeToRefs } from "pinia";

const store = useLocationStore();
const { locations, tabs } = storeToRefs(store);
</script>
