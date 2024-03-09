<template>
  <header
    class="bg-gray-100 p-4 border-b-2 border-bg-gray-200 font-bold
      flex justify-between items-center"
    >
    <img src="../assets/images/logo-dark.svg" alt="" class="w-36">
    <RouterLink
      to="/user/update/1"
      class="bg-gray-800 w-8 h-8 rounded-full text-gray-100 cursor-pointer
        flex justify-center items-center">
      <span>V</span>
    </RouterLink>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";


</script>
