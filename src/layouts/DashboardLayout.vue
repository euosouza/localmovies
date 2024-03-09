<template>
  <div class="box-border h-[calc(100vh-64px)]">
    <header class="h-16 border-b border-gray-300 flex justify-between items-center px-4">
      <LogoComponent class="w-40" />
      <div class="flex items-center gap-6">
        <RouterLink to="/user/update/1"
        class="bg-gray-900 w-8 h-8 rounded-full flex items-center justify-center
        text-gray-50 font-bold hover:bg-gray-600 duration-300 ease-in">
          <span>V</span>
        </RouterLink>
        <button class="lg:hidden" @click="handleMenu">
          <FiMenu class="text-3xl" />
        </button>
      </div>
    </header>
    <div class="flex items-stretch h-full">
      <aside class="absolute inset-0 w-full bg-white z-50
          transform -translate-x-full px-4 pb-6 pt-14 duration-300
          lg:block lg:transform lg:translate-x-0 lg:p-8 lg:w-64 lg:border-r lg:border-gray-300 lg:relative"
        :class="showMobile && 'block transform translate-x-0 lg:relative'"
      >
      <button class="lg:hidden" @click="handleMenu">
        <FiX class="absolute top-4 right-6 text-2xl" />
      </button>
      <nav class="flex flex-col justify-between h-full">
        <ul class="flex flex-col gap-2 w-full">
          <li>
            <RouterLink to="/user"
              class="w-full rounded flex items-center gap-2 p-2 hover:bg-gray-300 duration-200 ease-in">
              <FiUsers />
              Usuário
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/customer"
              class="w-full rounded flex items-center gap-2 p-2 hover:bg-gray-300 duration-200 ease-in">
              <FiUser />
              Clientes
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/location"
              class="w-full rounded flex items-center gap-2 p-2 hover:bg-gray-300 duration-200 ease-in">
              <FiRepeat />
              Locações
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/movies"
              class="w-full rounded flex items-center gap-2 p-2 hover:bg-gray-300 duration-200 ease-in">
              <FiVideo />
              Movies
            </RouterLink>
          </li>
        </ul>

        <button class="flex items-center justify-center gap-2 bg-gray-900 h-12
          hover:bg-gray-700 duration-200 ease-in
          box-border p-4 fill-current text-white stroke-2 rounded w-full">
          <FiLogOut />
          Sair
        </button>
      </nav>
      </aside>

      <div class="flex-1 py-6 px-4 md:p-8 overflow-auto  h-full">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FiUser, FiUsers, FiVideo, FiRepeat, FiLogOut, FiMenu, FiX } from "vue3-icons/fi";
import LogoComponent from "../components/LogoComponent.vue";

const showMobile = ref(false);

function handleMenu() {
  showMobile.value = !showMobile.value;
}


</script>
