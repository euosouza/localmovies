<template>
  <input
    class="w-full md:w-3/4 lg:w-2/4 p-4 pl-10 h-12
      border-gray-400 border rounded box-borderplaceholder-gray-400"
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
