<template>
  <div class="flex items-center gap-2">
    <span class="block w-2 h-2 rounded-full" :class="color" ></span>
    <span>{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const { title } = defineProps({
  title: { type: String, required: true },
  color: { type: String, required: true }
});

</script>
