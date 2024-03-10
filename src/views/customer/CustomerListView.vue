<template>
  <div class="flex flex-col gap-4 sm:items-center sm:justify-between sm:flex-row sm:mb-16">
    <div class="">
      <h1 class="text-3xl font-bold">Bem-vindo! </h1>
      <p>Aqui está uma lista de cliente.</p>
    </div>
    <RouterLink to="/customer/create" class="flex items-center justify-center gap-2 bg-gray-900 h-12
      hover:bg-gray-700 duration-200 ease-in
      box-border p-4 fill-current text-white stroke-2 rounded w-48">
      Criar cliente
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
          placeholder="Buscar cliente"
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
        <tr v-for="(item, index) in customers" :key="index" class="border-b border-gray-400">
          <td class="px-3 py-3">{{ item.id }}</td>
          <td class="px-3 py-3">
            <RouterLink :to="{params: {id: item.id}, name: 'customer-update'}" class="hover:text-brand duration-200">
              {{ `${item.name} ${item.surname}`}}
            </RouterLink>
          </td>
          <td class="px-3 py-3">{{ item.cpf }}</td>
          <td class="px-3 py-3">
            Ver contatos
            <!-- {{ item.contacts }} -->
          </td>
          <td class="px-3 py-3">
            Ver endereço
            <!-- {{ item.address }} -->
          </td>

          <td class="px-3 py-3">
            <StatusComponent :title="item.status" :color="colorStatus[item.status]"/>
          </td>
          <td class="px-3 py-3">
            <RouterLink :to="{params: {id: item.id}, name: 'customer-update'}"
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

import { useCustomersStore } from "../../store/useCustomersStore";
import { colorStatus } from "../../types/customerTypes";

import StatusComponent from "../../components/StatusComponent.vue";
import { storeToRefs } from "pinia";

const store = useCustomersStore();
const { tabs, customers } = storeToRefs(store);
</script>
