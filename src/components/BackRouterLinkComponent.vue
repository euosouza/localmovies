<template>
  <RouterLink :to="path" class="flex items-center gap-2 max-w-max mb-8 bg-transparent hover:text-brand duration-200">
    <FiArrowLeft />
    <span>{{ title }}</span>
  </RouterLink>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import {  FiArrowLeft } from "vue3-icons/fi";

const { title, path } = defineProps({
  title: { type: String, required: true},
  path: { type: String, required: true},
});

</script>

