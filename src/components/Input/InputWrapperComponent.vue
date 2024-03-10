<template>
  <label :for="forName" class="text-sm grid gap-1 cursor-pointer">
    <span class="font-bold" v-if="label">
      {{ label }}
    </span>
    <span class="relative flex items-center ">
      <span class="absolute left-3 text-lg"><slot name="icon" /></span>

      <slot name="input" />
    </span>
  </label>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const { label } = defineProps({
  label: {type: String  },
  forName: {type: String, required: true },
});


</script>
