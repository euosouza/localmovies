<template>
  <input
    class="w-full p-4 pl-10 h-12 border-gray-400
      border rounded box-border border-gray-500 placeholder-gray-40
    "
    @input="updateValue"
    :value="modelValue"
    v-bind="$attrs"
  >

</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const emits = defineEmits(["update:modelValue"]);

const { modelValue } = defineProps({
  modelValue: {type: String, required: true },
});

const updateValue = (e: Event) => {
  if (e.target) emits("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
