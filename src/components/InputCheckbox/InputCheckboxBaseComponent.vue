<template>
  <input
    @input="updateValue"
    type="checkbox"
    :checked="modelValue"
    :value="modelValue"
    v-bind="$attrs"
  >

</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const emits = defineEmits(["update:modelValue"]);

const { modelValue } = defineProps({
  modelValue: {type: Boolean, required: true },
});

const updateValue = (e: Event) => {
  if (e.target) emits("update:modelValue", (e.target as HTMLInputElement).checked);
};
</script>
