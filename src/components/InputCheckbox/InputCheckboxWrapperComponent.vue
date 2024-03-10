<template>
  <label :for="forName" class="flex items-center gap-2 cursor-pointer font-semibold text-sm">
    <slot name="input" />
    <span>
      {{ label }}
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
