<template>
  <label :for="forName" class="text-sm grid gap-1 cursor-pointer">
    <span class="font-bold" v-if="label">
      {{ label }}
    </span>
    <span class="relative flex items-center ">
      <slot name="icon" />
      <slot name="input" />
    </span>
  </label>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const { label } = defineProps({
  label: {type: String, required: true },
  forName: {type: String, required: true },
});


</script>
